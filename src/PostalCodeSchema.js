class PostalValidator {
    isCode(str) {
      return `${str}`.startsWith('ZIP');
    }
  
    setPostalCodeLengthConstraint(mn, mx = Infinity) {
      this.minLength = mn;
      this.maxLength = mx;
      return this;
    }
  
    //   isCode(str) {
    //     return `${str}`.startsWith(this.startsWith);
    //   }
  
    isNormLength(str) {
      if (!this.minLength) return true;
      const [, code] = str.split('_');
      return this.minLength <= code.length && this.maxLength >= code.length;
    }
  
    //   isLengthValid(str) {
    //     if (this.minLength === undefined) {
    //       return true;
    //     }
    //     return `${str}`.split('_').at(1).length >= this.minLength
    //         && `${str}`.split('_').at(1).length <= this.maxLength;
    //   }
  
    isValid(str) {
      return this.isCode(str) && this.isNormLength(str);
      // return str.startsWith('ZIP');
    }
  }
  
  export default PostalValidator;
  