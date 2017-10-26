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
//收集元素个数
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
module.exports = function createUpdatedCollection(collectionA, objectB) {
  let collectionB=number(collectionA);
  let res=collectionB;
  for(let i of collectionB){
    if(itemEqCollection(getObjChild(objectB),getObjChild(i))){  
     let sub =Math.floor(i.count/3); 
        i.count=i.count-sub;    
    }
  }
  console.log(res);
  return res;
}