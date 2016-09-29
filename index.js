const app = "I don't do much."

function destructivelyAppendKitten(name) {
  return window.kittens.push(name);
}


function destructivelyPrependKitten(name) {
  return window.kittens.unshift(name);
}

function destructivelyRemoveLastKitten() {
  return window.kittens.pop();
}

function destructivelyRemoveFirstKitten() {
  return window.kittens.shift();
}

function appendKitten(name) {
  var newarr = [...window.kittens];
  newarr.push(name);
  return newarr;
}


function prependKitten(name) {
  var newarr = [...window.kittens];
  newarr.unshift(name);
  return newarr;
}

function removeLastKitten() {
  var newarr = [...window.kittens];
  newarr.pop();
  return newarr;
}

function removeFirstKitten() {
  var newarr = [...window.kittens];
  newarr.shift();
  return newarr;
}
