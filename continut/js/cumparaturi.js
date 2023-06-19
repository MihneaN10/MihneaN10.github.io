class Car {
    constructor(name, year) {
      this.name = name;
      this.year = year;
  
    }
    age() {
      let date = new Date();
      return date.getFullYear() - this.year;
    }
  }
function f(){
let myCar = new Car("Mercedes", 2006);
let n=localStorage.getItem("nr");
if(n==null){
    n=0;
}else{
    n=parseInt(n);
}
localStorage.setItem(""+n,JSON.stringify(p));
localStorage.setItem("nr",n+1+"");

document.getElementById("demo").innerHTML =
"My car is " + myCar.age() + " years old.";
}