const app = "I don't do much."

function destructivelyAppendKitten(name) {
  kittens.push(name);
  return kittens;
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name);
  return kittens;
}

function destructivelyRemoveLastKitten() {
  // kittens.pop();
  return kittens.splice(kittens.length -1, 1);
}

function destructivelyRemoveFirstKitten() {
  //kittens.shift();
  return kittens.splice(0, 1);
}

function appendKitten(name) {
  return [...kittens, name];
}

function prependKitten(name) {
  return [name, ...kittens];
}

function removeLastKitten() {
  // return starting at 0 and up to but not including last element
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  // return second - last elements
  return kittens.slice(1, kittens.length);
}
