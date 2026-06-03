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








