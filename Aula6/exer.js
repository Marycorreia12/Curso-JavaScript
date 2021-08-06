let varA = 'A'; //B
let varB = 'B'; //C
let varC = 'C'; //A

varc = varA; //A

varA = varB; //B
varB = varC; //C
varC = varc; //A

console.log(varA, varB, varC);