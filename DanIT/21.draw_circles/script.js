const btnCircle = document.querySelector(".create-circle");

btnCircle.addEventListener("click", createInput);

let form;

function createInput() {
    if (btnCircle.textContent === "прибрати всі кола") {
        const container = document.querySelector(".container");
        container.remove();
        btnCircle.textContent = "намалювати кола";
    } else {
        if (!form) {
            form = document.createElement("form");
            form.innerHTML = `<input type="text" name="diameter" id="diameter" value="60">
    <label for="diameter">for create 100 circles, specify the diameter</label>
    <button class="submit" type="submit">намалювати</button>`;
            btnCircle.after(form);
            if (form) {
                form.addEventListener("submit", createCircle);
            }
        }
    }
}

function createCircle(evt) {
    evt.preventDefault();
    const input = document.querySelector("input");
    const circle = document.createElement("div");
    circle.classList.add("div-circle");
    if (
        input.value === "" ||
        input.value < 10 ||
        input.value > 100 ||
        input.value.toUpperCase() !== input.value.toLowerCase()
    ) {
        alert("enter the number from 10 to 100");
    } else {
        const container = document.createElement("div");
        container.classList.add("container");
        document.body.append(container);
        const circle = document.createElement("div");
        circle.style.width = `${input.value}px`;
        circle.style.height = `${input.value}px`;
        circle.classList.add("mini-circle");
        container.append(circle);
        for (let i = 1; i < 100; i += 1) {
            let copyCircle = circle.cloneNode(true);
            copyCircle.style.backgroundColor = randomColor();
            container.append(copyCircle);
        }
        form.remove();
        form = undefined;
        btnCircle.textContent = "прибрати всі кола";
        if (container) {
            container.addEventListener("click", delCircle);
        }
    }
}

function randomColor() {
    const rc = () => Math.round(255.0 * Math.random()).toString();
    let r = rc();
    let g = rc();
    let b = rc();
    return `rgb(${r}, ${g}, ${b})`;
}

function delCircle(evt) {
    let target = evt.target;
    if (target.matches(".mini-circle")) {
        target.remove();
    }
}
