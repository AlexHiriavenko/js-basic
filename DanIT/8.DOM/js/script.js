// 1) Найти все параграфы на странице и установить цвет фона #ff0000

const paragraphs = document.querySelectorAll("p");
for (const paragraph of paragraphs) {
    paragraph.style.backgroundColor = "#ff0000";
}

// 2) Найти элемент с id = "optionsList".Вывести в консоль.Найти родительский элемент и вывести в консоль.
//    Найти дочерние ноды, если они есть, и вывести в консоль названия и тип нод.

const optionsList = document.getElementById("optionsList");
console.log(optionsList);

const parentOptionsList = optionsList.parentElement;
console.log(parentOptionsList);
console.log("\n");
const childNodesOptionsList = optionsList.childNodes;
for (const childNode of childNodesOptionsList) {
    console.log(`Node name: ${childNode.nodeName}, Node type: ${childNode.nodeType}`);
}

//3) Установите в качестве контента элемента с классом testParagraph следующий параграф <p>This is a paragraph</p>

const contentTestParagraph = document.getElementById("testParagraph").innerHTML = `<p>This is a paragraph</p>`;

//4) Получить элементы <li>, вложенные в элемент с классом main-header и вывеcти их в консоль. Каждому из элементов присвоить новый класс nav-item.
console.log("\n");

const liMainHeader = document.querySelectorAll(".main-header li");
for (const li of liMainHeader) {
    li.classList.add("nav-item");
    console.log(li);
}

// 5) Найти все элементы с классом section-title. Удалить этот класс у элементов.
console.log("\n");

const elementsSectionTitleClass = document.querySelectorAll(".section-title");
for (const el of elementsSectionTitleClass) {
    el.classList.remove("section-title");
}
console.log(elementsSectionTitleClass);