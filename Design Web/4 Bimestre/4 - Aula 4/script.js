function mostrarHora() {
    const span = document.getElementById('clock')
    let now = new Date()
    span.innerText = now.toLocaleTimeString()
}

mostrarHora()

setInterval(mostrarHora, 1000)