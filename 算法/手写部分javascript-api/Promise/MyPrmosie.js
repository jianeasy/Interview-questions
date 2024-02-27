const PENDING = "pending";
const FULFILLED = "fulfilled";
const REJECTED = "rejected";

class MyPromise {
  state = PENDING;
  result = undefined;
  handlers = [];
  setResultAndSatus = (value, state) => {
    if (this.state === PENDING) {
      this.state = state;
      this.result = value;
    }
  };
  executeHandlers = () => {
    runAsyncTask(() => {
      // 如果还是pending, 说明executor中的异步代码还没有结束
      if (this.state === PENDING) {
        return;
      }
      this.handlers.forEach((handler) => {
        if (this.state === FULFILLED) {
          handler.handleOnFulfilled(this.result); // 此时result是成功的数据
        } else {
          handler.handleOnRejected(this.result); // 此时result是失败的原因
        }
      });
      // 执行完毕后, 清空handlers
      this.handlers = [];
    });
  };
  constructor(func) {
    const resolve = (result) => {
      if (this.state === PENDING) {
        this.state = FULFILLED;
        this.result = result;
        this.handlers.forEach(({ onFulfilled }) => {
          onFulfilled(this.result);
        });
      }
    };
    const reject = ({ result }) => {
      if (this.state === PENDING) {
        this.state = REJECTED;
        this.handlers.forEach(({ onRejected }) => {
          onRejected(result);
        });
      }
    };
    try {
      func(resolve, reject);
    } catch (error) {
      reject(error);
    }
  }
  then(onFulfilled, onRejected) {
    // this.executeHandlers();
    if (this.state == PENDING) {
    } else if (this.state == FULFILLED) {
      onFulfilled(this.result);
    } else if (this.state == REJECTED) {
      onRejected(this.result);
    }else {
        if(typeof onFulfilled === 'function'){
            
        }
    }
  }
}
function runAsyncTask(callTask) {
  setTimeout(callTask, 0);
}
