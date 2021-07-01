  function BinarioADecimal(num){
    // tu codigo aca
    // ------------------------------------------------
    // let result = 0;
    // let numReverse = num.split('').reverse();
    // for (let i = 0; i < numReverse.length; i ++) {
    //   result = result + numReverse[i] * (2 ** i);
    // }
    // return result;
    // -------------------------------------------------
    // for (let i = 0; i < num.length; i ++) {
    //   result += num[i] * 2 ** (num.length - 1 - i);
    // }
    // return result;
    // -------------------------------------------------
    //   function BinarioADecimal(num) {
    //     let array = num.split('');
    //     let sumaTotal = array.reduce(function(acum, elem, indice, arr) {
    //         return acum + Number(elem) * 2 ** (arr.length - 1 - indice); 
    //   }, 0);
    //   return sumaTotal;
    // }
    // -------------------------------------------------
    let result = 0;
    let numReverse = num.split('').reverse();
    for(let i = 0; i < numReverse.length; i ++){
      result += numReverse[i] * Math.pow(2, i);
    }
      return result;
    }

    function DecimalABinario(num){
      // tu codigo aca
    let result = [];
    while(num > 0){
       result.unshift(num % 2);
       num = Math.floor(num / 2);
    }
      return result.join('');
    }

module.exports = {
  BinarioADecimal,
  DecimalABinario,
}