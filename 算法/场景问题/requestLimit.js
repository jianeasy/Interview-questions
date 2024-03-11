const requestLimit = async (tasks, maxConcurrent) => {
  
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
