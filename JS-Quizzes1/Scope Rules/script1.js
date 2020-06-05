/*
var foo = { bar: function() { 
                    console.log(`I am `, this)
                    return this.baz;
                },
            baz: 1 };
(function() {
    return typeof arguments[0]();
})(foo.bar);
*/

/*2
var foo = { bar: function(){
                    return this.baz; },
            baz: 1
          }
typeof (f = foo.bar)();
*/

/* 3
*/
