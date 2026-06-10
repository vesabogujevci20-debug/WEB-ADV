//function printNames(){
 //   document.write("John");
 //   document.write("<br>");
 //   setTimeout(function(){document.write("ana")},3000);
 //   document.write("bob");

//}

//printNames();

var colors=['red','green','blue','purple'];

function changebgcolors(){
    document.querySelector('body').style.background=
    colors[Math.floor(Math.random()*colors.length)];    
}

var names=['John','Ana','Bob','mark'];

function changenames(){
document.querySelector('p').innerHTML=
names[Math.floor(Math.random()*names.length)];
}

setInterval(changebgcolors,1000);
setInterval(changenames,1000);   