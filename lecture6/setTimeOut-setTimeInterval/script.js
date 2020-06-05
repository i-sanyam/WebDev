var counter = 0;

function sayHello() {
    counter++;
    if (counter > 15)
    {
        clearInterval(intervalID);
    }
    console.log(counter,Date.now(), "Hello")
}
var intervalID = setInterval(sayHello, 100)
