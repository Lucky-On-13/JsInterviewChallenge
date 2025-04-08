/**
 * @template T
 * @param {T} value
 * @return {T}
 */
export default function deepClone(value) {
    if(value === null || typeof value !== 'object') return value;
    if(Array.isArray(value)) return value.map(item => deepClone(item));
  
    const clonned_obj = {};
    for(const key in value){
      if(value.hasOwnProperty(key)){
        clonned_obj[key] = deepClone(value[key]);
      }
    }
    return clonned_obj;
  }