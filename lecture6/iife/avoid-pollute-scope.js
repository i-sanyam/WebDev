/*
* before ecmascript6 this tweak was used to create block Scope
* using var, since var has a function scope
*/
if (true) {
    // var's scope is limited to the scope of this anonymous function
    (function () {
        // the scope of a is limited to lines 3-6
        var a = 10;
    })

    console.log(a) // this a is undefined
}
console.log(a) // this a is undefined

/*
if (true) {
    // var has got function scope
    var a = 10;
}
console.log(a)
*/
