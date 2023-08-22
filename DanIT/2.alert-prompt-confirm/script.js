let getNameUser = prompt("Please enter your name", "");
let getAgeUser = prompt("Please enter your age", "");

let previousNameUser, previousAgeUser, userName, userAge;

if (getNameUser === null) {
    previousNameUser = "";
} else {
    previousNameUser = getNameUser;
}

if (getAgeUser === null) {
    previousAgeUser = "";
} else {
    previousAgeUser = getAgeUser;
}

while (
    getNameUser === "" ||
    getAgeUser === "" ||
    isNaN(+getAgeUser) ||
    getNameUser === null ||
    getAgeUser === null
) {
    (getNameUser = prompt("Please enter your name", previousNameUser)),
        (getAgeUser = prompt("Please enter your age", previousAgeUser));
}

if (getAgeUser < 18) {
    alert("You are not allowed to visit this website");
} else if (getAgeUser >= 18 && getAgeUser <= 22) {
    let answerAllow = confirm("Are you sure you want to continue?");
    if (!answerAllow) {
        alert("You are not allowed to visit this website");
    } else {
        userName = getNameUser;
        userAge = getAgeUser;
        alert(`Welcome, ${userName}`);
    }
} else {
    userName = getNameUser;
    userAge = getAgeUser;
    alert(`Welcome, ${userName}`);
}

console.log(userName, userAge);
