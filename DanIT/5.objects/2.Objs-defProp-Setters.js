"use strict";

function createNewUser2() {
    const newUser2 = {
        firstName: prompt("for task 2 - enter name"),
        lastName: prompt("for task 2 - enter last name"),
        getLogin() {
            if (!this.firstName || !this.lastName) {
                return "пользователь не определен";
            }
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        SetFirstName(newFirstName) {
            Object.defineProperty(newUser2, "firstName", {
                value: newFirstName,
            });
        },
        SetLastName(newLastName) {
            Object.defineProperty(newUser2, "lastName", {
                value: newLastName,
            });
        },
    };

    Object.defineProperties(newUser2, {
        firstName: {
            configurable: true,
            writable: false,
        },
        lastName: {
            configurable: true,
            writable: false,
        },
    });

    console.log(newUser2.getLogin());
    return newUser2;
}

const newUser2 = createNewUser2();

console.log(newUser2);

//>>>>>>>TEST<<<<<<<<<<
try {
    // напрямую
    newUser2.firstName = "Brendan"; // здесь будет ошибка
    newUser2.lastName = "Eich"; // до этой строки код не дойдет из-за ошибки
} catch (e) {
    console.log(
        "\n текущее значение логина: ",
        newUser2.getLogin(), // значение логина останется прежним, плюс без трай-кеч скрипт упадет с ошибкой или надо отключить use strict
        "осталось прежним. Ожидаемое beich - напрямую не перезаписалось"
    );
    console.log("Ошибка " + e.message);
}
//через метод
console.log("\n изменение свойств через метод срабатывает - см. ниже");
newUser2.SetFirstName("Brendan");
newUser2.SetLastName("Eich");
console.log(newUser2.getLogin()); // beich
