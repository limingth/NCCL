var args = new Object();
var query = location.search.substring(1);

// Get query string
var pairs = query.split( "," );

// Break at comma
for ( var i = 0; i < pairs.length; i++ )
{
   var pos = pairs[i].indexOf('=');
   if( pos == -1 ) 
   {   
      continue; // Look for "name=value"
   }

   var argname  = pairs[i].substring( 0, pos );  // If not found, skip
   var value    = pairs[i].substring( pos + 1 ); // Extract the name
   args[argname] = unescape( value );            // Extract the value
} 




function OnLoad()
{
	   vid = document.getElementById( "video1" );
   addEvent( vid, "click", divClickHandler );
	
		
}



   var toc1     = null;
   var toc2     = null;
   var vid      = null;
     
   //adds and event listener across major browser versions
   function addEvent( obj, type, fn )
   {
	   if ( obj.addEventListener )
	   {
		   obj.addEventListener( type, fn, true );
	   }
	   else if ( obj.attachEvent )
	   {
		   obj.attachEvent( "on" + type, fn );
	   }
	   else
	   {
		   obj["on" + type] = fn;
	   }
   }

   //removes event listeners across major browser versions
   function removeEvent( obj, type, fn )
   {
      if ( obj.removeEventListener )
	   {
	      obj.removeEventListener( type, fn, true );	
	   }
	   else if ( obj.detachEvent )
	   {
	     obj.detachEvent( "on" + type, fn );
	   }
	   else
	   {
		   delete obj["on" + type];	
	   }
   }
   
   function divClickHandler()
   {
      var req = swfobject.hasFlashPlayerVersion("8");
   var id = "video1";
   var bookmark = args.movie ? args.movie : 0;
   var node = '<div id="cs_noexpressUpdate">'
            + '<p align="center">The Camtasia Studio video content presented here </p><p align="center"> requires JavaScript to be enabled and the latest version </p><p align="center">of the Adobe Flash Player.  If you are using </p><p align="center">a browser with JavaScript disabled please enable it now.</p><p align="center"> Otherwise, please update your version of the </p><p align="center">free Flash Player by <a href="http://www.adobe.com/go/getflashplayer">downloading here</a>. </p>'
            + '</div>';

   if ( req )
   {
      swfobject.embedSWF( "1.1_controller.swf", id, "727", "600", "8", null, { csConfigFile: "1.1_config.xml", csColor: "FFFFFF", csPreloader: "1.1_preload.swf", csFilesetBookmark: bookmark }, { bgcolor: "FFFFFF", quality: "best", allowscriptaccess: "always" } );
   }
   else
   {
      var n = (typeof id == 'string') ? document.getElementById( id ) : id;
      n.innerHTML = node;
   };
      
      removeEvent( vid, 'click', divClickHandler );
   } 

