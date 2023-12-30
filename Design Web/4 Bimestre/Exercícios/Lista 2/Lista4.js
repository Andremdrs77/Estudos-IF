class Circulo {
    constructor (raio) {
        this.raio = raio;
    }

    calcularPerimetro() {
        return (2 * Math.PI * this.raio).toFixed(2)
    }

    calcularArea() {
        return (Math.PI * this.raio**2).toFixed(2)
    }
}

var circulo = new Circulo(1)
console.log(`Raio: ${circulo.raio}, Perimetro: ${circulo.calcularPerimetro()}, Area: ${circulo.calcularArea()}`)