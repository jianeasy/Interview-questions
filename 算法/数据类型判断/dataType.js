const data = []

function Person(){
    this.name = 'dsadsad'
}
const p1 = new Person()
const typeOf = (obj)=>{
    // return Object.prototype.toString.apply(obj).slice(8, -1).toLowerCase()
    return obj.constructor.name.toLowerCase()
}
console.log(typeOf('asdsadsaa'));
console.log(typeOf(12334));
console.log(typeOf(new Map()));
console.log(typeOf(()=>{}));
console.log(typeOf(new Array(6)));
console.log(typeOf(new Object()));



