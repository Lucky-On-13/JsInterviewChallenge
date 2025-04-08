/**
 * @param {Element} element
 * @param {string} classNames
 * @return {Array<Element>}
 */
export default function getElementsByClassName(element, classNames) {
    const classes = classNames.split(' ').filter(Boolean); 
    const output = [];
  
   
    function DoubleCheckelt(elt) {
      if (classes.every(className => elt.classList.contains(className))) {
        output.push(elt);
      }
      Array.from(elt.children).forEach(DoubleCheckelt); 
    }
    Array.from(element.children).forEach(DoubleCheckelt);   
    return output;
  }
  