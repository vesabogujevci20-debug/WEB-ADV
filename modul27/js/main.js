function showsms() {
    alert("ky eshte nje mesazh nga funksioni");
}
showsms();

function sum(nr1, nr3) {
    
    return nr1 + nr3;
}
console.log(sum(3, 4));
document.write(sum(5, 6));

function localvariable() {
    var vl = "digital school";
    alert(vl);
}
localvariable();
var car={
    name:"BMW",
    color:"red",
    year:2020,
    kilometrers:0,
    starengine:function(){
        alert("engine started");    
    },
    get getkilometrers(){
        return this.kilometrers;
    },
    set setkilometrers(km){
        this.kilometrers=km;
    }       
};

console.log(car.getkilometrers);
car.setkilometrers=5000;
console.log(car.getkilometrers);
alert(car.name);
alert(car[`color`]);
car.starengine();

function computearea(name,cpu,ram,rom){
    this.name=name;
    this.cpu=cpu;
    this.ram=ram;
    this.rom=rom;
}
var com1=new computearea("macbook","8-core","8GB","8GB");
var com2=new computearea("macbook2","6-core","8GB","8GB");