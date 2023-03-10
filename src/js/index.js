/*
OBJETUVO 1 QUANDO CLICARMOS NA SETA DE AVANÇAR TEMOS Q MOSTRAR O PROXIMO CARTAO DA LISTA
   PASSO /1/ DAR UM JEITO DE PEGAR P ELEMENTO HTML DA SETA AVANÇAR
PASSO /2/ DAR UM JEITO DE IDENTIFICAR O VLIQUE DO USUARIO NA SETA AVANÇAR
PASSO /3/ FAZER APARECER O PROXIMO CARTAO DA LISTA
PASSO /4/ BUSCAR O CARTAO QUE ESTA SELECIONADO E ESCONDER

OBJETIVO 2 QUANDO CLICARMOS NA SETA VOLTAR TEMOS Q MOSTRAR O CARTAO ANTERIOR DA LISTA
PASSO /1/ DAR UM JEITO DE PEGAR P ELEMENTO HTML DA SETA VOLTAR
PASSO /2/ DAR UM JEITO DE IDENTIFICAR O VLIQUE DO USUARIO NA SETA VOLTAR
PASSO /3/ FAZER APARECER O CARTAO ANTERIOR DA LISTA
PASSO /4/ BUSCAR O CARTAO QUE ESTA SELECIONADO E ESCONDER*/


const btnAvancar = document.getElementById("btn-avancar");
const btnVoltar = document.getElementById("btn-voltar");
const cartoes = document.querySelectorAll(".cartao");
let cartaoAtual = 0;

function esconderCartaoSelecionado(){
   const cartaoSelecionado = document.querySelector(".selecionado");
   cartaoSelecionado.classList.remove("selecionado");
}
function mostrarCartao(indiceCartao){
   cartoes[indiceCartao].classList.add("selecionado");
}


btnAvancar.addEventListener("click", function () {
   if(cartaoAtual === cartoes.length - 1) return;

   esconderCartaoSelecionado();

   cartaoAtual++;
   mostrarCartao(cartaoAtual);
})

btnVoltar.addEventListener('click', function () {
   if(cartaoAtual === 0) return;

   esconderCartaoSelecionado()

   cartaoAtual--;
   mostrarCartao(cartaoAtual);
})