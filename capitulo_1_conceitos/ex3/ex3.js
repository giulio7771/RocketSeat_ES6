//exercício 3 - Converta as funções nos seguintes trechos de código em Arrow Functions:
console.log("Exercício 3");
// 3.1
let arr = [1, 2, 3, 4, 5];
arr = arr.map(function(item) {
 return item + 10;
});
console.log(arr);

let arr2 = [1, 2, 3, 4, 5];
arr2 = arr2.map(item =>  item + 10);
console.log(arr2)


// 3.2
// Dica: Utilize uma constante pra function
const usuario1 = { nome: 'Diego', idade: 23 };
function mostraIdade(usuario) {
 return usuario.idade;
}
console.log(mostraIdade(usuario1));

const usuario2 = { nome: 'Diego', idade: 23 };
const mostraIdade2 = (usuario) => usuario.idade;
console.log(mostraIdade2(usuario2));

// 3.3
// Dica: Utilize uma constante pra function
const nome = "Diego";
const idade = 23;
function mostraUsuario(nome = 'Diego', idade = 18) {
 return { nome, idade };
}
mostraUsuario(nome, idade);
mostraUsuario(nome);

const mostraUsuario2 = (nome = 'Diego', idade = 18) => { 
   return {nome, idade};
};
console.log(mostraUsuario2(nome));
console.log(mostraUsuario2(nome, idade));

// 3.4
const promise = function() {
    return new Promise(function(resolve, reject) {
        return resolve();
    })
}

const promise2 = new Promise((resolve, reject) => resolve());
