//Print odd numbers in an array
var arr=[1,2,8,4,5];
var res=arr.filter(ele=>ele%2!==0)
console.log(res);   

//Convert all the strings to title caps in a string array
var arr=['guvi geek','zen portal'];
var output=arr.map(ele=>{
    let word=ele.split(' ');
    let res=word.map(ele=>{
        let firstLetter=ele.charAt(0).toUpperCase();
        let ans=firstLetter+ele.substr(1);
        return ans
    })
  return res.join(' ')
})
console.log(output)

//Sum of all numbers in an array
var arr=[1,2,3,4,5];
var sum=arr.reduce((sum,ele)=>sum+ele);
console.log(sum)

// Return all the prime numbers in an array
var arr=[1,2,3,8,5];
var out=arr.filter(ele=>{
    let prime=true;
    if(ele==1)
    prime=false;
    for(i=2;i<ele;i++){
        if(ele%i===0)
        prime=false;
    }
    if(prime)
    return ele;
})

console.log(out)

//Return all the palindromes in an array
var arr=['dad',12321,'civic','guvi'];
var res=arr.filter(ele=>{
    let rev=ele.toString().split('').reverse().join('');
    if(ele==rev)
    return ele
})
console.log(res)

