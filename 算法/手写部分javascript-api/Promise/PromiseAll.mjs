export default (tasks)=>{
    return new Promise((resolve, reject)=>{
        let count = 0
        let completed = 0
        const list = []
        // list.fill(undefined)

        if(Array.isArray(tasks) ){
            tasks.map((task, index)=>{
                
                task.then(data=>{
                   //  list[index] = data
                    list.push(data)
                    console.log(index, count);
                    completed++
                    if (completed===count){
                        resolve(list)
                    }
                }).catch(err=>{
                    console.log('失败');
                    reject(err)
                })
                count++
            })
        }




    })
    



}
const isTotalCompleted = (list)=>{
    let res = true
    list.forEach(element => {
        res = res && element
    });
    return res
}