/**
 * @param {Array} iterable
 * @return {Promise<Array>}
 */
export default function promiseAll(iterable) {
    return new Promise((resolve, reject)=>{
      let resolvedNumber = 0;
    const output = [];
  
    if (iterable.length === 0) {
      return resolve([]);
    }
  
    iterable.forEach((item, index) => {
      Promise.resolve(item)
      .then((value) => {
        output[index] = value;
        resolvedNumber++;
  
        if(resolvedNumber === iterable.length){
          resolve(output);
        }
      })
      .catch(reject);
    });
    })
  }
  