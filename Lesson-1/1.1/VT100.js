// VT100.js -- a text terminal emulator in JavaScript with a ncurses-like
// interface and a POSIX-like interface. (The POSIX-like calls are
// implemented on top of the ncurses-like calls, not the other way round.)
//
// Released under the GNU LGPL v2.1, by Frank Bi <bi@zompower.tk>
//
// 2007-08-12	- refresh():
//		  - factor out colour code to html_colours_()
//		  - fix handling of A_REVERSE | A_DIM
//		  - simplify initial <br> output code
//		  - fix underlining colour
//		- fix attron() not to turn off attributes
//		- decouple A_STANDOUT and A_BOLD
// 2007-08-11	- getch() now calls refresh()
// 2007-08-06	- Safari compat fix -- turn '\r' into '\n' for onkeypress
// 2007-08-05	- Opera compat fixes for onkeypress
// 2007-07-30	- IE compat fixes:
//		  - change key handling code
//		  - add <br>...<br>&nbsp; so that 1st and last lines align
// 2007-07-28	- change wrapping behaviour -- writing at the right edge no
//		  longer causes the cursor to immediately wrap around
//		- add <b>...</b> to output to make A_STANDOUT stand out more
//		- add handling of backspace, tab, return keys
//		- fix doc. of VT100() constructor
//		- change from GPL to LGPL
// 2007-07-09	- initial release
//
// class VT100
//	A_NORMAL, A_UNDERLINE, A_REVERSE, A_BLINK, A_DIM, A_BOLD, A_STANDOUT
//	=class constants=
//			Attribute constants.
//	VT100(wd, ht, scr_id) =constructor=
//			Creates a virtual terminal with width `wd', and
//			height `ht'. The terminal will be displayed between
//			<pre>...</pre> tags which have element ID `scr_id'.
//	addch(ch [, attr])
//			Writes out the character `ch'. If `attr' is given,
//			it specifies the attributes for the character,
//			otherwise the current attributes are used.
//	addstr(stuff)	Writes out the string `stuff' using the current
//			attributes.
//	attroff(a)	Turns off any current attributes given in `a'.
//	attron(a)	Turns on any attributes given in `a'.
//	attrset(a)	Sets the current attributes to `a'.
//	bkgdset(a)	Sets the background attributes to `a'.
//	clear()		Clears the terminal using the background attributes,
//			and homes the cursor.
//	clrtobol()	Clears the portion of the terminal from the cursor
//			to the bottom.
//	clrtoeol()	Clears the portion of the current line after the
//			cursor.
//	COLOR_PAIR(pn)	Converts a colour pair number `pn' into an
//			attribute.
//	curs_set(vis [, grab])
//			If `vis' is 0, makes the cursor invisible; otherwise
//			make it visible. If `grab' is given and true, starts
//			capturing keyboard events (for `getch()'); if given
//			and false, stops capturing events.
//	echo()		Causes key strokes to be automatically echoed on the
//			terminal.
//	erase()		Same as `clear()'.
//	getch(isr)	Arranges to call `isr' when a key stroke is
//			received. The received character and the terminal
//			object are passed as arguments to `isr'.
//	getmaxyx()	Returns an associative array with the maximum row
//			(`y') and column (`x') numbers for the terminal.
//	getyx()		Returns an associative array with the current row
//			(`y') and column (`x') of the cursor.
//	move(r, c)	Moves the cursor to row `r', column `c'.
//	noecho()	Stops automatically echoing key strokes.
//	pair_content(pn)
//			Returns an associative array with the foreground
//			(`f') and background (`b') colour numbers for the
//			colour pair `pn'.
//	PAIR_NUMBER(a)	Returns the colour pair number in the attributes
//			`a'.
//	refresh()	Updates the display.
//	scroll()	Scrolls the terminal up one line.
//	standend()	Same as `attrset(VT100.A_NORMAL)'.
//	standout()	Same as `attron(VT100.A_STANDOUT)'.
//	write(stuff)	Writes `stuff' to the terminal and immediately
//			updates the display; (some) escape sequences are
//			interpreted and acted on.

