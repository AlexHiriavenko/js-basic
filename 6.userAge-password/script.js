"use strict";
let birsday;
const checkBirsday = function () {
    let today = new Date();
    while (isNaN(birsday) || birsday > today) {
        function getBirsdayDate() {
            let userBirsday = prompt("enter date in format -   dd.mm.yyyy");
            if (userBirsday === null) {
                userBirsday = 0;
                return userBirsday;
            }
            while (userBirsday.length !== 10) {
                userBirsday = prompt("enter date in format -   dd.mm.yyyy");
            }
            if (userBirsday.includes(",")) {
                userBirsday = userBirsday.replaceAll(",", ".");
            }
            return (userBirsday = new Date(userBirsday.split(".").reverse().join(".")));
        }
        birsday = getBirsdayDate();
    }
    return birsday;
};

function createNewUser() {
    const newUser = {
        firstName: prompt("name"),
        lastName: prompt("last name"),
        getLogin() {
            if (!this.firstName || !this.lastName) {
                return "пользователь не определен";
            }
            return (this.firstName[0] + this.lastName).toLowerCase();
        },
        birsday: checkBirsday(),
        getAge() {
            if (this.birsday === 0) {
                return console.log("вы нажали отмена, нет возможности вычислить возраст");
            }
            let today = new Date();
            let checkMonth = today.getMonth() - this.birsday.getMonth();
            let checkDate = today.getDate() - this.birsday.getDate();
            let age = today.getFullYear() - this.birsday.getFullYear();
            if (checkMonth < 0 || (checkMonth === 0 && checkDate < 0)) {
                return --age;
            } else if (checkMonth === 0 && checkDate === 0) {
                alert("wow today is your birsday! Congratulations!");
                return age;
            }
            return age;
        },
    };
    let age = newUser.getAge();
    console.log(`user age is ${age}`);
    function getPassword() {
        let passwordPart1 = newUser.getLogin();
        let passwordPart2 = "xxxx";
        if (birsday === 0) {
            passwordPart2 === "xxxx";
        } else {
            passwordPart2 = birsday.getFullYear();
            console.log(`year of birsday: ${passwordPart2}`);
        }
        let password = passwordPart1[0].toUpperCase() + passwordPart1.slice(1) + passwordPart2;
        console.log(`password: ${password}`);
        return password;
    }
    newUser.getPassword = getPassword();
    return newUser;
}

const newUser = createNewUser();

console.log(Object.entries(newUser));
