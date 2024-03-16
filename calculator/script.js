const inputCalculator = document.querySelector('#input');
const buttonCalc = document.querySelectorAll(".button-calc");
const buttonResult = document.querySelector(".button-result");
const buttonDelete = document.querySelector(".button-delete");

for (let index = 0; index < buttonCalc.length; index++) {
    buttonCalc[index].addEventListener("click", (e) => {
        inputCalculator.value += e.target.innerHTML;
    })
}
