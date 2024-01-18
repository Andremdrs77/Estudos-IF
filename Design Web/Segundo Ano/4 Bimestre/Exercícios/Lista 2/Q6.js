class Tijolo {
  constructor(){
    this.largura = 30
    this.altura = 20
  }
}

class TijoloAzul extends Tijolo {
  constructor() {
    super()
    this.cor = 'azul'
  }
}

tijoloAzulInstancia = new TijoloAzul()

function propriedades(objeto) {
  propriedades = []

  propriedades = Object.getOwnPropertyNames(objeto)

  return propriedades
}

console.log('Propriedades:', propriedades(tijoloAzulInstancia));
