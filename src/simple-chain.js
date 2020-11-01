const CustomError = require("../extensions/custom-error");

const chainMaker = {
   str: [],
   getLength() {
      return this.str.length;
   },
   addLink(value = "( )") {
      this.str.push(value);
      return this;
   },
   removeLink(position) {
      if (typeof position === 'number' && position <= this.str.length) {
         this.str.splice(position - 1, 1);
         return this;
      } else {
         this.str = [];
         throw new Error();
      }
   },
   reverseChain() {
      this.str = this.str.reverse();
      return this;
   },
   finishChain() {
      let chain = "";
      for (let item of this.str) {
         chain += `( ${item} )~~`;
      }
      console.log(this.chain);
      this.str = [];
      return chain.slice(0, -2);
   },
};

module.exports = chainMaker;
