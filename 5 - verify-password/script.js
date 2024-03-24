const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("keyup", (e) => {
    verifyPassword(e.target);
})

function verifyPassword(e){
    if(e.value.length === 0){
        e.style.border = "1px solid #fff";
        return;
    }

    if(e.value.length < 8 || !/[A-Z]/.test(e.value) || !/[a-z]/.test(e.value) || !/\d/.test(e.value)){
        e.style.border = "2px solid #f00";
    } else {
        e.style.border = "1px solid #fff";
    }
}

function handleButton(){
    if(e.value.length === 0){
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "Por favor, insira uma senha.";
        toastContainer.classList.add("true");

        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000);
        return;
    }

    if(verifyPassword(passwordInput)){
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "A senha deve ter no mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minúscula e um número.";
        toastContainer.classList.add("true");

        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000);
    }
}