let capInicial= 100;
let taxaM= 10;
let tempoM= 10;
let aporteM= -26.379748;

let montante=capInicial;
let contador=1;

// juros compostos com aplicações mensais 
function calcJurosC() {
    while(contador<=tempoM){
        if(montante>=0){
            montante= montante*(100+taxaM)/100;
            montante= montante + aporteM;
        }else{
            montante = montante + aporteM;
        }
        contador++;
    }
    console.log("Valor em "+ tempoM +" meses = "+ (Math.round((montante)*100))/100);
}

