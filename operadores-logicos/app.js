const { read } = require('fs');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});

console.log('Esse programa vai checar se voce e maior de 18 anos e tem habilitacao para saber se voce pode entrar no kart');
console.log('Alem de suas verificacoes, precisamos verificar se voce esta na lista de presenca de horario');

readline.question('qual o anos do seu nascimento?', ano => {
    if (ano > 2004) {
        console.log('Voce nao tem 18 anos');
    } else {
        readline.question("Voce tem habilitaçao? (sim/nao)", temhabilitacao => {
            if (!(temhabilitacao.toUpperCase() === "SIM")) {
                console.log('Voce nao tem habilitacao para entrar no kart');
            } else {
                readline.question("Qual o seu nome?", nome => {
                    switch (nome) {
                        case 'Douglas':
                            console.log('bem vindo ao kart Douglas');
                            break;
                        case 'Rafael':
                            console.log('bem vindo ao kart Rafael');
                        default:
                            console.log('Seu nome nao foi identificado na lista de presenca');

                    }

                });
            }
        })
    }
})