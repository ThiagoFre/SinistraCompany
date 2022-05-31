const principal = document.querySelector('#principal');
const descricao = document.querySelector('#descricao');
const nome = document.querySelector('#nome');
const url = document.querySelector('#url');
const section = document.createElement('section');
principal.appendChild(section);


function addElementos () 
{ 
   let urlValue = url.value;
   let nomeValue = nome.value;
   let descricaoValue = descricao.value;
   
    section.innerHTML += `    
    <section class="formulario1"> 
                            
        <div class="fotoUrlInserida1">
            <img class="imagemSinistra1" src="${urlValue}">
        </div>

        <div class="Nome1">${"Nome: " + " " + nomeValue}

        <div class="descricao1">${"Descrição: " + " " + descricaoValue}</div>
        </div>
        
    </section>`
};