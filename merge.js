let word1 = "abcdef"
let word2 = "pqr"
let w1=word1.split('')
let w2=word2.split('')
let arr=[]
for(i=0;i<w1.length;i++){
 for(j=0;j<w2.length;j++){
    arr.push([w1[i],w2[i]])
    break;
 }
}
console.log(arr.flat().join(''))