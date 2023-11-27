let products = [ {Name: "Rice", Quantity: "2", Price: "100"}];
    

var e1 ={Name: "Oil", Quantity: "3", Price:"50"};
var e2 ={Name: "Dal", Quantity: "2", Price:"60"};
var e3 ={Name: "Milk", Quantity: "2", Price:"40"};
var e4 ={Name: "Tea", Quantity: "4", Price:"25"};
var e5 ={Name: "Sugar", Quantity: "2", Price:"80"};
var e6 ={Name: "Salt", Quantity: "1", Price:"50"};
products.push(e1,e2,e3,e4,e5,e6);
//console.log(products.length);
var arrfinal=[];
products.forEach((element)=>
{   
    var q= parseInt(element.Quantity,10);
    var p =parseInt(element.Price,10);
    var tot =  q*p ;
    var obj = {Name: element.Name, Total: tot};
    arrfinal.push(obj);
})

arrfinal.forEach(e=>
    {
        console.log(e.Name + " : " + e.Total)
    })

