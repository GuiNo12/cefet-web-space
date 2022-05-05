// Faça o exercício dos PARÁGRAFOS aqui
// Este arquivo AINDA NÃO ESTÁ INCLUÍDO no arquivo HTML

//Expandir e recolher parágrafos com clique no botão expandir-retrair
let btnExpandir = document.querySelectorAll('.botao-expandir-retrair');
for(let pEl of btnExpandir){
    pEl.addEventListener('click', expandir);
}
function expandir(e){
    let pEl = e.currentTarget;
    let p = pEl.parentElement;
    //adicionar classe espandido em cada parágrafo
    p.classList.toggle('expandido');
}