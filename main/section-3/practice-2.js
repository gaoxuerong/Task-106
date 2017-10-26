'use strict';
//判断是否相等
function itemEqCollection(collection ,item){
  for(let i of collection){
    if(i===item){
      return true;
    }
  }
  return false;
}
//获取对象单个属性
function getObjChild(obj){
  for(let i in obj){
    if(i){
      return obj[i];
    }
  }
}
module.exports = function createUpdatedCollection(collectionA, objectB) {
  let res=collectionA;
  for(let i of collectionA){
    if(itemEqCollection(getObjChild(objectB),getObjChild(i))){  
     let sub =Math.floor(i.count/3); 
        i.count=i.count-sub;    
    }
  }
  console.log(res);
  return res;
}