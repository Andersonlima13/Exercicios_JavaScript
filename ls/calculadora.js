// SOMAR VALORES 

function soma(num1,num2) {
    return parseFloat(num1+num2)
  }
  
  // SUBTRAIR VALORES 
  
  function sub(num1,num2){
    return parseFloat(num1-num2)
  }
  
  // MULTI VALORES 
  function multi(num1,num2){
    return parseFloat(num1*num2)
  }
  
  // DIVIDIR VALORES 
  
  function dividir(num1,num2){
    return parseFloat(num1/num2)
  }    
  
  
  const num1 = 10
  const num2 = 3
  const calcular = dividir(num1,num2)
  console.log(calcular)