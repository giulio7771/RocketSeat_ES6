
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


