class Tijolo {
    constructor(){
      this.largura = 30;
      this.altura = 20;
      this.cor = 'marrom';
    }
  }
  
function listar(objeto) {
var lista = [];

const keys = Object.keys(objeto);
const values = Object.values(objeto);

for (let i = 0; i < keys.length; i++) {
    const aux = [];
    aux.push(keys[i]);
    aux.push(values[i]);
    lista.push(aux);
}

return lista;
}
  
let tijolo1 = new Tijolo();
  
console.log(listar(tijolo1));
  