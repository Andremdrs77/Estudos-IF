class Tijolo {
    constructor(){
      this.largura = 30;
      this.altura = 20;
      this.cor = 'marrom';
    }
  }


function trocarChavesValores(objeto) {
    const novoObjeto = {};
  
    for (const chave in objeto) {
      if (objeto.hasOwnProperty(chave)) {
        novoObjeto[objeto[chave]] = chave;
      }
    }
  
    return novoObjeto;
  }
  

const objetoOriginal = {
chave1: 'valor1',
chave2: 'valor2',
chave3: 'valor3'
};

tijolo1 = new Tijolo

const olojiT = trocarChavesValores(tijolo1)
console.log(olojiT)
