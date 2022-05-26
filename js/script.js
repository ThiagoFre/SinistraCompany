const form = document.getElementById('form');
const nome = document.getElementById('nome');
const descricao = document.getElementById('descricao');
const url = document.getElementById('url');
const formulario = document.getElementsByClassName('formulario');
const principal = document.getElementById('principal').innerHTML;

form.addEventListener('submit', (e) => {

let novaSection = document.createElement("section");
let conteudo = `<form action="js/script.js" method="get" id="form">
            
<div class="classImage">
    <img class="imagemSinistra" src="image/Sinistra Company_free-file.png">
</div>

<div class="formItem">
    <label for="nome"></label>
    <input type="text" name="nome" id="nome" placeholder="Nome">
</div>

<div class="formItem">
    <label for="descricao"></label>
    <input type="text" name="descricao" id="descricao" placeholder="Descrição" >
</div>

<div class="formItem">
    <label for="url"></label>
    <input type="url" name="url" id="url" placeholder="URL imagem">
</div>

<div class="formItem">
    <button type="submit" href="#">Submit</button>
</div>



</form>`

novaSection.innerHTML = conteudo;
principal.appendChild(novaSection);

console.log(nova)





})