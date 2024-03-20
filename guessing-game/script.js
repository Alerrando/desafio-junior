const numberInput = document.querySelector("#number");
const response = document.querySelector(".span-response");
const quantAttemptedSpan = document.querySelector(".quant-attempts");
let number = 0;
let quantAttempted = 0;

function handleNumberRandom(){
    const numberRandom = Math.floor(Math.random() * 100) + 1;
    number = numberRandom;
}

function verifyNumber(e){

    if(e.innerHTML !== "Reiniciar"){
        if(numberInput.value > number){
            response.innerHTML = "O número sorteado é menor";
            quantAttempted++;
            return;
        }
    
        if(numberInput.value < number){
            response.innerHTML = "O número sorteado é maior";
            quantAttempted++;
            return;
        }
        
        if(numberInput.value == number){
            response.innerHTML = "Acertou";
            e.innerHTML = "Reiniciar";
            quantAttemptedSpan.innerHTML = `A quantidade de tentativas foi ${quantAttempted}`;
            return;
        }
    }
    
    resetInfos(e);
    handleNumberRandom();
}

function resetInfos(e){
    numberInput.value = "";
    response.innerHTML = "";
    quantAttemptedSpan.innerHTML = "";
    quantAttempted = 0;
    e.innerHTML = "Calcular";
}

window.onload = handleNumberRandom();