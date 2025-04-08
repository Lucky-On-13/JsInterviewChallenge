// You are free to use alternative approaches of
// instantiating the EventEmitter as long as the
// default export is correct.

export default class EventEmitter {
    constructor() {
      this.events = {};
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    on(eventName, listener) {
      if(!this.events[eventName]){
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
  
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */
    off(eventName, listener) {
      const listeners = this.events[eventName];
      if(!listeners) return this;
  
      const index = listeners.indexOf(listener);
      if(index !== -1){
        listeners.splice(index, 1);
      }
      return this;
    }
  
    /**
     * @param {string} eventName
     * @param  {...any} args
     * @returns {boolean}
     */
    emit(eventName, ...args) {
      const listeners = this.events[eventName];
      if(!listeners || listeners.length === 0) return false;
      listeners.forEach(listener=>listener(...args));
      return true;
    }
  }