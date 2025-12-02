
let numerosexclusos = [];
let numeroSecreto = numeroAleatorio();
let tents = 1;
let rodadas = 1;



function textoDasTags(tag, texto){
   let digitar = document.querySelector(tag);
       digitar.innerHTML = texto;
}

textoDasTags('h1', 'jogo secreto!');
textoDasTags('p', 'escolha um numero entre 1 e 100!');
textoDasTags('#rodada', 'n° rodadas: ' + rodadas);


function verificarChute(){
    let chute = document.querySelector('input').value;
    let menstents = tents > 1 ? 'tentativas' : 'tentativa';

        if (chute == numeroSecreto){
           textoDasTags('h1', 'voce acertou!');
           textoDasTags('p', 'você foi o vencedor com ' + tents + ' ' + menstents);
           console.log(numerosexclusos);
           document.getElementById('reiniciar').removeAttribute('disabled');
           
         } else {
              if (chute > numeroSecreto){
                 textoDasTags('h1', 'voce errou!');
                 textoDasTags('p', 'o numero secreto é menor que ' + chute);
                 limparinput();
                 
         } else {
             textoDasTags('h1', 'voce errou!');
             textoDasTags('p', 'o numero secreto é maior que ' + chute);
             limparinput();
             
         } 
            if (chute < 1 || chute > 10){
               textoDasTags('h1', 'Muito burro kkkkkk');
               textoDasTags('p', 'digite um numero entre 1 e 10!');
               limparinput();
              
               
            }
         
}


    console.log(chute == numeroSecreto);
    tents++;
    
     
}

function limparinput(){
    document.querySelector('input').value = '';
}

function numeroAleatorio() {
    let nAleatorio = parseInt(Math.random() * 100) + 1;
    if (numerosexclusos.length == 100){
    numerosexclusos = [];
}
    if (numerosexclusos.includes(nAleatorio)) {
        return numeroAleatorio();
} else {
    numerosexclusos.push(nAleatorio);
    return nAleatorio;
}

}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    tents = 1;
    textoDasTags('h1', 'jogo secreto!');
    textoDasTags('p', 'escolha um numero entre 1 e 10!');
    limparinput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    rodadas++;
    textoDasTags('#rodada', 'n° rodadas: ' + rodadas);
    
}