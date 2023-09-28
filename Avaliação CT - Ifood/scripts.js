/*
! Coding Tank | Vem Ser Tech - Back End (1) | #1052
! Avaliação CT - Ifood
! Enunciado Do Projeto

* Coding Tank - Ifood

? 1. Desafio: Conversor de Horários
? Ao efetuar a compra de sua refeição no Ifood o sistema, após confirmação do pagamento, envia seu pedido ao restaurante, 
? que ao aceitá-lo registra esse momento e lhe retorna o horário de previsão da sua entrega. Esse recurso, apesar de interessante 
? começou a gerar uma quantidade significativa de reclamações na Central de Atendimento, pois os clientes ficaram um pouco 
? confusos com os horários indicados para a entrega. Ao investigar o problema, o time de desenvolvimento entendeu que os horários 
? apresentados estavam no formato de 12hs (AM/PM), sendo que o correto seria utilizar o formato de 24hs. Sua missão: criar um 
? algoritmo capaz de fazer essa conversão! Para isso, crie uma função que receba um horário qualquer, respeitando o formato 12hs 
? (06:15:25PM) e retorne o equivalente (18:15:25).
*/

function anyTime(hours) {
    let fullTime = hours;
    let amPm = fullTime[0] + fullTime[1];
    let finalTime = '';

    if (fullTime[8] === 'P') {
        switch (amPm) {
            case '12':
                finalTime = '12';
                break;
            case '01':
                finalTime = '13';
                break;
            case '02':
                finalTime = '14';
                break;
            case '03':
                finalTime = '15';
                break;
            case '04':
                finalTime = '16';
                break;
            case '05':
                finalTime = '17';
                break;
            case '06':
                finalTime = '18';
                break;
            case '07':
                finalTime = '19';
                break;
            case '08':
                finalTime = '20';
                break;
            case '09':
                finalTime = '21';
                break;
            case '10':
                finalTime = '22';
                break;
            case '11':
                finalTime = '23';
                break;

            default:
                finalTime = fullTime[0] + fullTime[1];
                break;
        }
    } else {
        switch (amPm) {
            case '12':
                finalTime = '00';
                break;

            default:
                finalTime = fullTime[0] + fullTime[1];
                break;
        }
    }

    return finalTime + fullTime.slice(2, 8);

}

console.log(anyTime("09:15:25PM"));

/*
? 2. Desafio: Quantidade de Palavras
? Neste desafio, sua missão será encontrar a quantidade de palavras existentes na seguinte frase:
? 
? ```   "façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"   ```
? Como você pode perceber, essa frase está no padrão camelCase, portanto cada nova palavra é 
? representada pela inicial em maiúscula. Crie uma função que receba uma string e retorne a 
? quantidade de palavras existentes!
*/

function findWordInPhrase(phrase) {
    let alphabetUpperCase = 'ABCDEFGHIJKLMNOPQRSTUVWXYZÇ';
    let countPhrase = 0;

    for (let i = 0; i < phrase.length; i++) {
        for (let indexAlpha = 0; indexAlpha < alphabetUpperCase.length; indexAlpha++) {
            if (phrase[i] === alphabetUpperCase[indexAlpha]) {
                countPhrase++
                break;
            }
        }
    }

    return countPhrase;
}

console.log(findWordInPhrase("façaMercadoNoIfoodEntregamosTudoOQueVocêPrecisaNaPortaDaSuaCasa"));

/*
? 3. Desafio: Número Solitário
? Neste desafio, seu objetivo é encontrar o(s) número(s) solitário(s) (que não se repete), a partir do array de números 
? fornecido. Para resolver, crie uma função que recebe um array com os seguintes números:
? 
? [12, 17, 15, 19, 22, 17, 19, 12]
? E retorne os que não estiverem repetidos.
*/

function nonRepeatNumber(numbers) {
    
    let newList = [];

    for (let i = numbers.length - 1; i >= 0; i--) {
        let index = numbers.indexOf(numbers[i]);

        if (index == i) {
            newList.push(numbers[i]);
        } else {
            numbers.splice(index, 1);
            i--;
        }
    }

    return newList;
}

console.log(nonRepeatNumber([12, 17, 15, 19, 22, 17, 19, 12]));

/*
? 4. Qual é a saída do código a seguir?
let n = 4;
for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
        console.log(j);
    }
}
? a. Não imprime nada
? 
? b. 1 2 3
? 
? c. 1 1 2 1 2 3 1 2 3
? 
? d. 1 2 3 4
? 
* e. 1 1 2 1 2 3 1 2 3 4
*/

// * A resposta correta é a letra -> e. 1 1 2 1 2 3 1 2 3 4
console.log('A resposta correta do Desafio 4. é a letra e. 1 1 2 1 2 3 1 2 3 4');

/*
? 5. Qual é o resultado da expressão booleana abaixo?
!(true && false) || (false && true)
* a. true
? 
? b. null
? 
? c. false
? 
? d. NaN
? 
? e. undefined
*/

// * A resposta correta é a letra -> a. true
console.log('A resposta correta do Desafio 5. é a letra a. true');

/*
? 6. Qual o valor da saída do código abaixo?
let x = 0;
let a = 0;
let b = -5;
if (a > 0) {
    if (b < 0) {
        x = x + 5;
    } else if (a > 5) {
        x = x + 4;
    } else {
        x = x + 3;
    }
} else {
    x = x + 2;
}
console.log(x);
? a) 0
? 
* b) 2
? 
? c) 3
? 
? d) 4
*/

// * A resposta correta é a letra -> b) 2
console.log('A resposta correta do Desafio 6. é a letra b) 2');