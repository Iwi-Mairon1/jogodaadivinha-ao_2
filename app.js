let numeroSecreto = gerarNumeroAleatorio();

function exibirTextoNaTela(tag, texto){
    let campo = document.querySelector(tag);
    campo.innerHTML = texto;
}

exibirtextoNaTela('h1','jogo do numero secreto');
exibirTextoNaTela('p','escolha um numero entre 1 a 10');

function verificarChute(){
    let chute = document.querySelector('input').value
    console.log(chute == numerosecreto )
}

function gerarNumeroAleatorio(){
    return prseInt(Math.random() *10 + 1);

}

