class IpValidator {
    isRealIp(str) {
      // начинается с 27
      // имеет форм-фактор ххх.ххх.ххх.ххх
      const digits = `${str}`.split('.');
      return digits.at(0) === '27' && digits.length === 4;
    }
  
    ipAddressValues() {
      this.valuesCheck = true;
      return this;
    }
  
    isNormValues(str) {
      if (!this.valuesCheck) return true;
      const res = str.split('.').filter((digit) => digit >= 0 && digit < 256);
      return res.length === 4;
    }
  
    isValid(str) {
      return this.isRealIp(str) && this.isNormValues(str);
    }
  }
  
  export default IpValidator;
  