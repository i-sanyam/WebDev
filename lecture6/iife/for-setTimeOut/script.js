var a = 0, b = 0
console.log("top "+ Date.now())
for(var i = 0; i < 10; i++)
{
    console.log(b++ + " " + Date.now() + " inside")
    // this is deferred to execute after execution of the main thread
    setTimeout(function () {
        console.log(a++, Date.now(), i);
    }
        ,2000)
}
console.log("end "+ Date.now())
/*
console.log("top "+ Date.now())
for(var i = 0; i < 10; i++)
{
// gets executed in < 0 ms
}
console.log("end "+ Date.now())
*/
/*
for(var i = 0; i<10; i++)
{
    console.log(`${Date.now()} ethon ${i} second`)
    /*
    * these are executd i seconds after being called from here,
    * only after the main thread has executed first
    *//*
    setTimeout(function(i) {
        console.log(Date.now(), i);
    }, i*1000)
}
*/