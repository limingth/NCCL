var vt, timer;
var speed = 1.0;

function Timer(callback, delay) {
  var timerId, start, remaining = delay;

  this.pause = function() {
    window.clearTimeout(timerId);
    remaining -= new Date() - start;
  };

  this.resume = function() {
    start = new Date();
    timerId = window.setTimeout(callback, remaining);
  };

  this.resume();
}

function get_file_contents(filename, callback) {
  if (window.XMLHttpRequest) {
    req = new XMLHttpRequest();
  } else {
    req = new ActiveXObject("Microsoft.XMLHTTP");
  }
  req.open("GET", filename, false);
  req.onreadystatechange = function() {
    // status is 0 for local files
    if (req.readyState==4 && ( req.status==200 || req.status==0)) {
      callback(req.responseText);
    }
  }
  req.send(null);
}

function play_file(name) {
  get_file_contents(name+".script", function(typescript_data) {
      get_file_contents(name+".time", function(timing_data) {
        run_typescript(typescript_data, timing_data);
        });
  });
}

function set_speed(evt) {
  var value = evt.target.options[evt.target.selectedIndex].value;
  speed = parseFloat(value);
}

function set_fontsize(evt) {
  var value = evt.target.options[evt.target.selectedIndex].value;
  document.getElementById("term").style.fontSize=value;
}

function play(evt) {
  if (evt.target.textContent == "play") {
    readBlob('typescript', reader_onloadend);
  } else if (evt.target.textContent == "resume") {
    evt.target.textContent = "pause";
    timer.resume();
  } else if (evt.target.textContent == "pause") {
    evt.target.textContent = "resume";
    timer.pause();
  }
}

function stop(evt) {
  document.getElementById("play").textContent = "play";
  timer.pause();
  vt.clear();
  vt.refresh();
}

function run_typescript(typescript_data, timing_data) {
  if (timer) timer.pause();
  document.getElementById("play").textContent = "pause";
  vt.clear();
  vt.refresh();

  var where = 0;
  var linenum = 0;
  var timings = timing_data.split("\n");
  var firstlinelen = typescript_data.indexOf("\n") + 1;
  var text = typescript_data.substr(0, firstlinelen);
  var newtext = "";
  where += firstlinelen;

  timer = new Timer(
      function() {
        vt.write(text);
        text = newtext;
        var me = arguments.callee;
        var line = timings[linenum].split(" ");
        var time = parseFloat(line[0]);
        var bytes = parseInt(line[1]);
        if (isFinite(time) && isFinite(bytes)) {
          newtext = typescript_data.substr(where, bytes);
          where += bytes;
          linenum += 1;
          timer = new Timer(me, time*1000*1/speed);
        } else {
          vt.write(typescript_data.substr(where, typescript_data.length-where));
          document.getElementById("play").textContent = "play";
        }
      }, 0);
}

function reader_onloadend(evt) {
  if (evt.target.readyState == FileReader.DONE) { // DONE == 2
    typescript_data = evt.target.result;
    readBlob('timingfile',
        function(evt) {
          if (evt.target.readyState == FileReader.DONE) { // DONE == 2
            timing_data = evt.target.result;
            run_typescript(typescript_data, timing_data);
          }
        });
  }
}

function readBlob(id, onload_handler) {
  var files = document.getElementById(id).files;
  if (!files.length) {
    alert('Please select a file!');
    return;
  }

  var file = files[0];
  var blob = file.slice(0, file.size);
  var reader = new FileReader();
  reader.onloadend = onload_handler;
  reader.onerror = function(evt) {alert(evt);};
  reader.readAsBinaryString(blob);
}
