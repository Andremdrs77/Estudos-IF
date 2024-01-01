class Tijolo {
    constructor(){
      this.largura = 30;
      this.altura = 20;
      this.cor = 'marrom';
    }
}

function ProcurarAtributo(objeto, propriedade) {
    let encontrado = false

    for (let i = 0; i < Object.keys(objeto).length; i++) {
        if (Object.getOwnPropertyNames(objeto)[i] == propriedade) {
            encontrado = true
            console.log('Atributo encontrado!')
            break
        }
    }

    if (!encontrado) {
        console.log('Atributo não encontrado!')
    }
}

let tijolo1 = new Tijolo()
ProcurarAtributo(tijolo1, 'cor') // Encontrado
ProcurarAtributo(tijolo1, 'cores') // Não encontrado