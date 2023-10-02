/*
//POP/PUSH -> REMOVE/ADICIONA DA ÚLTIMA POSIÇÃO
const meuArray = [1, 2, 3, 4];
console.log(meuArray)

let x = meuArray.pop() //pop remove da última posição
console.log(meuArray)
console.log('Removi o último elemento com pop ' + x)

meuArray.push(4) //push inclui valor na última posição
console.log('incluí o último elemento com push ' + meuArray)


//SHIFT, UNSHIFIT -> REMOVE/ADICIONA DA PRIMEIRA POSIÇÃO
console.log(meuArray)

let y = meuArray.shift() //shift remove da primeira posição
console.log(meuArray)
console.log('Removi o primeiro elemento com shift ' + y)

meuArray.unshift(1) //unshift inclui valor na primeira posição
console.log(meuArray)


//SLICE - > COPIA DO ELEMENTOS DAS POSIÇÕES DEFINIDAS
const meuArray2 = [1, 2, 3, 4];
console.log(meuArray2)

let w = meuArray2.slice(0, 2) //slice copia as posições definidas, as posições não são auto inclusivas
console.log(w)
console.log(meuArray2)
*/

/*MÃO NA MASSA MÉTODO PUSH

var contatosDeEmergencia = []

let nomeDoContato1 = prompt('Qual o nome do primeiro contato?')
let numeroDeTelefoneDoContato1 = prompt('Qual é o número do primeiro contato?')
if (nomeDoContato1 == '') {
    alert('Nome do contato está vazio') 
} else if (numeroDeTelefoneDoContato1 == '') {
    alert('Número do contato está vazio')
} else {
    var contato1 = [nomeDoContato1, numeroDeTelefoneDoContato1]
}

let nomeDocontato2 = prompt('Qual o nome do segundo contato?')
let numeroDeTelefoneDoContato2 = prompt('Qual é o número do segundo contato?')
if (nomeDocontato2 == '') {
    alert('Nome do contato está vazio')
} else if (numeroDeTelefoneDoContato2 == '') {
    alert('Número do contato está vazio')
} else {
    var contato2 = [nomeDocontato2, numeroDeTelefoneDoContato2]
}

contatosDeEmergencia.push(contato1, contato2)

alert('Você cadastrou os seguintes contatos de emergencia:\n' + contato1[0] + ': ' + contato1[1] + '\n' + contato2[0] + ': ' + contato2[1])


let adicionarOutroContato = prompt('Deseja adicionar outro contato? (s/n)') 
    if (adicionarOutroContato == 's') {
        let nomeDocontato3 = prompt('Qual o nome do terceiro contato?')
        let numeroDeTelefoneDoContato3 = prompt('Qual é o número do terceiro contato?')
        if (nomeDocontato3 == '') {
            alert('Nome do contato está vazio')
        } else if (numeroDeTelefoneDoContato3 == '') {
            alert('Número do contato está vazio')
        } else {
            var contato3 = [nomeDocontato3, numeroDeTelefoneDoContato3]
            contatosDeEmergencia.push(contato3)
        }   
    }

    alert('Você cadastrou os seguintes contatos de emergencia:\n' + contato1[0] + ': ' + contato1[1] + '\n' + contato2[0] + ': ' + contato2[1] + '\n' + contato3[0] + ': ' + contato3[1])
*/



/*MÃO NA MASSA SHIFT, SPLICE
let fila = ['Lucas', 'Caio', 'Luiz', 'Marcos']
console.log(fila)

let opcao = prompt('Deseja tirar ou colocar alguém na fila?\n 1 - Tirar\n 2 - Colocar')
if (opcao == '1') {
   let proximo = fila.shift()
   alert(proximo + ' foi tirado. Restam agora na fila ' + fila)
}
 else {
    let colocarNome = prompt('Quem você deseja colocar na fila?')
    fila.unshift(colocarNome)
    alert(colocarNome + ' foi para o início da fila. Estão na fila:\n' + fila)
 }

 let quantidade = Number(prompt('Deseja agora tirar quantas pessoas da fila?'))
 let chamados = fila.splice(0, quantidade)
 alert(chamados + ' foram tirados. Agora estão na fila ' + fila)
*/


/*
const birds = ["Aguia", "Coruja", "Tucano", "Falcão", "Andorinha", "Arara" ];

let passaros = birds.filter(passaros => passaros.startsWith('A'))
console.log(passaros)
*/



/*
let array = [1,5,3,7,6,10,45,0,12,8]

// A partir do array criado, crie um novo array, utilizando ele como base, onde cada elemento é o dobro do seu valor.
let dobro = array.map(numero => {
  return numero * 2
})

// Filtre apenas os números pares do primeiro array.
let pares = array.filter(numero => {
  return numero % 2 === 0
})

// Exiba o maior e o menor elemento do array de números pares.
pares.sort((a, b) => a - b)
let menor = pares[0]
let maior = pares[pares.length - 1]
alert(menor)
alert(maior)
*/



