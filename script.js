const pass = document.querySelector("#pass");
const confirmPass = document.querySelector("#confirmPass");
const confButton = document.querySelector(".confButton");

confButton.addEventListener("click", ()=>{
    if(pass.value !== confirmPass.value){
        alert("Passwords doesn't match!")
    }
})
