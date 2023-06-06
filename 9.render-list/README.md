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
