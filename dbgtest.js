// https://github.com/nodejs/node/wiki/Using-Eclipse-as-Node-Applications-Debugger

// $ node --debug dbgtest.js
// DeprecationWarning: `node --debug` and `node --debug-brk` are invalid. Please use `node --inspect` or `node --inspect-brk` instead.
// $ node --inspect dbgtest.js


// dbgtest.js

var count = 0;

console.log("Starting ...");

function timer_tick() {
  count = count+1;
  console.log("Tick count: " + count);
  if (count === 10) {
    count += 1000;
    console.log("Set break here");
 }
 setTimeout(timer_tick, 1000);
}

timer_tick();