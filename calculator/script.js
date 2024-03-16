const inputCalculator = document.querySelector('#input');
const buttonCalc = document.querySelectorAll(".button-calc");
const buttonResult = document.querySelector(".button-result");
const buttonDelete = document.querySelector(".button-delete");

for (let index = 0; index < buttonCalc.length; index++) {
    buttonCalc[index].addEventListener("click", (e) => {
        inputCalculator.value += e.target.innerHTML;
    })
}

buttonResult.addEventListener("click", () => {
    try {
        const result = eval(inputCalculator.value);
        inputCalculator.value = result;
        
    } catch (error) {
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "Conta invalida";
        toastContainer.classList.add("true");

        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000)
    }
});
