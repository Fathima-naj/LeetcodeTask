

function uniqueSum(nums){
    let un=nums.filter((v)=>nums.indexOf(v)==nums.lastIndexOf(v))
let sum=un.reduce((t,a)=>t+a,0)
return sum
}

console.log(uniqueSum([1,2,3,2]))
console.log(uniqueSum( [1,1,1,1,1]));

