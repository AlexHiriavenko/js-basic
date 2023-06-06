// "use strict";

// function createNewUser() {
//     const newUser = {
//         firstName: prompt("enter name"),
//         lastName: prompt("enter last name"),
//         getLogin() {
//             if (!this.firstName || !this.lastName) {
//                 return "пользователь не определен";
//             }
//             return (this.firstName[0] + this.lastName).toLowerCase();
//         },
//     };
//     console.log(newUser.getLogin());
//     return newUser;
// }

// const newUser = createNewUser();

// console.log(newUser);

// function createNewUser() {
//     const newUser = {
//         firstName: this.setFirstName(),
//         lastName: this.setLastName(),
//         setFirstName() {
//             return prompt("enter name");
//         },
//         setLastName() {
//             return prompt("enter last name");
//         },
//         getLogin() {
//             if (!this.firstName || !this.lastName) {
//                 return "пользователь не определен";
//             }
//             return (this.firstName[0] + this.lastName).toLowerCase();
//         },
//     };
//     console.log(newUser.getLogin());
//     return newUser;
// }

// "use strict";

// function createNewUser() {
//     const newUser = {
//         _firstName: prompt("Enter name"),
//         _lastName: prompt("Enter last name"),
//         getLogin() {
//             if (!this._firstName || !this._lastName) {
//                 return "Пользователь не определен";
//             }
//             return (this._firstName[0] + this._lastName).toLowerCase();
//         },
//     };

//     Object.defineProperty(newUser, "firstName", {
//         get() {
//             return this._firstName;
//         },
//         set(value) {
//             console.log("Please use the setFirstName() function to set the value of firstName.");
//         },
//     });

//     Object.defineProperty(newUser, "lastName", {
//         get() {
//             return this._lastName;
//         },
//         set(value) {
//             console.log("Please use the setLastName() function to set the value of lastName.");
//         },
//     });

//     newUser.setFirstName = function () {
//         this._firstName = prompt("Enter name");
//     };

//     newUser.setLastName = function () {
//         this._lastName = prompt("Enter last name");
//     };

//     console.log(newUser.getLogin());
//     return newUser;
// }

// const newUser = createNewUser();

// console.log(newUser);

// newUser.firstName = "test";
// console.log(newUser.firstName);

"use strict";

function createNewUser() {
    const newUser = {
        _firstName: prompt("Enter name"),
        _lastName: prompt("Enter last name"),
        getLogin() {
            if (!this._firstName || !this._lastName) {
                return "Пользователь не определен";
            }
            return (this._firstName[0] + this._lastName).toLowerCase();
        },
    };

    Object.defineProperty(newUser, "firstName", {
        get() {
            return this._firstName;
        },
        set(value) {
            console.log("Please use the setFirstName() function to set the value of firstName.");
        },
        writable: false,
    });

    Object.defineProperty(newUser, "lastName", {
        get() {
            return this._lastName;
        },
        set(value) {
            console.log("Please use the setLastName() function to set the value of lastName.");
        },
        writable: false,
    });

    newUser.setFirstName = function () {
        this._firstName = prompt("Enter name");
    };

    newUser.setLastName = function () {
        this._lastName = prompt("Enter last name");
    };

    console.log(newUser.getLogin());
    return newUser;
}

const newUser = createNewUser();

console.log(newUser);

newUser.firstName = "test";
console.log(newUser.firstName);
