function makeCalculation(a, b) {
    function asynFunc(resolve, reject) {
      setTimeout(() => {
        console.log("calculating stuff");
  
        if (a !== 0 && b !== 0) {
          var division = a / b;
        } else {
          reject("Cannot divide w/ zero");
        }
        resolve(division);
      }, 1000);
    }
    const p = new Promise(asynFunc);
    return p;
  }
  
  function sendStuffToBackend(result) {
    function asynFunc(resolve, reject) {
      const random = Math.floor(Math.random() * 2);
      if (random === 1) {
        setTimeout(() => {
          console.log(`sending to backend ${result}`);
          resolve("done");
        }, 1000);
      } else {
        reject("failed to connect to backend");
      }
    }
    const p = new Promise(asynFunc);
    return p;
  }
  
  // make the calculation that takes time and when ready, invoke the
  // arrow function.
  makeCalculation(10, 4)
    .then((sum) => sendStuffToBackend(sum))
    .then((msg) => console.log(msg))
    .catch((errormsg) => console.log(errormsg));