# filter

skills: filter(), includes(), typeOf, arguments

# Завдання

Реалізувати функцію фільтру масиву за вказаним типом даних. Завдання має бути виконане на чистому Javascript без використання бібліотек типу jQuery або React.

Технічні вимоги:
Написати функцію filterBy(), яка прийматиме 2 аргументи. Перший аргумент - масив, який міститиме будь-які дані, другий аргумент - тип даних.
Функція повинна повернути новий масив, який міститиме всі дані, які були передані в аргумент, за винятком тих, тип яких був переданий другим аргументом. Тобто якщо передати масив ['hello', 'world', 23, '23', null], і другим аргументом передати 'string', то функція поверне масив [23, null].

# Теоретичні питання

Опишіть своїми словами як працює метод forEach.
Як очистити масив?
Як можна перевірити, що та чи інша змінна є масивом?

1. Метод forEach() это метод массива , который один раз для каждого элемента массива (в порядке возрастания) применяет колбек функцию. Колбек ф-ция для forEach() может вызывать 3 аргумента,
   текущий обрабатываетый элемент массива, индекс этого элемента, сам массив.
   Не существует способа остановить или прервать цикл forEach() кроме как выбрасыванием исключения. Если такое поведение, метод forEach() неправильный выбор.

2. a) let array = [a, b, c]; array = array.slice(array.length);
   b) let array = [a, b, c]; array = [];
   c) const array = [a, b, c]; array.length = 0;
   d) const array = [a, b, c]; array.splice(0, arr1.length);
3. Array.isArray(anyVar);
