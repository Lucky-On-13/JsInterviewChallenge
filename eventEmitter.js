   /**
     * @param {string} eventName
     * @param {Function} listener
     * @returns {EventEmitter}
     */

export default class EventEmitter {
    constructor() {
      this.events = {};
    }
    on(eventName, listener) {
      if(!this.events[eventName]){
        this.events[eventName] = [];
      }
      this.events[eventName].push(listener);
  
      return this;
    }

    off(eventName, listener) {
      const listeners = this.events[eventName];
      if(!listeners) return this;
  
      const index = listeners.indexOf(listener);
      if(index !== -1){
        listeners.splice(index, 1);
      }
      return this;
    }
  
    emit(eventName, ...args) {
      const listeners = this.events[eventName];
      if(!listeners || listeners.length === 0) return false;
      listeners.forEach(listener=>listener(...args));
      return true;
    }
  }