var ip = $("#ip");

var i = 0;
var txt = 'MIDNIGHT.NET';
var speed = 100;
var del = false;

var typeWriter = function() {
  
  if(del) {
  	if(i > 0) {
    	i--;
        setTimeout(typeWriter, speed / 4);
    } else {
    	del = false;
    	setTimeout(typeWriter, speed * 10);
    }
  } else {
  	if(i < txt.length) {
    	i++;
        setTimeout(typeWriter, speed);
    } else {
    	del = true;
        setTimeout(typeWriter, speed * 20);
    }
  }
  ip.text("IP: " + txt.substring(0, i));
}

$(document).ready( () => {
	typeWriter();
});
               