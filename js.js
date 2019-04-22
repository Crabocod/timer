var timer = document.getElementById('time');
if (getCookie("sTime")) {
timer.innerHTML = getCookie("sTime");
 	var arr = timer.innerHTML.split(":");
    var h = arr[0];
    var m = arr[1];
    var s = arr[2];
    var t = s;
}
else{
var t = 0;
var h = 0;
var m = 0;
var s = 0;
}
var m2,h2;
var timerID;
function run() {
	timerID = setInterval(plus, 1000);
}
function stop(){
	clearInterval(timerID);
}
function deleteC(){
	delete_cookie("sTime");
	location.reload();
}
function plus(){
	t++;
	s = t;
	if (s > 59) {
		m++;
		t = 0;
	}
	if (m > 59) {
		h++;
		m = 0;
	}
	if (s < 10) {
		s = "0" + s;
	}
	if (m < 10) {
		m2 = "0" + m;
	}
	else{
		m2 = 0;
	}
	if (h < 10) {
		h2 = "0" + h;
	}
	else{
		h2 = 0;
	}
	timer.innerHTML = hz(h2,h)+":"+hz(m2,m)+":"+s;
	document.cookie = "sTime="+timer.innerHTML;
}
function hz(u,u2){
	if (u) {
		return u;
	}
	return u2;
}


function getCookie(name) {
  var matches = document.cookie.match(new RegExp(
    "(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"
  ));
  return matches ? decodeURIComponent(matches[1]) : undefined;
}
function delete_cookie ( cookie_name ){
  var cookie_date = new Date ( );  // Текущая дата и время
  cookie_date.setTime ( cookie_date.getTime() - 1 );
  document.cookie = cookie_name += "=; expires=" + cookie_date.toGMTString();
}