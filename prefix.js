

    let strs=["flower","flow","flight"]
    let arr=[]
    let s=[]
    for(i=0;i<strs.length;i++){
         arr.push(strs[i].split(''))
    }
    for(j=0;j<arr.length;j++){
        for(k=0;k<arr[j].length;k++){
            if(arr[j][k]==arr[j][k]){
                s.push(arr[j][k])
            }
        }
    }

 console.log(s);


//console.log(pref(["flower","flow","flight"]))