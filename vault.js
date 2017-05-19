//'use strict';
module.exports = function() {

  var vault = {};

  function setValue(key, value){
    vault[key] = value;
    return vault[key];
  }

  function getValue(key){
    if(vault.hasOwnProperty(key)){
      return vault[key];
    } else {
      return null;
    }
  }
  return {
    setValue: setValue,
    getValue: getValue
  };

};