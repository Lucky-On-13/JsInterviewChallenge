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
        const clonedValue = deepClone(value[key]);

        if (typeof clonedValue === 'string') {
          clonned_obj[key] = clonedValue;
        }
      }
    }

    const stringValues = Object.values(clonned_obj).filter(value => typeof value === 'string');
    const filteredObj = {};
    Object.keys(clonned_obj).forEach((key, index) => {
      if (typeof clonned_obj[key] === 'string') {
        filteredObj[key] = stringValues[index];
      }
    });

    return filteredObj;
}


/*
const obj = {
  name: "Victoire",
  age: 25,
  description: "Développeur",
  address: { city: "Paris" }
};

const clonedObj = deepClone(obj);
console.log(clonedObj);
*/