
function outer(arg1)
{
    let x = arg1;
    console.log(arguments)
    function inner(arg2)
    {
        // only the arguments to this fun are acessible not the ones in the closure scope
        let x = 30;
        console.log(arg1,arg2);
        let y = 20;
    }
    return inner;
}
let funin = outer(10);
funin(40)

/*
function myfun()
{
    let x = 10;
    let y = 20;
    let sam="good"
    console.log(arguments[1])
}
myfun();
*/