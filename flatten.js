/**
 * @param {Array<*|Array>} value
 * @return {Array}
 */
export default function flatten(value) {
    let delivery = [];
  
    for(let item of value){
      if(Array.isArray(item)){
        delivery = delivery.concat(flatten(item));
      }
      else{
         delivery.push(item);
      }
    }
    return delivery;
  }