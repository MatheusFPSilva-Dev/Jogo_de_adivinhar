
let nivel = 10;
let numerosexclusos = [];
let numeroSecreto = numeroAleatorio();
teclas();
let tents = 1;
let rodadas = 1;
let textLevel = "10";


textoDasTags('h1', 'jogo secreto!');
textoDasTags('p', 'escolha um numero entre 1 e ' + textLevel);
textoDasTags('#rodada', 'n° rodadas: ' + rodadas);



function textoDasTags(tag, texto){
   let digitar = document.querySelector(tag);
       digitar.innerHTML = texto;
}

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
            if (chute < 1 || chute > nivel){
               textoDasTags('h1', 'Digite um numero valido!');
               textoDasTags('p', 'digite um numero entre 1 e ' + textLevel,);
               limparinput();
              
               
            }
         
}


    console.log(chute == numeroSecreto);
    tents++;
    
     
}

function reiniciarJogo(){
    numeroSecreto = numeroAleatorio();
    tents = 1;
    textoDasTags('h1', 'jogo secreto!');
    textoDasTags('p', 'escolha um numero entre 1 e ' + textLevel,);
    limparinput();
    document.getElementById('reiniciar').setAttribute('disabled', true);
    rodadas++;
    textoDasTags('#rodada', 'n° rodadas: ' + rodadas);
    
}

function numeroAleatorio() {
    
    let nAleatorio = parseInt(Math.random() * nivel) + 1;
    if (numerosexclusos.length == nivel){
    numerosexclusos = [];
}
    if (numerosexclusos.includes(nAleatorio)) {
        return numeroAleatorio();
} else {
    numerosexclusos.push(nAleatorio);
    return nAleatorio;
}
}

function nivelFacil(){
    textLevel = '10';
    nivel = 10;
    rodadas = 0;
    reiniciarJogo();

}

function nivelmedio(){
    textLevel = '50';
    nivel = 50;
    rodadas = 0;
    reiniciarJogo();
}

function niveldificil(){
    textLevel = '100';
    nivel = 100;
    rodadas = 0;
    reiniciarJogo();
}


function teclas(){
    let BtnEnter = document.addEventListener('keydown',function(enter){
    if(enter.key == 'Enter'){
        verificarChute();
    }
});
}

function limparinput(){
    document.querySelector('input').value = '';
}

