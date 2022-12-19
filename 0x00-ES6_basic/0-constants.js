export function taskFirst() {
  const x = ["I perfer const when I can."];
  return x;
}
export function getLast() {
  return ' is okay';
}

export function taskNext() {
  let combination = 'But sometimes let';
  combination += getLast();

  return combination;
}
