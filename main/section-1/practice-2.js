'use strict';
function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
function mapCollection(collection){
  for(let i of collection){
   if(i){
    return i;
    console.log(i);
   }     
  }
}
module.exports = function collectSameElements(collectionA, collectionB) {
  let res=[];
  for(let i of collectionA){
    if(itemEqCollection(mapCollection(collectionB),i)){
      res.push(i);
    }
  }
  console.log(res)
  return res;
}
//collectSameElements([1,2,'a',4,6], [[1,2,3,4,5]])