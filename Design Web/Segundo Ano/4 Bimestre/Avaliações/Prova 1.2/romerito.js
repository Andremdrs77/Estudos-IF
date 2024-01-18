//adicionar cards ao elementos

//criar uma âncora
let a = document.createElement('a');
a.innerText = 'Adicinar Card';
a.setAttribute('id', 'botao');

//adicionar ao li
let li = document.getElementById('li')
li.innerHTML = a.outerHTML;

//adicionar evento para dicionar cards
let botao = document.getElementById('botao');
botao.addEventListener ('click', (event)=>{
   
   let content = document.getElementsByClassName('content')[0];

   let elem = document.createElement('div');
   elem.classList.add('card');
   content.append(elem);
}); 

//limpar o container

const limpar = document.getElementById('limpar')
limpar.addEventListener('click', (event)=>{
    const content = document.getElementsByClassName('content')[0];
    content.innerHTML = '';
});


// ----- parte 2 da prova ----- //

const sideButton = document.getElementsByTagName('button')[0];

const ul = document.createElement('ul');
const l1 = document.createElement('li');
const l2 = document.createElement('li');

l1.setAttribute('id', 'rounded');
l2.setAttribute('id', 'color');

l1.textContent = 'Arredondar bordas';
l2.textContent = 'Mudar cores';
l1.style.padding = '20px';
l2.style.padding = '20px';

const sidebar = document.getElementsByClassName('sidebar')[0];
sidebar.appendChild(l1);
sidebar.appendChild(l2);    


l1.addEventListener ('click', ()=>{
    const div = document.getElementsByClassName('content')[0];
    for (let i = 0; i < div.children.length; i++) {
        const ele = div.children[i];        
        ele.style.borderRadius = '25px';
    }    
});

l2.addEventListener('click', ()=>{
    const div = document.getElementsByClassName('content')[0];
    for (let i = 0; i < div.children.length; i++) {
        const ele = div.children[i];        
        ele.style.backgroundColor = 'blue';
    }    
});

