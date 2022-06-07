class EventEmitter {
    constructor() {
        this.cache = {}
    }
    on(name, fn) {

        if (this.cache[name]) {
            this.cache[name].push(fn)
        } else {
            this.cache[name] = [fn]
        }
    }

    remove(name, fn) {
        let tasks = this.cache[name]
        if (tasks) {
            const index = tasks.indexOf(fn)
            if (index >= 0) {
                tasks.splice(index, i)
            }
        }
    }

    emit(name, once = false, ...args) {
        if (this.cache[name]) {
            for (let fn of this.cache[name]) {
                fn(...args)
            }
        }
        if (once) {
            this.cache[name] = undefined
        }
    }
}
const eventBus = new EventEmitter();

let f1 = (name, age) => {
    console.log(`姓名：${name}, 年龄：${age}`);
}

eventBus.on('printInfo', f1)
eventBus.emit('printInfo', true, 'xiaoyao', '20')