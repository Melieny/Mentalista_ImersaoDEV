var numeroAleatorio = parseInt(Math.random(0) * 101); 
var numeroDeTentativas =0;  

   
    while(tenteAcertar != numeroAleatorio){
        
       if (numeroDeTentativas != 0){ 
        alert(" Voce ja tentou  " + numeroDeTentativas + " vezes " )
        }   

        var tenteAcertar = prompt("Digite um Numero")

        if(tenteAcertar == numeroAleatorio){
            alert(`Voce Acertou!!! O numero secreto era ${numeroAleatorio}`)
            tenteAcertar
        } else if (tenteAcertar > numeroAleatorio){
            alert("Otimo chute.. mas esse numero e maior que o secreto ")
        } else if (tenteAcertar < numeroAleatorio){
            alert("Muito triste... mas esse numero e menor que o secreto")

        } 
        numeroDeTentativas += 1
    }
 

   
     


    