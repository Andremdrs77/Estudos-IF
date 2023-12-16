function validar(){

    matricula = document.getElementById('matricula')
    senha = document.getElementById('senha')
    nome = document.getElementById('nome')
    email = document.getElementById('email')

    labelmatricula = document.getElementById('labelmatricula')
    labelsenha = document.getElementById('labelsenha')
    labelnome = document.getElementById('labelnome')
    labelemail = document.getElementById('labelemail')

    if (isNaN(matricula.value) || matricula.value == ''){
        labelmatricula.innerHTML = 'Valor inválido'
        labelmatricula.style.color = 'red'
    } else{
        labelmatricula.innerHTML = ''
    }
    
    if (email.value.endsWith('@ifrn.edu.br') == false || email.value == ''){
        labelemail.innerHTML = 'Valor inválido'
        labelemail.style.color = 'red'
    } else{
        labelemail.innerHTML = ''
    }
    
    if (senha.value.length < 10 || senha.value == ''){
        labelsenha.innerHTML = 'Valor inválido'
        labelsenha.style.color = 'red'
    } else{
        labelsenha.innerHTML = ''
    }
    
    if (nome.value == ''){
        labelnome.innerHTML = 'Valor inválido'
        labelnome.style.color = 'red'
    } else{
        labelnome.innerHTML = ''
    }
}

botao = document.getElementById('enviar')
botao.addEventListener('click', validar)