import PromiseAll from "./PromiseAll.mjs";
const getName = ()=>{
    
        return Promise.resolve('zhouqi')
   
}
const getAge = ()=>{
   
        return Promise.reject('21')
 
}

const getDetail = ()=>{
    
        return Promise.resolve({
            id:1,
            age:21,
            name:'周琦',
            sex:'女'
        })

}
const getUserInfo = async ()=>{
    try {
        const [name, age, detail] = await PromiseAll([getName(), getAge(), getDetail()])
        
        console.log('信息',[name, age, detail] );
    } catch (error) {
        console.log('出错',error);
    }
  
}
getUserInfo()