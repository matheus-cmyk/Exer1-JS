//1. Escreva um programa que mostre na tela a mensagem: "Olá, mundo!'
console.log("olá mundo!");

//2. Faça um programa que leia o nome de uma pessoa e de boas vindas. ex.: “Olá, Lucas!”
console.log("olá matheus");

//3. Faça um programa que leia o nome do funcionário e seu salário e mostre uma mensagem como a do exemplo: O funcionário Lucas recebe R$2000,00 por mês.
var number = "R$10.000";
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
const numero = parseInt(prompt("Digite um número inteiro:"));
const antecessor = numero - 1;
const sucessor = numero + 1;
console.log(`O antecessor de ${numero} é ${antecessor} e o sucessor é ${sucessor}.`);

//7. Faça um algoritmo que leia quanto dinheiro uma pessoa tem na carteira (em R$) e mostre quantos dólares ela pode comprar. Considere US$1,00 = R$5,60.
const dinheiro = Number(prompt("Quanto dinheiro você tem na carteira (R$)?"));
const cotacao = 5.60;
const dolares = dinheiro / cotacao;
console.log(`Com R$${dinheiro.toFixed(2)}, você pode comprar US$${dolares.toFixed(2)}.`);

//8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.
const largura = Number(prompt("Digite a largura da parede em metros:"));
const altura = Number(prompt("Digite a altura da parede em metros:"));
const area = largura * altura;
const tintaNecessaria = area / 2;  
console.log(`A área da parede é ${area} m² e a quantidade de tinta necessária é ${tintaNecessaria} litro(s).`);

//9. Crie um programa que leia o número de dias trabalhados em um mês e mostre o salário de um funcionário, sabendo que ele trabalha 8 horas por dia e ganha R$25 por hora trabalhada.
const diasTrabalhados = parseInt(prompt("Quantos dias você trabalhou no mês?"));
const horasPorDia = 8;
const valorPorHora = 25;
const salario = diasTrabalhados * horasPorDia * valorPorHora;
console.log(`Você trabalhou ${diasTrabalhados} dias e seu salário é R$${salario.toFixed(2)}.`);

//10. Faça um algoritmo que leia o salário de um funcionário, calcule e mostre o seu novo salário, com 15% de aumento.
const salarioAtual = Number(prompt("Digite o seu salário atual:"));
const aumento = salarioAtual * 0.15;  
const novoSalario = salarioAtual + aumento;
console.log(`Seu novo salário, com 15% de aumento, será R$${novoSalario.toFixed(2)}.`);
