let p = {nome:"romerito"}

class pessoa{
    constructor(nome) {
        this.nome = nome
    }
}

let p2 = new pessoa("romerito")
console.log(p2)
console.log(typeof(p2))

console.log(p instanceof pessoa)