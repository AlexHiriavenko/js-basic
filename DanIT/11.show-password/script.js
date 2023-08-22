"use strict";
const form = document.querySelector(".password-form"); 
form.addEventListener("click", onEyeClick);         
function onEyeClick(evt) {                      
        let target = evt.target;                                       
        if (target.tagName === "I") {                        
            const input = target.previousElementSibling;    
            if (target.matches(".fa-eye-slash")) {                   
                target.classList.replace("fa-eye-slash", "fa-eye");    
                input.setAttribute("type", "text");           
            } else {                                               
                target.classList.replace("fa-eye", "fa-eye-slash");    
                input.setAttribute("type", "password");               
            }
        }
}


form.addEventListener("submit", vailidate);                                  
const message = document.createElement("p");                        
function vailidate(evt) {
    evt.preventDefault();                                           
    const enterPswrd = document.querySelector("[data-pswrd]");      
    const cnfrmPswrd = document.querySelector("[data-confirm]");    
    if (enterPswrd.value === cnfrmPswrd.value && enterPswrd.value.trim() !== "") {      
        enterPswrd.value = ""; cnfrmPswrd.value = ""; message.textContent = "";                                     //к дефолтному состоянию
        document.querySelectorAll(".password-form i").forEach(i => i.classList.replace("fa-eye", "fa-eye-slash"))   //к дефолтному состоянию
        document.querySelectorAll(".password-form input").forEach(input => input.setAttribute("type", "password")); //к дефолтному состоянию
        setTimeout(() => alert("You are welcome!"), 200);                           
    } else {                                                        
        message.textContent = "Потрібно ввести однакові значення";   
        message.style.color = "red";                                
        let i = document.querySelector("i[data-confirm]");
        i.after(message);               
    }
}


