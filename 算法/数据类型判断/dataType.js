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