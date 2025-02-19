console.log("olá mundo!");

console.log("olá matheus");

const name = "xiru";
var number = "R$15.000";
console.log(`O funcionário ${name}, recebe ${number} por mês!`);

//4. Desenvolva um algoritmo que leia dois números inteiros e mostre o somatório entre eles.
var a = 2;
var b = 4;
console.log(a + b);

//5. Faça um programa que leia as duas notas de um aluno em uma matéria e mostre na tela a sua média na disciplina.
const materia = "portugues";
var nota1 = 10;
var nota2 = 9;
var media = (nota1 + nota2) / 2;
console.log(`O aluno teve sua média ${media} na de matéria ${materia}!`);

//6. Faça um programa que leia um número inteiro e mostre o seu antecessor e seu sucessor.
var numero = 4;
var antecessor = numero - 1;
var sucessor = numero + 1;
console.log(
  `O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`
);

//7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Quanto dinheiro você tem na carteira (R$)?", (reais) => {
  let cotacao = parseInt(reais) * 5.6;
  console.log(`vc tem na sua carteira: R$ ${reais} e em dolar ${cotacao}`);
  rl.close();
});
 seu salário atual:"));
const aumento = salarioAtual * 0.15;  
const novoSalario = salarioAtual + aumento;
console.log(`Seu novo salário, com 15% de aumento, será R$${novoSalario.toFixed(2)}.`);
