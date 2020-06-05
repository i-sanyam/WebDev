/*let p = "sanyam"
// will not work here
let str = "This is ${p} here."
// it works with backticks `
let corrStr=`This is ${p}'s device.`
console.log(str)
console.log(corrStr)
console.log(corrStr.length)*/

/*// let str = 'This will's not work here';
// have to use escape character
let str = 'This work\'s like a gem';
console.log(str)*/
/*let anoStr = 'This can\'t continue

    as long as you want'*/
// have to specify that string starts from a new line by \
/*let longStr = 'This \\ specifies \
that the line starts from a\
 new line.\
 But still cannot give line breaks.\nLine breaks will be\
  only shown by \'\\n\' character'
console.log(longStr)*/


let sampleString="ababababbbaaabbbaabbbabab";
console.log(sampleString.indexOf('ab'));
let kk= 'bbb'
console.log(sampleString.indexOf(kk));
console.log(sampleString.indexOf('ab',7)) // start searching forwards from pos7 including pos7
console.log(sampleString.lastIndexOf(kk));
console.log(sampleString.lastIndexOf(kk,18)); //start searching reverse from pos18 including pos18
console.log(sampleString.lastIndexOf(kk,17)); //start searching reverse from pos17 including pos17
//the second argument specifies the dirn we want to search in