const passwordInput = document.querySelector("#password");

passwordInput.addEventListener("keyup", (e) => {
    verifyPassword(e.target);
})

function verifyPassword(e){
    if(e.value === 0){
        e.style.border = "1px solid #fff"
    }

    if(e.value.length < 8 || /^[A-Z]*$/.test(e.value) || /^[a-z]*$/.test(e.value) || !/.*[0-9].*/.test(e.value)){
        e.style.border = "2px solid #f00";
        return true;
    }
    
    e.style.border = "1px solid #fff"
}

function handleButton(){
    if(verifyPassword(passwordInput)){
        const toastContainer = document.querySelector(".toast-container");
        const toastMessage = document.querySelector(".toast-message");
        toastMessage.innerHTML = "A senha tem que ter no mínimo 8 caracteres, pelo menos uma letra maiúscula, uma letra minuscula e um número";
        toastContainer.classList.add("true");
    
        setTimeout(() => {
            toastContainer.classList.remove("true");
        }, 5000)
    }
}