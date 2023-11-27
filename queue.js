 let queue = new Queue('a','n','k','f','j','r')
 
 function Queue()  {
    //this.length = arguments.length;
    Object.defineProperty(this,"length",{
        value:0,
        writable:true,
        enumerable:false,
    })
    for(var i=0;i<arguments.length;i++)
    {
        this[i] = arguments[i];
    }
    this.length = arguments.length;

}

Queue.prototype.push = function(e)
{
    let n = this.length;
    this[n] = e;
    this.length++;
    //console.log(this.length);
}
queue.push('m');
queue.push('d');
queue.push('s');
//console.log(Object.values(queue));
console.log(queue);
Queue.prototype.pop = function()
{
    
    delete this[0];
    this.length--;
    let len = this.length;
    console.log(len);
    for(let i=0;i<len;i++)
    {
    
        this[i] = this[i+1]; 
    }
    delete this[len]
}

queue.pop();
queue.pop();
//queue.pop();
//queue.pop();
console.log(queue);