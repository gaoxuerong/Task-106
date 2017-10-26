'use strict';
function number(collection){
  let res=[],obj={};
     for(let item of collection){

       if(item.length>1){
         let arr=item;
         let arr1=arr.split("");
      obj[arr1[0]]={};
      obj[arr1[0]].key=arr1[0];
      obj[arr1[0]].count=parseInt(arr1[2]);
       }else if(!obj[item]){
        obj[item]={};
        obj[item].key=item;
        obj[item].count=1;
       }else{
        obj[item].count++;
       }
     }
    for(let i in obj){
       res.push(obj[i]);
    }
     console.log(res)
      return res;
}
module.exports = function countSameElements(collection) {
  return number(collection);
}

//countSameElements(collection);

