//1.1 l import apenas a classe Usuario renomeando-a para ClasseUsuario e chame a funão info();
import ClasseUsuario from './functions';
ClasseUsuario.info();

//1.2 Em seu arquivo principal importe a variável de idade e exiba a mesma em tela;
import { idade } from './functions';
console.log(idade);

//1.3  importe tanto a classe quanto a variável idade e renomeie a variável idade 
//para IdadeUsuario.
import Usuario, { idade as IdadeUsuario } from './functions';
console.log(IdadeUsuario);
Usuario.info();
