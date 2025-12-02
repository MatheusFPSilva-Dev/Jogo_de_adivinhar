alert('bem vindo(a) ao jogo!');
let Numero_Secreto = parseInt(Math.random() * 100 + 1);
let palpite 
let tent = 1;
console.log(Numero_Secreto);
while (palpite != Numero_Secreto) {

    palpite = prompt('escolha um numero de 1 a 100!');
    if (palpite < Numero_Secreto){
        alert('errado, o numero é maior que ' + palpite)
        tent++;
    } 
    else if (palpite > Numero_Secreto){
        alert('errado, o numero é menor que ' + palpite)
        tent++;
    }
    
}

if (tent <= 3){
    alert('parabens, voce acertou o numero secreto depois de ' + tent + ' tentativas! você um(a) mestre dos palpites!');
    } else if (tent > 3 && tent <= 6){
        alert('parabens, voce acertou o numero secreto depois de ' + tent + ' tentativas! você até que foi bem!');
    } else if (tent > 6 ){
        alert('parabens, voce acertou o numero secreto depois de ' + tent + ' tentativas! Demorou em kkkkkkkkkk');
    }