// constructor
function VT100(wd, ht, scr_id)
{
	var r;
	var c;
	var scr = document.getElementById(scr_id);
	this.wd_ = wd;
	this.ht_ = ht;
	this.c_attr_ = this.bkgd_ = this.COLOR_PAIR(0) | VT100.A_NORMAL;
	this.color_pair_ = new Array(VT100.COLOR_PAIRS);
	this.color_pair_[0] = { f: VT100.COLOR_WHITE, b: VT100.COLOR_BLACK };
	this.text_ = new Array(ht);
	this.attr_ = new Array(ht);
	for (r = 0; r < ht; ++r) {
		this.text_[r] = new Array(wd);
		this.attr_[r] = new Array(wd);
	}
	this.scr_ = scr;
	this.cursor_vis_ = true;
	this.grab_events_ = false;
	this.getch_isr_ = undefined;
	this.key_buf_ = [];
	this.echo_ = true;
	this.esc_state_ = 0;
	this.clear();
	this.refresh();
}

// public constants -- colours and colour pairs
VT100.COLOR_BLACK = 0;
VT100.COLOR_BLUE = 1;
VT100.COLOR_GREEN = 2;
VT100.COLOR_CYAN = 3;
VT100.COLOR_RED = 4;
VT100.COLOR_MAGENTA = 5;
VT100.COLOR_YELLOW = 6;
VT100.COLOR_WHITE = 7;
VT100.COLOR_PAIRS = 256;
VT100.COLORS = 8;
// public constants -- attributes
VT100.A_NORMAL = 0;
VT100.A_UNDERLINE = 1;
VT100.A_REVERSE = 2;
VT100.A_BLINK = 4;
VT100.A_DIM = 8;
VT100.A_BOLD = 16;
VT100.A_STANDOUT = 32;
VT100.A_PROTECT = VT100.A_INVIS = 0; // ?
// other public constants
VT100.TABSIZE = 8;
// private constants
VT100.ATTR_FLAGS_ = VT100.A_UNDERLINE | VT100.A_REVERSE | VT100.A_BLINK |
		    VT100.A_DIM | VT100.A_BOLD | VT100.A_STANDOUT |
		    VT100.A_PROTECT | VT100.A_INVIS;
VT100.COLOR_SHIFT_ = 6;
VT100.browser_ie_ = (navigator.appName.indexOf("Microsoft") != -1);
VT100.browser_opera_ = (navigator.appName.indexOf("Opera") != -1);
// class variables
VT100.the_vt_ = undefined;

// class methods

// this is actually an event handler
VT100.handle_onkeypress_ = function(e)
{
	var vt = VT100.the_vt_, ch;
	if (vt === undefined)
		return true;
	if (VT100.browser_ie_ || VT100.browser_opera_) {
		ch = event.keyCode;
		if (ch == 13)
			ch = 10;
		else if (ch > 255 || (ch < 32 && ch != 8))
			return true;
		ch = String.fromCharCode(ch);
	} else {
		ch = e.charCode;
		if (ch) {
			if (ch > 255)
				return true;
			ch = String.fromCharCode(ch);
			if (ch == '\r')
				ch = '\n';
		} else
			switch (e.keyCode) {
			    case e.DOM_VK_BACK_SPACE:
				ch = '\b';	break;
			    case e.DOM_VK_TAB:
				ch = '\t';	break;
			    case e.DOM_VK_RETURN:
			    case e.DOM_VK_ENTER:
				ch = '\n';	break;
			    default:
				return true;
			}
	}
	vt.key_buf_.push(ch);
	setTimeout(VT100.go_getch_, 0);
	return false;
}

// this is actually an event handler
VT100.handle_onkeydown_ = function()
{
	var vt = VT100.the_vt_, ch;
	switch (event.keyCode) {
	    case 8:
		ch = '\b';	break;
	    default:
		return true;
	}
	vt.key_buf_.push(ch);
	setTimeout(VT100.go_getch_, 0);
	return false;
}

