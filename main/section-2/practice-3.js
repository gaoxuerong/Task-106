'use strict';
function number(collection){
  let res=[],obj={};
     for(let item of collection){
      if(item.length===1){
        if(!obj[item])
        {
          obj[item]={};
          obj[item].name=item;
          obj[item].summary=1;
        }else{
            obj[item].summary++;
          }
      }
      if(item.length===3){
        let arr1=item.split("");
        if(!obj[arr1[0]])
          {
            obj[arr1[0]]={};
            obj[arr1[0]].name=arr1[0];
            obj[arr1[0]].summary=parseInt(arr1[2]);
          }else{
            obj[arr1[0]].summary+=parseInt(arr1[2]);
            }
      }
      if(item.length===4){
        let arr2=item.split("");
        //console.log(arr2[0])
        if(!obj[arr2[0]])
          {
            obj[arr2[0]]={};
            obj[arr2[0]].name=arr2[0];
            //console.log(arr2[0])
            obj[arr2[0]].summary=parseInt(arr2[2]);
            //console.log(arr2[2])
          }else{
              obj[arr2[0]].summary+=parseInt(arr2[2]);
            }
      }
      if(item.length===5){
        let arr3=item.split("");
        let arr4=item.split("[",2)[1];
        let arr5=arr4.split("]",1)[0]
        //console.log(arr5)
        if(!obj[arr3[0]])
          {
            obj[arr3[0]]={};
            obj[arr3[0]].name=arr3[0];
            //console.log(arr2[0])
            obj[arr3[0]].summary=parseInt(arr5);
            //console.log(arr2[2])
          }else{
              obj[arr3[0]].summary+=parseInt(arr5);
            }
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

