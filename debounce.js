/**
 * @param {Function} func
 * @param {number} wait
 * @return {Function}
 */
export default function debounce(func, wait) {
    let elapsedTime;
  
    return function(...args){
      clearTimeout(elapsedTime);
      elapsedTime = setTimeout(()=>{
        func.apply(this,args);
      },wait)
    }
  }
  
  