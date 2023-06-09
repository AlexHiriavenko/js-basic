## render list

skills: render DOM elements, recursion, setTimeOut/Interval, EventListener
url: https://lambent-bombolone-7652c3.netlify.app/

## Завдання

Реалізувати функцію, яка отримуватиме масив елементів і виводити їх на сторінку у вигляді списку. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

Технічні вимоги:
Створити функцію, яка прийматиме на вхід масив і опціональний другий аргумент parent - DOM-елемент, до якого буде прикріплений список (по дефолту має бути document.body.
кожен із елементів масиву вивести на сторінку у вигляді пункту списку;
Приклади масивів, які можна виводити на екран:

["hello", "world", "Kiev", "Kharkiv", "Odessa", "Lviv"];
["1", "2", "3", "sea", "user", 23];
Можна взяти будь-який інший масив.
Необов'язкове завдання підвищеної складності:
Додайте обробку вкладених масивів. Якщо всередині масиву одним із елементів буде ще один масив, виводити його як вкладений список. Приклад такого масиву:

["Kharkiv", "Kiev", ["Borispol", "Irpin"], "Odessa", "Lviv", "Dnieper"];
Підказка: використовуйте map для обходу масиву та рекурсію, щоб обробити вкладені масиви.
Очистити сторінку через 3 секунди. Показувати таймер зворотного відліку (лише секунди) перед очищенням сторінки.

## Теория

1. Опишіть, як можна створити новий HTML тег на сторінці.
   documen.createElement(tag);

2. Опишіть, що означає перший параметр функції insertAdjacentHTML і опишіть можливі варіанти цього параметра.
   elem.insertAdjacentHTML(where, html) перший параметр вказує куди відносно elem потрібно вставляти html.
   beforebegin - вставить перед elem
   afterbegin - вставить в початок elem
   beforeend - вставить в кінець elem
   afterend - вставить після elem

3. Як можна видалити елемент зі сторінки?
   elem.remove();
