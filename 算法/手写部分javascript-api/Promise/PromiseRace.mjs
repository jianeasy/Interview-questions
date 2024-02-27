const PrmosieRace = (list)=>{
    return new Promise((resolve, reject)=>{
        list.forEach(element => {
              element.then(data=>{
                resolve(data)
              }).catch(err=>{
                reject(err)
              })
        });
    })
}