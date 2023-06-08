"use strict";

// Функція на вхід приймає три параметри:

//  1 ) масив із чисел, що становить швидкість роботи різних членів команди. 
// Кількість елементів у масиві означає кількість людей у команді. 
// Кожен елемент означає скільки стор поінтів (умовна оцінка складності виконання завдання) 
// може виконати даний розробник за 1 день.

const workSpeedEmployee = [3, 2, 2, 1];
// предположим, что команда состоит из 4х разрабов: 1 синьор(3 с.п./день), 2 мидла(по 2 с.п./день), 1 джуниор(1 с.п./день);  

// 2) масив з чисел, який є беклогом (список всіх завдань, які необхідно виконати). 
// Кількість елементів у масиві означає кількість завдань у беклозі. 
// Кожне число в масиві означає кількість сторі поінтів, необхідні для виконання даного завдання.

const backlog = [18, 12, 12, 35, 11, 14, 14, 25, 27];

// 3) Дата дедлайну (об'єкт типу Date)
const deadlineDate = new Date(2023, 2, 6, 15, 0);
const deadlineDateTest = new Date(2023, 1, 26, 15, 0);

//После выполнения, функция должна посчитать, успеет ли команда разработчиков выполнить все задачи из беклога
//до наступления дедлайна (работа ведется начиная с сегодняшнего дня). Если да, вывести на экран сообщение:
//Все задачи будут успешно выполнены за ? дней до наступления дедлайна!. Подставить нужное число дней в текст.
//Если нет, вывести сообщение Команде разработчиков придется потратить дополнительно ? часов после дедлайна,
// чтобы выполнить все задачи в беклоге
//Работа идет по 8 часов в день по будним дням
console.log("дата дедлайна");
console.log(deadlineDate.toDateString());
console.log("\nсейчас");
console.log(new Date().toDateString());


function deadline(workSpeed, backlog, deadline) {

    const pointsByOneDay = workSpeed.reduce((acc, value) => acc += value);
    console.log("\nкол-во поинтов за 1 день" + "  " + pointsByOneDay);
    
    const allPoints = backlog.reduce((acc, value) => acc += value);
    console.log("общая сложность всех заданий" + "  " + allPoints);
    
    const quantDaysAlready = allPoints / pointsByOneDay;
    console.log("количество рабочих дней, за которое сделают все задания" + "  " + quantDaysAlready);
    
    const today = new Date();
    
    let dayAlready = new Date(today.setMilliseconds((quantDaysAlready * 24) * 60 * 60 * 1000));
    console.log("\nдень в который будет выполнена задача, ЕСЛИ работать БЕЗ выходных");
    console.log(dayAlready.toDateString());

    for (let i = new Date(); i <= dayAlready; i.setDate(i.getDate() + 1)) {             // цикл от сегодня до дняОК (без выходных) 
        if (new Date(i).getDay() === 0 || new Date(i).getDay() === 6) {                 // проверяем каждый день, если это СБ или ВС
            dayAlready.setDate(dayAlready.getDate() + 1);                               // увеличиваем деньОК на один день 
        }
    }
    if (dayAlready.getDay() === 6) {                                                    // если после цикла в итоге деньOK попал на сб 
        dayAlready.setDate(dayAlready.getDate() + 2);                                   // то увеличиваем деньОК на 2 дня
    }  
    if (dayAlready.getDay() === 0) {                                                    // если после цикла в итоге деньOK попал на вс 
        dayAlready.setDate(dayAlready.getDate() + 1);                                   // то увеличиваем деньОК на 1 день
    }

    console.log("\nдень выполнения всех задач c учетом выходных");
    console.log(dayAlready.toDateString());
    
    if (dayAlready < deadline) {
        console.log(`\nВсе задачи будут успешно выполнены за ${getNumberOfDays(dayAlready, deadline)} дней до наступления дедлайна! 
        - Хмм вы в это верите? 
        - Конечно!, скрам и еджайл нам помогут! - Ага, я думаю вам поможет только чтение Стива Макконела (совершенный код) и ...
я тут подумал возьмите еще одного трейни на всякий случай, берите из DAN.IT, там они нормальные
        - А зарплата?
        - Чтоб с голоду не помер пока кодит`);
    }
    if (dayAlready > deadline) {
        console.log(`\nКоманде разработчиков придется потратить дополнительно ${Math.abs(getNumberOfDays(dayAlready, deadline) * 8)} 
        рабочих часов после дедлайна, чтобы выполнить все задачи в беклоге`);
    }
}

deadline(workSpeedEmployee, backlog, deadlineDate); 

function getNumberOfDays(date1, date2) {
    // One day in milliseconds 
    const oneDay = 24 * 60 * 60 * 1000;
    // Calculating the time difference between two dates 
    const diffInTime = date2.getTime() - date1.getTime();
    // Calculating the number of days between two dates
    const diffInDays = Math.round(diffInTime / oneDay); 
    
    return diffInDays;  
}