/*
//CONCACT
const pares = [0, 2, 4]
const impares = [1, 3, 5]
console.log(pares)
console.log(impares)

let numeros = pares.concat(impares, [9, 8, 7], ['oi']) //CONCAT É CÓPIA NÂO REFERÊNCIA
console.log(numeros)
console.log(pares)
console.log(impares)
*/



/*SINTAXE SPREAD
const pares = [0, 2, 4]
const impares = [1, 3, 5]

let numeros = [pares, impares]
console.log(numeros)

let numero = [...pares, ...impares, ...[9, 8, 7]]
console.log(numeros)
*/



//SORT E REVERSE





/*MÃO NA MASSA FILTER, MAP
let alunos = [
    ['João', 20, 7.5, 'joao@gmail.com'],
    ['Maria', 19, 6.0, 'maria@gmail.com'],
    ['Pedro', 21, 6.8, 'pedro.com.br'],
    ['Rui', 21, 4.8, ''],
    ['Ana', 20, 9.0, 'ana@hotmail.com'],
    ['Antonio', 16, 5.0, 'antonio@gmail.com'],
    ['Lucas', 22, 7.1, 'lucas@gmail.com'],
    ['Luiz', 21, 5.4, 'luiz@com'],
    ['Carlos', 17, 5.9, '']
];


let aprovados = alunos.filter(function(aluno) {
    if (aluno[2] >= 6) {
        return true
    } else {
        return false
    }
})
alert('Alunos aprovados ' + aprovados)
alert(alunos)


let reprovados = alunos.filter(function(aluno) {
    if (aluno[2] < 6) {
        return true
    } else {
        return false
    }
})
alert('Alunos reprovados ' + reprovados)
alert(alunos)


let alunosComPontoExtra = reprovados.map(function(aluno) {
    return [aluno[0], aluno[1], aluno[2] * 1.1, aluno[3]]
})
alert('Alunos com ponto extra ' + alunosComPontoExtra)
alert(alunos)


let aprovadosComPontoExtra = alunosComPontoExtra.filter(function(aluno) {
    if (aluno[2] > 6) {
        return true
    } else {
        return false
    }
})
alert('Alunos aprovados com ponto extra ' + aprovadosComPontoExtra)

let reprovadosComPontoExtra = alunosComPontoExtra.filter(function(aluno) {
    if (aluno[2] < 6) {
        return true
    } else {
        return false
    }
})
alert('Alunos reprovados com ponto extra ' + reprovadosComPontoExtra)


// MÃO NA MASSA EXPRESSOES REGULARES

*/





// [nome, email, telefone]
let contatos = [
    [ "João", "joao@gmail.com", "11998774533"],
    [ "Maria", "maria@gmail.com", "11933227566"],
    [ "Pedro", "pedro@hotmail.com", "11987654567"],
  ];

let menu = "1 - Exibir todos os contatos\n2 - Cadastrar um novo contato\n3 - Remover contato pelo nome\n4 - Buscar contato pelo nome"

let opcao = prompt(menu)

let emailRegex = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/

let numeroRegex = /(?:^\([0]?[1-9]{2}\)|^[0]?[1-9]{2}[\.-\s]?)[9]?[1-9]\d{3}[\.-\s]?\d{4}$/

switch(opcao) {

  case '1': {
    // Listar todos os contatos
    alert('Seus contatos: ' + contatos)
    break;
  }

    

  case '2': {
    // Cadastrar um novo contato, informando corretamente o nome, email e número de telefone
    let nomeNovoContato = prompt('Qual é o nome do novo contato?')
    let emailNovoContato = prompt('Qual é o e-mail do novo contato?')

    if (emailRegex.test(emailNovoContato)) {
        let numeroNovoContato = prompt('Qua é o número do novo contato?')
        if (numeroRegex.test(numeroNovoContato)) {
            let novoContato = [nomeNovoContato, emailNovoContato, numeroNovoContato]
            contatos = contatos.concat(novoContato)
            alert('Você cadastrou ' + novoContato)
            alert('Seus contatos: ' + contatos)
        } else {
        alert('Número inválido. Impossível realizar o cadastro.')
        }
    } else {
    alert('Email inválido. Impossível realizar o cadastro.')
    }
    break;
  }


  case '3': {
    // Remover um contato pelo nome
    let nomeContatoremover = prompt('Qual é o nome do contato que você deseja remover?')
    let nomeRemover = contatos.filter(function(elemento) {
        if (elemento[0] == nomeContatoremover) {
            return true
        } else {
            return false
        }
    })
    alert('Tem certeza que deseja remover ' + nomeRemover + '?')  

    let contatoRemovido = contatos.splice(0, 1)
    alert('Você removeu ' + nomeContatoremover)
    break;
  }


  case '4': {
    // Buscar contato pelo nome
    let nomeContatoVer = prompt('Qual contato você deseja buscar?')
    let nomeVer = contatos.indexOf()
    alert(nomeVer)

 
}

}



















