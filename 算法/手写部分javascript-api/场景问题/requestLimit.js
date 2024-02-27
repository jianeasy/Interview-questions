const requestLimit = async (tasks, maxConcurrent) => {
  let runningTaskQueue = [];
  const result = [];
  for (let i = 0; i < tasks.length; i++) {
    const e = Promise.resolve().then(tasks[i]);
    runningTaskQueue.push(e);
    result.push(e);
    e.then((res) => {
      console.log(res);
      const completedIndex = runningTaskQueue.indexOf(e);
      runningTaskQueue.splice(completedIndex, 1);
    });

    if (runningTaskQueue.length >= maxConcurrent) {
      await Promise.race(runningTaskQueue);
    }
  }
};
const req = (url) => {
  console.log(`${url},已发送`);
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ value: `${url},已完成` });
    }, 1000);
  });
};
const testFn = () => {
  const tasks = [];
  for (let i = 0; i < 20; i++) {
    // tasks.push(() => axios.get(`http://localhost:3000/user?id=${i}`));
    tasks.push(() => req(`url---${i}`));
  }
  requestLimit(tasks, 1);
};
testFn();
