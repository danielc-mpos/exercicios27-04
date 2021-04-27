
function calcular(){

    //Capturando os campos
    var txtNome = document.getElementById('txtNome');
    var txtAv1 = document.getElementById('txtAv1');
    var txtAv2 = document.getElementById('txtAv2');
    var txtAv3 = document.getElementById('txtAv3');
    var outResultado = document.getElementById('outResultado');
    
    

    //Caixas
    var nome = txtNome
    var notaAv1 = Number(txtAv1.value);
    var notaAv2 = Number(txtAv2.value);
    var notaAv3 = Number(txtAv3.value);

    // Menor que 4 = reprovação
        
        //if( notaAv1 < 4 && notaAv2 < 4 && notaAv3 > 4){
        //outResultado.textContent = (`Fulano, você foi reprovado`);   
        //}

        //if(notaAv1 < 4 && notaAv3 < 4 && notaAv3 > 4){
        //outResultado.textContent = (`Fulano, você foi reprovado`);
        //}

        //if(notaAv2 <4 && notaAv3 <4 && notaAv1 > 4){
        //outResultado.textContent = (`Fulano, você foi reprovado`);
        //}



    //Verificação

        if(notaAv3 < notaAv1 || notaAv2 ){
            var media = (notaAv1 + notaAv2) / 2;
        }
        if(notaAv3 > notaAv2){
            var media = (notaAv1 + notaAv3) / 2;
        }
        if(notaAv3 > notaAv1){
            var media = (notaAv2 + notaAv3) / 2;
        }
        

    //Resultado

        if(media >= 6){
            outResultado.textContent = (`Parabéns Fulano, você foi aprovado`);
        }

        if(media < 6){
            outResultado.textContent = (`Fulano, você foi reprovado`);
            }
            
            

            
            
        
        






    //Exibir o resultado
    
    //outResultadoPositivo.textContent = `Parabéns ${nome}, você foi aprovado`;
    //outResultadoNegativo.textContent = `${nome}, você foi reprovado`;


}

var btnVerificar = document.getElementById('btnVerificar');
btnVerificar.addEventListener('click', calcular);