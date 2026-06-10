var text= "the best school in the world is digitalschool";

var result = text.search("digitalschool");
document.getElementById("result1").innerHTML = result;





var text= "the best school in the world is digitalschool";

var result = text.search(/digitalschool/);
document.getElementById("result2").innerHTML = result;


var text= "the best school in the world is digitalschool";

var result = text.replace(/digitalschool/,"another school");
document.getElementById("result3").innerHTML = result;


var text="abcdef";

var regex= new RegExp('abc');

document.getElementById("result4").innerHTML = regex.test(text);



var text="my school is the best school in the world";

var regex= /school/g;
document.getElementById("result5").innerHTML = text.match(regex);



var text="digital school is the best school in the world";

var regex= /i/g;

document.getElementById("result6").innerHTML = text.match(regex);




var text="digital school is the best school in the world";

var regex= /[abc]/g;

document.getElementById("result7").innerHTML = text.match(regex);



var text ="digitalschool is in the top 10 schools in the world";

var regex= /[0-9]/g;
document.getElementById("result8").innerHTML = text.match(regex);


var text ="my school is the best school in the world";

var regex= /(top| best | school)/g;
document.getElementById("result9").innerHTML = text.match(regex);


var text="100 percent"

var regex= /\d/g;

document.getElementById("result10").innerHTML = text.match(regex);



var text="my school is the best school in the world";

var regex= /\s/g;

document.getElementById("result11").innerHTML = text.match(regex);

var text="hey , hi,hiii!!!";

var regex= /h?/g;
document.getElementById("result14").innerHTML = text.match(regex);

var text="hello , helloo,hellooo!!!";

var regex= /o{3}/g;

document.getElementById("result15").innerHTML = text.match(regex);


var text="hello , helloo,hellooo,helloooo,hellooooooo!!!";

var regex= /o{3,5}/g;
document.getElementById("result16").innerHTML = text.match(regex);
