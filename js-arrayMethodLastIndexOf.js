'use strict';

numbers.lastIndexOf = function(searchElement, fromIndex = (this.length - 1)) {
  // write code here
  const { length: arrLength } = this;

  if (isNaN(fromIndex)) {
    for (let i = 0; i < arrLength; i++) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  if (fromIndex >= 0) {
    for (let i = fromIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  if (fromIndex < 0) {
    const startIndex = arrLength + Number(fromIndex);

    for (let i = startIndex; i >= 0; i--) {
      if (this[i] === searchElement) {
        return i;
      }
    }
  }

  return -1;
};