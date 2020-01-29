//exercício 1
class Usuario {
    constructor (email, senha) {
        this.email = email;
        this.senha = senha;
    }

    isAdmin() {
        return this.admin == true;
    }
}

class Admin extends Usuario{
    constructor (email, senha) {
        super(email, senha);
        super.admin = true;
    }
}

const User1 = new Usuario('email@teste.com', 'senha123');
const Adm1 = new Admin('email@teste.com', 'senha123');
console.log(User1.isAdmin()) // false
console.log(Adm1.isAdmin()) // true

//exercício 2
const usuarios = [
    { nome: 'Diego', idade: 23, empresa: 'Rocketseat' },
    { nome: 'Gabriel', idade: 15, empresa: 'Rocketseat' },
    { nome: 'Lucas', idade: 30, empresa: 'Facebook' },
];

//map - Crie uma variável que contenha todas idades dos usuários: [23, 15, 30]
let idades = usuarios.map((item) => {
    return item.idade;
});
console.log(idades);

//filter - Crie uma variáveis que tenha apenas os usuários que trabalham na Rocketseat e com mais de 18
        //anos: [{ nome: 'Diego', idade: 23, empresa: 'Rocketseat' }]
let trabalhadores = usuarios.filter((i) => {
    return i.idade > 17 && i.empresa == "Rocketseat";
});
console.log(trabalhadores);

//find - Crie uma variável que procura por um usuário que trabalhe na empresa Google: undefined
const google = usuarios.find((i) => {
    return i.empresa === "Google";
});
console.log(google);

//Multiplique a idade de todos usuários por dois e depois realize um filtro nos usuários que possuem
        //no máximo 50 anos:
const usuarios_50 = usuarios.map((i) => {
    i.idade *= 2;
    return i;
}).filter((i) => {
    return i.idade <= 50;
});
console.log(usuarios_50);


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
