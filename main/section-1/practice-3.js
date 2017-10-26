'use strict';
function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
function objTurnToArr(obj){
  for(let i in obj){
    if(i){
      return obj[i];
    }
  }
}
module.exports = function collectSameElements(collectionA, objectB) {
  let res=[];
  for(let i of collectionA){
    if(itemEqCollection(objTurnToArr(objectB),i)){
      res.push(i);
    }
  }
  console.log(res)
  return res;
}
//collectSameElements([1,2,'a',4,6], [1,2,3,4,5])'use strict';
