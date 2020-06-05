let arr = [1,2,3]
// console.log(arr)
let anarr = [1,[3,4,5], false, "yellow"]
/*console.log(anarr)
console.log(anarr[1][0])
console.log(anarr.length)*/
//types of for loops

/*//type1
for(let i = 0; i < anarr.length; i++)
{
    console.log(anarr[i])
}*/

/*
//type2 direct print elements
for(let val of anarr)
{
    console.log(val);
}*/

//type3 - only print indexes
for(let idx in anarr)
{
    console.log(idx)
    console.log(anarr[idx])
}

