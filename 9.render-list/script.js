const arr = [
    "создать DOM элемент/узел",
    ["document.createElement(tag)", "document.createTextNode(text)"],
    "найти DOM элемент(ы)",
    [
        "document.querySelector()",
        "document.querySelectorAll()",
        "document.getElementById()",
        "document.getElementsByClassName()",
        "document.getElementsByTagName()",
    ],
    "вставить DOM элемент в HTML",
    [
        "element.insertAdjacentHTML()",
        ["beforebegin", "afterbegin", "beforeend", "afterend"],
        "appendChild(newNode)",
        "insertBefore(newNode, referenceNode)",
        ".append(), prepend(), .after() and .before()",
    ],
    "удалить DOM элемент",
    ["element.remove()"],
];

const btn = document.getElementById("btn");
btn.disabled = true;

let parentElemet = document.querySelector(".ul-insert-div");

function createList(array, parent = document.body) {
    const ul = document.createElement("ul");
    ul.classList.add("remove");
    parent.append(ul);
    array.map((el) => {
        if (!Array.isArray(el)) {
            const li = document.createElement("li");
            li.textContent = el;
            ul.append(li);
        } else {
            createList(el, ul);
        }
    });
}

createList(arr, parentElemet);

function deleteList() {
    let timer = document.createElement("p");
    document.body.append(timer);
    let i = 3;
    let seconds = setInterval(() => {
        timer.innerText = "Таймер " + i--;
    }, 1000);
    setTimeout(() => {
        document.querySelector(".remove").remove();
        timer.innerText = "Do you want to return the list?\n Press button";
        clearInterval(seconds);
        btn.disabled = false;
    }, 4000);
}

deleteList();

btn.addEventListener("click", () => {
    createList(arr, parentElemet);
    btn.remove();
    timer = document.querySelector("p");
    timer.innerHTML = "надеюсь никогда не попадать в черный список.Поэтому мой список белый :)";
});
