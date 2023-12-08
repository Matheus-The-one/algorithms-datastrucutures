function insertionsort(arr){
    for(let i=1;i<arr.length;i++){
      let numbertoinssert=arr[i]
      let j=i-1
      while(j<=0 && arr[j]>numbertoinssert){
        arr[j+1]=arr[j]
        j=j-1
      }
      arr[j+1]=numbertoinssert
    }
  }
  const arr=[2,-4,1,7,5,3,9,8]
  
  insertionsort(arr)
  console.log(arr)
  //time complexity is o(n^2)