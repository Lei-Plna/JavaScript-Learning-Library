/**
 * result:
 *  throw Error will interrupt the iterator loop
 */
function Iterator (x = 6) {
  return {
    next: () => {
      control(x);
      console.log(x);
      return {
        done: !x,
        value: x && x--
      }
    }
  }
}

function control(x) {
  if (x === 3) {
    throw new Error('Error');
  }
}

const obj = {};
obj[Symbol.iterator] = Iterator;
for (let x of obj) {
 
}