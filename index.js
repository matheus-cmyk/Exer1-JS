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
  console.log(`voce tem na sua carteira: R$ ${reais} e em dolar ${cotacao}`);
  rl.close();
});
 //8 
//8. Faça um algoritmo que leia a largura e altura de uma parede e mostre a área a ser pintada e a quantidade de tinta necessária para o serviço, sabendo que cada litro de tinta pinta uma área de 2 metros quadrados.
const readline = require("readline");
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
rl.question("Digite a largura da parede (m): ", (largura) => {
  rl.question("Digite a altura da parede (m): ", (altura) => {
    let larg = parseFloat(largura);
    let alt = parseFloat(altura);

    if (isNaN(larg) || isNaN(alt) || larg <= 0 || alt <= 0) {
      console.log("Por favor, insira valores válidos para largura e altura.");
    } else {
      let area = larg * alt;
      let tinta = area / 2;
      console.log(
        `A área da parede é ${area.toFixed(
          2
        )}m². Você precisará de ${tinta.toFixed(2)} litros de tinta.`
      );
    }

    rl.close();
  });
});

//9

const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

const salarioHora = 25;
const horasPorDia = 8;

rl.question("Digite o número de dias trabalhados no mês: ", (dias) => {
  let diasTrabalhados = parseInt(dias);

  if (isNaN(diasTrabalhados) || diasTrabalhados < 0) {
    console.log("Por favor, insira um número válido de dias trabalhados.");
  } else {
    let salarioMensal = diasTrabalhados * horasPorDia * salarioHora;
    console.log(`O salário do funcionário será R$${salarioMensal.toFixed(2)}.`);
  }

  rl.close();
});

//10
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rl.question("Digite o salário atual do funcionário: ", (salario) => {
  let salarioAtual = parseFloat(salario);

  if (isNaN(salarioAtual) || salarioAtual < 0) {
    console.log("Por favor, insira um valor válido para o salário.");
  } else {
    let novoSalario = salarioAtual * 1.15;
    console.log(
      `O novo salário com 15% de aumento será R$${novoSalario.toFixed(2)}.`
    );
  }

  rl.close();
});