VT100.go_getch_ = function()
{
	var vt = VT100.the_vt_;
	if (vt === undefined)
		return;
	var isr = vt.getch_isr_;
	vt.getch_isr_ = undefined;
	if (isr === undefined)
		return;
	var ch = vt.key_buf_.shift();
	if (ch === undefined) {
		vt.getch_isr_ = isr;
		return;
	}
	if (vt.echo_)
		vt.addch(ch);
	isr(ch, vt);
}

// object methods

VT100.prototype.may_scroll_ = function()
{
	var ht = this.ht_, cr = this.row_;
	while (cr >= ht) {
		this.scroll();
		--cr;
	}
	this.row_ = cr;
}

VT100.prototype.html_colours_ = function(attr)
{
	var pair, fg, bg, co0, co1;
	pair = this.pair_content(this.PAIR_NUMBER(attr));
	fg = pair.f;
	bg = pair.b;
	switch (attr & (VT100.A_REVERSE | VT100.A_DIM | VT100.A_BOLD)) {
	    case 0:
	    case VT100.A_DIM | VT100.A_BOLD:
		co0 = '00';  co1 = 'c0';  break;
	    case VT100.A_BOLD:
		co0 = '00';  co1 = 'ff';  break;
	    case VT100.A_DIM:
		if (fg == VT100.COLOR_BLACK)
			co0 = '40';
		else
			co0 = '00';
		co1 = '40';
		break;
	    case VT100.A_REVERSE:
	    case VT100.A_REVERSE | VT100.A_DIM | VT100.A_BOLD:
		co0 = 'c0';  co1 = '40';  break;
	    case VT100.A_REVERSE | VT100.A_BOLD:
		co0 = 'c0';  co1 = '00';  break;
	    default:
		if (fg == VT100.COLOR_BLACK)
			co0 = '80';
		else
			co0 = 'c0';
		co1 = 'c0';
	}
	return {
		f: '#' + (fg & 4 ? co1 : co0) +
			 (fg & 2 ? co1 : co0) +
			 (fg & 1 ? co1 : co0),
		b: '#' + (bg & 4 ? co1 : co0) +
			 (bg & 2 ? co1 : co0) +
			 (bg & 1 ? co1 : co0)
	    };
}

VT100.prototype.addch = function(ch, attr)
{
	var cc = this.col_;
	switch (ch) {
	    case '\b':
		if (cc != 0)
			--cc;
		break;
	    case '\n':
		++this.row_;
		cc = 0;
		this.clrtoeol();
		this.may_scroll_();
		break;
	    case '\r':
		this.may_scroll_();
		cc = 0;
		break;
	    case '\t':
		this.may_scroll_();
		cc += VT100.TABSIZE - cc % VT100.TABSIZE;
		if (cc >= this.wd_) {
			++this.row_;
			cc -= this.wd_;
		}
		break;
	    default:
		if (attr === undefined)
			attr = this.c_attr_;
		if (cc >= this.wd_) {
			++this.row_;
			cc = 0;
		}
		this.may_scroll_();
		this.text_[this.row_][cc] = ch;
		this.attr_[this.row_][cc] = attr;
		++cc;
	}
	this.col_ = cc;
}

VT100.prototype.addstr = function(stuff)
{
	for (var i = 0; i < stuff.length; ++i)
		this.addch(stuff.charAt(i));
}

VT100.prototype.attroff = function(a)
{
	a &= VT100.ATTR_FLAGS_;
	this.c_attr_ &= ~a;
}

VT100.prototype.attron = function(a)
{
	a &= VT100.ATTR_FLAGS_;
	this.c_attr_ |= a;
}

VT100.prototype.attrset = function(a)
{
	this.c_attr_ = a;
}

VT100.prototype.bkgdset = function(a)
{
	this.bkgd_ = a;
}

VT100.prototype.clear = function()
{
	this.row_ = this.col_ = 0;
	for (r = 0; r < this.ht_; ++r) {
		for (c = 0; c < this.wd_; ++c) {
			this.text_[r][c] = ' ';
			this.attr_[r][c] = this.bkgd_;
		}
	}
}

