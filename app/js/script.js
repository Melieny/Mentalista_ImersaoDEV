const numeroAleatorio = parseInt(Math.random(0) * 101); 
const numeroDeTentativas = 0;  

   
    while(tenteAcertar != numeroAleatorio){

        var tenteAcertar = prompt("Digite um Numero")

        if(tenteAcertar == numeroAleatorio){
            alert(`Voce Acertou!!! O numero secreto era ${numeroAleatorio}`)
            numeroDeTentativas += 1;
        } else if (tenteAcertar > numeroAleatorio){
            alert("Otimo chute.. mas esse numero e maior que o secreto ")
        } else if (tenteAcertar < numeroAleatorio){
            alert("Muito triste... mas esse numero e menor que o secreto")

        } else if (numeroDeTentativas != 0){ 
            alert(`Voce ja tentou ${numeroDeTentativas}`)
        }   
    }

    numeroDeTentativas += 1;
     


    