//let titulo = document.querySelector('h1');
//titulo.innerHTML = 'jogo do numero secreto';

let paragrafo = document.querySelector('p');
paragrafo.innerHTML = 'escolha um numero entre 1 a 10';

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirtextoNaTela('h1','jogo do numero secreto');
exibirTextoNaTela('p','escolha um numero entre 1 a 10');

function verificarChute(){
    comsole.log('o botao foi clicado');
}

function gerarNumeroAleatorio(){
    return prseInt(Math.random() *10 + 1);

}

