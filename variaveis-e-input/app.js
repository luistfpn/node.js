const readline = require('readline').createInterface({
    input:process.stdin,
    output:process.stdout
});

const minhaPrimeiraConstanteString = 'Minha primeira constante';
console.log(minhaPrimeiraConstanteString);

let leituraDeCampo;
readline.question('informe sua idade:', input => {
    leituraDeCampo = input;
    console.log(`o usuario digitou: ${leituraDeCampo}`);   

}) ;

