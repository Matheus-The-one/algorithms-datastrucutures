function linearsearch(arr,T){
    for( let i=0;i<arr.length;i++){
      if(arr[i]===T){
        return i
      }
      
    }
    return -1
  }
  console.log(linearsearch([1,3,5,6,7,8,9],4))
  //time complexity is  O(N^2)