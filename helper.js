const grupo1 = require('./grupo1');
const { nomeDoBanco, removeCaracter, formatarCPF } = require('./grupo1');

console.log(grupo1.nomeDoBanco(033));
console.log(grupo1.removeCaracter("190.012.840-35"));
console.log(grupo1.formatarCPF("19001284035"));
console.log(grupo1.formatarAgencia("12345"));
console.log(grupo1.formatarConta("1234563"));