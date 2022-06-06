// 普通版
const deepCopy = (obj) => {
    if (typeof obj !== 'object') {
        return obj
    }
    let res = null;
    if (Array.isArray(obj)) {
        res = [];
        obj.forEach((item) => {
            res.push(deepCopy(item));
        })
        return res;
    } else {
        res = {}
        for (const key in obj) {
            if (Object.hasOwnProperty.call(obj, key)) {
                const element = obj[key];
                res[key] = deepCopy(element);

            }
        }
        return res;
    }
}
// 解决循环引用问题版
const deepCopyFix = (obj, cache = new Map()) => {
    if (typeof obj !== 'object') {
        return obj;
    } else {
        if (cache && cache.has(obj)) {
            return cache.get(obj)
        } else {
            cache.set(obj, obj)
        }
    }
    let res = null;
    if (Array.isArray(obj)) {
        res = []
        obj.forEach((item) => {
            res.push(deepCopyFix(item, cache))
        })
        return res;
    } else {
        res = {}
        for (const key in obj) {
            if (obj.hasOwnProperty(key)) {
                res[key] = deepCopyFix(obj[key], cache)
            }
        }
        return res;
    }
}
const obj = {
    name: 'xiaoyao',
    age: 20,
    sex: '女',
    detail: {
        address: 'chengdu sichuan',
        subject: ['计算机', '电商'],
       
    }

}
obj.detail.info = obj


let o1 = deepCopyFix(obj, new Map());
o1.name = '周期'
console.log('01=>', o1);
console.log('obj=>', obj);