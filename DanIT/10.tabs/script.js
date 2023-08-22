"use strict"

// находим список с меню и список с контентом
const tabs = document.querySelector(".tabs");                       
const tabsContent = document.querySelector(".tabs-content");

// идея такая - начальное состояние всех li c контентом будет display: none, кроме того li, который соответствует меню с классом active;
function isVisibleContent() {
    [...tabsContent.children].forEach(element => {            //пробегаемся по всем li списка tabsContent через ForEach;   
    let activeLi = document.querySelector(".active");         // в меню tabs находим именно тот li, который сейчас с классом active;
        if (element.dataset.tab === activeLi.dataset.tab) {   // если data-set пункта меню tabs и пункта списка tabsContent совпадают, 
            element.style.display = "block";                  // значит этот контент и должен отображаться на странице 
        } else {                                              // все остальные 
            element.style.display = "none";                   // не будут отображаться на странице.
        }
    });
}

isVisibleContent();

tabs.addEventListener("click", onClickTabs);                 // сделаем динамическое изменение контента при клике на соответствующий пункт меню

function onClickTabs(event) {
    // тот пункт меню, который выбрал пользователь получает класс active, сответственно у предыдующего пункта удаляем этот класс 
    let target = event.target;
    let oldActive = document.querySelector(".active");
    oldActive.classList.remove("active");
    target.closest("li").classList.add("active");

    // аналогично тому что было выше сравниваем пункт списка с контентом с пунктом меню, который выбрал пользователь. 
    [...tabsContent.children].forEach(element => {
        if (target.dataset.tab === element.dataset.tab) {    
        element.style.display = "block";
        } else {element.style.display = "none";}
    });
}


