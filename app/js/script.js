

function secreto(){
    let numeroSecreto = parseInt( Math.random(0) * 100 )
    let chute = prompt('Digite um numero entre 0 e 1000')

    while (chute != numeroSecreto) { 
        // se o chute for igual ao numero secreto
        if(chute == numeroSecreto ){
            alert(` Parabens!!!! o numero secreto era ${numeroSecreto}`)
        } else if(chute  > numeroSecreto){
            alert(' Errou... o Numero e Menor')
        } else if ( chute < numeroSecreto){
            alert('Errou... o Numero e Maior')
        }
        

    }
}


secreto();


