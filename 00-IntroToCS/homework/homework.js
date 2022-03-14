'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  let decimal = 0;
  num.split('').reverse().forEach((x,index)=>{if(x == 1) decimal += 2**index})
  return decimal
}

function DecimalABinario(num) {
  // tu codigo aca
  let binary = []
  while (num > 0){
    binary.unshift(Math.floor(num % 2))
  	num = Math.floor(num / 2)  
  }
  return binary.join('')

}


module.exports = {
  BinarioADecimal,
  DecimalABinario,
}