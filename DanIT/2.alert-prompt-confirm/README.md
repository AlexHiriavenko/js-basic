# alert prompt confirm

skills: dialog functions, while, if-else

ТЗ:
Реалізувати просту програму на Javascript, яка взаємодіятиме з користувачем за допомогою модальних вікон браузера - alert, prompt, confirm.

Отримати за допомогою модального вікна браузера дані користувача: ім'я та вік.
Якщо вік менше 18 років - показати на екрані повідомлення: You are not allowed to visit this website.
Якщо вік від 18 до 22 років (включно) – показати вікно з наступним повідомленням: Are you sure you want to continue? і кнопками Ok, Cancel. Якщо користувач натиснув Ok, показати на екрані повідомлення: Welcome, + ім'я користувача. Якщо користувач натиснув Cancel, показати на екрані повідомлення: You are not allowed to visit this website.
Якщо вік більше 22 років – показати на екрані повідомлення: Welcome, + ім'я користувача.
Обов'язково необхідно використовувати синтаксис ES6 (ES2015) для створення змінних.
Після введення даних додати перевірку їхньої коректності. Якщо користувач не ввів ім'я, або при введенні віку вказав не число - запитати ім'я та вік наново (при цьому дефолтним значенням для кожної зі змінних має бути введена раніше інформація).

Теоретичні питання

1. Які існують типи даних у Javascript?
2. У чому різниця між == і ===?
3. Що таке оператор?

Відповідь:

1. є 8 типів даних : number, string, boolean, bigint, symbol, null, undefined, object.

2. це оператори, суворе та не суворе порівняння. Різниця полягає у тому що оператор == порівнює на порівняння, а === на ідентичність.
   Оператор === (на відміну від ==) не наводить обидва значення до одного типу.

3. Оператор це символ, котрий виконує операцію над одним чи декількома операндами. Бувають опeрaтори математичні, логічні та інші.
   В залежності від кількості оперендів оператори можуть бути унарними, бінарними, та умовний тернарний оператор.