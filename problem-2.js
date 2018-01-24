sum = 0;
let last = 1;
let current = 2;

function getNext(last, current) {
  return last + current;
}

// while (current <= 10) {
while (current <= 4000000) {
  //console.log(current);
  if (current % 2 == 0) {
    sum += current;
  }
  let next = getNext(last,current);
  last = current;
  current = next;
}

console.log('sum: ' + sum);
