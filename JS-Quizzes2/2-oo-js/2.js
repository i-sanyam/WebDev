console.log(typeof new (class F extends (String, Array) {})().substring);
console.log(typeof new (class F extends (String, Array) {})().splice);
//'function' WRONG
// multiple class cannot be extended, thus only Array is inherited;
