/**
 * @param {...(any|Object|Array<any|Object|Array>)} args
 * @return {string}
 */
export default function classNames(...args) {
    let output = [];
  
    const search = (item) => {
      if (item === null || item === false || item === undefined || item === 0 || item === '') return;
      if (typeof item === "string" || typeof item ==="number" || typeof item === "boolean") {
        output.push(item);
      } else if (Array.isArray(item)) {
        item.forEach(search);
      } else if (typeof item === "object") {
        for (const key in item) {
          if (item[key]) {
            output.push(key);
          }
        }
      }
    };
  
    args.forEach(search);
    return output.join(" ");
  }
  