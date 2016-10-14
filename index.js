const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return kittens.push(name);
}

function destructivelyPrependKitten(name) {
  return kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return kittens.pop(name);
}

function destructivelyRemoveFirstKitten() {
  return kittens.shift(name);
}

function appendKitten(name) {
  return kittens.concat(name);
}

function prependKitten(name) {
  var kittens_new = kittens.slice(0)
  kittens_new.unshift(name);
  return kittens_new;
}

function removeLastKitten() {
  return kittens.slice(0, kittens.length - 1);
}

function removeFirstKitten() {
  return kittens.slice(1);
}