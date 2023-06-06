const btns = document.querySelectorAll(".btn-wrapper .btn");
document.addEventListener("keyup", highlight);

function highlight(evt) {
    btns.forEach(btn => {
        if (btn.textContent.toUpperCase() === evt.key.toUpperCase() ||  // только для латиницы и спец клавиши Enter;
            btn.textContent === evt.code.slice(3)) {                    //задля введення будь якою мовою, якщо треба приводити до латиниці;
            let prevActive = document.querySelector(".active");
            if (prevActive) {
                prevActive.classList.remove("active")
            }
            btn.classList.add("active")
        }
    });
}