VT100.prototype.clrtobot = function()
{
	var ht = this.ht_;
	var wd = this.wd_;
	this.clrtoeol();
	for (var r = this.row_ + 1; r < ht; ++r) {
		for (var c = 0; c < wd; ++c) {
			this.text_[r][c] = ' ';
			this.attr_[r][c] = this.bkgd_;
		}
	}
}

VT100.prototype.clrtoeol = function()
{
	var r = this.row_;
	if (r >= this.ht_)
		return;
	for (var c = this.col_; c < this.wd_; ++c) {
		this.text_[r][c] = ' ';
		this.attr_[r][c] = this.bkgd_;
	}
}

VT100.prototype.COLOR_PAIR = function(pn)
{
	return pn << VT100.COLOR_SHIFT_;
}

VT100.prototype.curs_set = function(vis, grab)
{
	if (vis !== undefined)
		this.cursor_vis_ = (vis > 0);
	if (grab === true || grab === false) {
		if (grab === this.grab_events_)
			return;
		if (grab) {
			this.grab_events_ = true;
			VT100.the_vt_ = this;
			document.onkeypress = VT100.handle_onkeypress_;
			if (VT100.browser_ie_)
				document.onkeydown = VT100.handle_onkeydown_;
		} else {
			document.onkeypress = undefined;
			if (VT100.browser_ie_)
				document.onkeydown = VT100.handle_onkeydown_;
			this.grab_events_ = false;
			VT100.the_vt_ = undefined;
		}
	}
}

VT100.prototype.echo = function()
{
	this.echo_ = true;
}

VT100.prototype.erase = VT100.prototype.clear;

VT100.prototype.getch = function(isr)
{
	this.refresh();
	this.getch_isr_ = isr;
	setTimeout(VT100.go_getch_, 0);
}

VT100.prototype.getmaxyx = function()
{
	return { y: this.ht_ - 1, x: this.wd_ - 1 };
}

VT100.prototype.getyx = function()
{
	return { y: this.row_, x: this.col_ };
}

VT100.prototype.move = function(r, c)
{
	if (r < 0)
		r = 0;
	else if (r >= this.ht_)
		r = this.ht_ - 1;
	if (c < 0)
		c = 0;
	else if (c >= this.wd_)
		c = this.wd_ - 1;
	this.row_ = r;
	this.col_ = c;
}

VT100.prototype.noecho = function()
{
	this.echo_ = false;
}

VT100.prototype.pair_content = function(pn)
{
	return this.color_pair_[pn];
}

VT100.prototype.PAIR_NUMBER = function(at)
{
	return at >> VT100.COLOR_SHIFT_;
}

VT100.prototype.refresh = function()
{
	var r, c, stuff = "", end_tag = "", at = -1, n_at, ch,
	    pair, cr, cc, ht, wd, cv;
	ht = this.ht_;
	wd = this.wd_;
	cr = this.row_;
	cc = this.col_;
	cv = this.cursor_vis_;
	if (cc >= wd)
		cc = wd - 1;
	for (r = 0; r < ht; ++r) {
		stuff += '<br>';
		for (c = 0; c < wd; ++c) {
			n_at = this.attr_[r][c];
			if (cv && r == cr && c == cc)
				n_at ^= VT100.A_REVERSE;
			if (n_at != at) {
				stuff += end_tag;
				end_tag = "";
				if (n_at & VT100.A_BLINK) {
					stuff += "<blink>";
					end_tag = "</blink>" + end_tag;
				}
				if (n_at & VT100.A_STANDOUT)
					n_at |= VT100.A_BOLD;
				pair = this.html_colours_(n_at);
				stuff += '<span style="color:' + pair.f +
				    ';background-color:' + pair.b;
				if (n_at & VT100.A_UNDERLINE)
					stuff += ';text-decoration:underline';
				stuff += ';">';
				end_tag = "</span>" + end_tag;
				at = n_at;
			}
			ch = this.text_[r][c];
			switch (ch) {
			    case '&':
				stuff += '&amp;';	break;
			    case '<':
				stuff += '&lt;';	break;
			    case '>':
				stuff += '&gt;';	break;
			    case ' ':
				stuff += '&nbsp;';	break;
			    default:
				stuff += ch;
			}
		}
	}
	this.scr_.innerHTML = "&nbsp;<b>" + stuff + end_tag + "</b><br>&nbsp;";
}

