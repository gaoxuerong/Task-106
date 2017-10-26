'use strict';
function number(collection){
  let res=[],obj={};
     for(let item of collection){
       if(!obj[item]){
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

