const inputCalculator = document.querySelector('#input');
const buttonCalc = document.querySelectorAll(".button-calc");

for (let index = 0; index < buttonCalc.length; index++) {
    buttonCalc[index].addEventListener("click", function(e) {
        console.log(e);
    })
}