VT100.prototype.scroll = function()
{
	var n_text = this.text_[0], n_attr = this.attr_[0],
	    ht = this.ht_, wd = this.wd_;
	for (var r = 1; r < ht; ++r) {
		this.text_[r - 1] = this.text_[r];
		this.attr_[r - 1] = this.attr_[r];
	}
	this.text_[ht - 1] = n_text;
	this.attr_[ht - 1] = n_attr;
	for (var c = 0; c < wd; ++c) {
		n_text[c] = ' ';
		n_attr[c] = this.bkgd_;
	}
}

VT100.prototype.standend = function()
{
	this.attrset(0);
}

VT100.prototype.standout = function()
{
	this.attron(VT100.A_STANDOUT);
}

VT100.prototype.write = function(stuff)
{
	var ch, x, r, c, i, j, yx, myx;
	for (i = 0; i < stuff.length; ++i) {
		ch = stuff.charAt(i);
		switch (ch) {
		    case '\x00':
		    case '\x7f':
			continue;
		    case '\a':
		    case '\b':
		    case '\t':
		    case '\r':
			this.addch(ch);
			continue;
		    case '\n':
		    case '\v':
		    case '\f': // what a mess
			yx = this.getyx();
			myx = this.getmaxyx();
			if (yx.y >= myx.y) {
				this.scroll();
				this.move(myx.y, 0);
			} else
				this.move(yx.y + 1, 0);
			continue;
		    case '\x18':
		    case '\x1a':
			this.esc_state_ = 0;
			continue;
		    case '\x1b':
			this.esc_state_ = 1;
			continue;
		    case '\x9b':
			this.esc_state_ = 2;
			continue;
		}
		// not a recognized control character
		switch (this.esc_state_) {
		    case 0: // not in escape sequence
			this.addch(ch);
			break;
		    case 1: // just saw ESC
			switch (ch) {
			    case '[':
				this.esc_state_ = 2;
				break;
			}
			break;
		    case 2: // just saw CSI
			this.csi_parms_ = [0];
			this.esc_state_ = 3;
		    case 3: // saw CSI and parameters
			switch (ch) {
			    case '0':
			    case '1':
			    case '2':
			    case '3':
			    case '4':
			    case '5':
			    case '6':
			    case '7':
			    case '8':
			    case '9':
				x = this.csi_parms_.pop();
				this.csi_parms_.push(x * 10 + ch * 1);
				continue;
			    case ';':
				if (this.csi_parms_.length < 17)
					this.csi_parms_.push(0);
			    case '?': // ?!?
				continue;
			}
			this.esc_state_ = 0;
			switch (ch) {
			    case 'H':
				this.esc_state_ = 0;
				this.csi_parms_.push(0);
				this.move(this.csi_parms_[0] - 1,
					  this.csi_parms_[1] - 1);
				break;
			    case 'J':
				switch (this.csi_parms_[0]) {
				    case 0:
					this.clrtobot();
					break;
				    case 2:
					this.clear();
					this.move(0, 0);
				}
				break;
			    case 'm':
				for (j=0; j<this.csi_parms_.length; ++j) {
					x = this.csi_parms_[j];
					switch (x) {
					    case 0:
						this.standend();
						break;
					    case 1:
						this.attron(VT100.A_BOLD);
						break;
					}
				}
			    case '[':
				this.esc_state_ = 4;
			}
			break;
		    case 4: // saw CSI [
			this.esc_state_ = 0; // gobble char.
		}
	}
	this.refresh();
}
