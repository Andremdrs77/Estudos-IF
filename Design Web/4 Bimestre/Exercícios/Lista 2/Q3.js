class Cilindro {
    constructor (raio, altura) {
        this.raio = raio;
        this.altura = altura;
    }

    calcularVolume(volume=0) {
        volume = (Math.PI * this.raio**2 * this.altura).toFixed(2)
        return volume
    }
}

var cilindro = new Cilindro (3, 5)
console.log(`Raio: ${cilindro.raio}, Altura: ${cilindro.altura}, Volume: ${cilindro.calcularVolume()}`)