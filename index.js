const app = "I don't do much."


const kittens = ["Milo", "Otis", "Garfield"]



function destructivelyAppendKitten(name) {
  kittens.push(name)

  return kittens
}


function destructivelyPrependKitten(name) {
  kittens.unshift(name)

  return kittens
}


function destructivelyRemoveLastKitten() {
  kittens.pop()

  return kittens
}


function destructivelyRemoveFirstKitten() {
  kittens.shift()
  return kittens
}


function appendKitten(name) {


 var kats = [...kittens, name]

  // debugger;
  return kats
}



function prependKitten(name) {
  var kats = [name, ...kittens]

  return kats
}


function removeLastKitten() {
  var kats = kittens.slice(0, kittens.length - 1)


  return kats
}


function removeFirstKitten() {
  var kats = kittens.slice(1)

  return kats
}
