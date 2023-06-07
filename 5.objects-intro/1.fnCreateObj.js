"use strict";

function createNewUser1() {
    const newUser1 = {
        firstName: prompt("for task1 - enter name"),
        lastName: prompt("for task1 - enter last name"),
        getLogin() {
            if (!this.firstName || !this.lastName) {
                return "пользователь не определен";
            }
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
    };
    console.log(newUser1.getLogin());
    return newUser1;
}

const newUser1 = createNewUser1();

console.log(newUser1);
