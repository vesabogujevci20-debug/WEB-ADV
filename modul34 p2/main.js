var circle = document.getElementById("circle");
var showtime = document.getElementById("time");
var timestart= new Date().getTime();

function showCircle(){
    circle.style.display="block";
    circle.style.top=Math.random()*500+"px";
    circle.style.left=Math.random()*900+"px";
    timestart= new Date().getTime();
}
showCircle();
circle.onclick=function(){
    circle.style.display="none";
    setTimeout(showCircle,1000);
    var timeend= new Date().getTime();
    var time=(timeend-timestart)/1000;
    showtime.innerHTML=time + 's';
}
    var timeend= new Date().getTime();

function randomcolor(){
    var s = "0123456789ABCDEF";
    var color="#";

    for(var i=0;i<6;i++){
        color=color+s[Math.floor(Math.random()*16)];
    }
    return color;
}