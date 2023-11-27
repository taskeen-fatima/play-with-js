function hello(n,a)
{
    this.name = n;
    this.age = a;

    //return a;
    //console.log("Inside Function = " +a);
    //console.log(this.a);
};
var b= new hello("Ali", "10");
var c = new hello("Hasan", "20");
console.log(b.name);
console.log(c.name);
//hello();


