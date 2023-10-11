const { read } = require('fs');
const { resourceLimits } = require('worker_threads');

const readline = require('readline').createInterface({
  input: process.stdin,
  output: process.stdout,
});

readline.question("Enter n:", n => {
  console.log(DecentNum(n));
  readline.close();
})


function DecentNum(n) {

  let rslt = '';

  if (n % 3 == 0) {
    for (let i = 0; i < n; i++) {
      rslt += '5';
    }
    console.log(rslt);
    return;
  }

  let threes = 0;
  while (n - 5 >= 0) {
    threes += 5;
    n -= 5
    if (n > 0 && n % 3 == 0)
      break;
  }

  let fives = 0;
  while (n - 3 >= 0) {
    fives += 3;
    n -= 3;
  }

  if (n == 0) {
    while (fives > 0) {
      rslt += '5';
      fives--;
    }
    while (threes > 0) {
      rslt += '3';
      threes--;
    }
    console.log(rslt);
    return;
  } else {
    console.log(-1);
    return;
  }
}
