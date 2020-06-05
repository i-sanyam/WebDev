

function printThis() {
  console.log('this = ', this)
  return this
}

let obj1 = {
  a: 10,
  b: 20,
  // fn: printThis
  fn: printThis() // this is same as calling printThis from window as shown in line no. 14
}
// obj1.fn = printThis() // this is same as line no. 12

let obj2 = {
  p: 'asds',
  q: 'afadg',
  fun: printThis
}


let obj3 = {}
obj3.x = 12
obj3.y =  'asd'
obj3.z = true