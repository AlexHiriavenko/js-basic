# Objects

skills: obj key-value, obj methods, setter, Object.defineProperty, try-catch

Завдання
Реалізувати функцію створення об'єкта "юзер".

Технічні вимоги:

-   Написати функцію createNewUser(), яка буде створювати та повертати об'єкт newUser.
    При виклику функція повинна запитати ім'я та прізвище.
    Використовуючи дані, введені юзером, створити об'єкт newUser з властивостями firstName та lastName.
    Додати в об'єкт newUser метод getLogin(), який повертатиме першу літеру імені юзера, з'єднану з прізвищем, все в нижньому регістрі (наприклад, Ivan Kravchenko → ikravchenko).
    Створити юзера за допомогою функції createNewUser(). Викликати у цього юзера функцію getLogin(). Вивести у консоль результат виконання функції.

-   Необов'язкове завдання підвищеної складності
    Зробити так, щоб властивості firstName та lastName не можна було змінювати напряму. Створити функції-сеттери setFirstName() та setLastName(), які дозволять змінити дані властивості.

Питання:

1. Опишіть своїми словами, що таке метод об'єкту
2. Який тип даних може мати значення властивості об'єкта?
3. Об'єкт це посилальний тип даних. Що означає це поняття?

Відповідь:

1. Це функція, яка є властивістю об'єкта, чи можна сказати навпаки це власивість об'єкта, значенням якої є функція.
2. значення властивості об'єкта може мати будь який тип даних JS.
3. наприклад коли ми змінної присвоюємо значенния іншої змінної з типом об'єкт, то дані не копіюються у цю змінну, ця змінна не містить в собі усіх даних об'єкта , а містить лише посилання на місце в пам'яті де розміщуються реальні дані.
