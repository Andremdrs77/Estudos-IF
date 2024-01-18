var agora = new Date();
var ano = agora.getFullYear();
var natal = new Date(ano, 11, 25); // 11 representa dezembro (janeiro é 0)

if (agora > natal) {
  natal.setFullYear(ano + 1);
}

var diferencaMs = natal - agora;

var diferencaDias = Math.ceil(diferencaMs / (1000 * 60 * 60 * 24));

console.log('Faltam ' + diferencaDias + ' dias para o Natal.');