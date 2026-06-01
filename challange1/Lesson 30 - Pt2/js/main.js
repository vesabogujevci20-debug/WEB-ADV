var wakeuptime;
var dstime;
var sleeptime;
var noon=12;



function showcurrentTime(){
    var clock=document.getElementById('clock');
    var currentTime=new Date();



    var hours=currentTime.getHours();
    var minutes=currentTime.getMinutes();
    var seconds=currentTime.getSeconds();


    var meridian="AM";



    if(hours >= 12){
        meridian="PM"
    }


    var clocktime= hours + ":" + minutes + ":" + seconds + ":" + meridian;
    clock.innerText=clocktime;
    changeImage();



}
var onesecond=1000;
setInterval(showcurrentTime,onesecond);

function changeImage(){


    var time=new Date().getHours();
    console.log(time);



    var image="img/ds_clock.png";
    var imageHTML=document.getElementById("timeImage");
    
    
    if(time==wakeuptime){
        image="img/morning.png";
        console.log("morning");
    }else if(time==dstime){
        image="img/class.gif";


    }else if(time==sleeptime){  
        image="img/night.gif";


    }
    imageHTML.src=image;
    console.log(image);
}

function updateclock(){
    var wakeUPTime =document.getElementById('wakeUPTimeSelector');
    wakeuptime=wakeUPTime.value;

    var dstime=document.getElementById('dstimeSelector');
    dstime=dstime.value;

    var sleeptime=document.getElementById('sleeptimeSelector');
    sleeptime=sleeptime.value;


}
var savebutton=document.getElementById('saveButton');
savebutton.addEventListener("click",updateclock);