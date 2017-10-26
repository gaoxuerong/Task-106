'use strict';
//比较看两项是否相等
function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
//获取对象属性
function getObjChild(obj){
  for(let i in obj){
    if(i){
      return obj[i];
    }
  }
}
module.exports = function collectSameElements(collectionA, objectB) {
  let res=[];
  for(let i of collectionA){
    if(itemEqCollection(getObjChild(objectB),getObjChild(i))){
      res.push(getObjChild(i));
    }
  }
  console.log(res)
  return res;
}
//collectSameElements([1,2,'a',4,6], [1,2,3,4,5])