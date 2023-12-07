function recursivebinarysearch(arr,t){
    return search(arr,t,0,arr.length-1)
  }
  function search(arr,t,leftindex,rightindex){
    if(leftindex>rightindex){
      return -1
    }
    let middleindex=Math.floor((rightindex+leftindex)/2)
    if (t===arr[middleindex]){
      return middleindex
    }
    if(t<arr[middleindex]){
      return search(arr,t,leftindex,middleindex-1)
    }
    else{
      return search(arr,t,middleindex+1,rightindex)
    }
  }
  
  console.log(recursivebinarysearch([1,4,5,7,8,12,15,17],17))
  //timecomplexxity is 0(logn)