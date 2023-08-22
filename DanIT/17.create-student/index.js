const student = {
    name: null,
    lastName: null,
    tabel: {},
}

student.name = prompt("enter your name");
student.lastName = prompt("enter your last name");
    
console.log("студент " + student.name + " " + student.lastName);

function createTabel() {
    const { tabel } = student;
    let subject = "";
    let grade = "";
    while (subject === "" || subject) {
        subject = prompt("enter subject name");
        if (subject) {
            grade = prompt(`enter subject ${subject} grade`);
            while (isNaN(grade) || grade < 1 || grade > 12) {
                grade = prompt(`enter subject ${subject} grade`);
            }
            tabel[subject] = +grade;
        }
        if (subject === null) {
            return
        }
    }
}

createTabel();

// tabel
console.log(student.tabel)
for (key in student.tabel) {
    console.log(`${key} : ${student.tabel[key]}`);
}


function average(obj) {
    if (typeof obj !== "object" || Object.keys(obj).length < 1) {
        return "no data for calculate"
    } else {
        const average = (Object.values(obj).reduce((acc, value) => acc += value) / Object.keys(obj).length).toFixed(1);
        console.log(`средняя оценка по предметам: ${average}`);
        if (average > 7) {
            console.log(`Студенту назначена стипендия`)
        }
        return average
    }
}
console.log(average(student.tabel));

// const test = { a: 2, b: 4, c: 6, d: 4 }
// console.log(average(test)); // 4



function isNextCourse(obj) {
    if (typeof obj !== "object" || Object.keys(obj).length < 1) {
        return "no data for calculate"
    } else {
        const badGrades = Object.values(obj).filter(value => value < 4).length;
        console.log("количество оценок ниже 4: " + badGrades)
        if (badGrades === 0) {
            console.log(`Студент переведен на следующий курс`);
        }
        return badGrades;
    }
}
console.log(isNextCourse(student.tabel));

// const test2 = { a: 4, b: 3, c: 5, d: 2 }
// const test3 = { a: 4, b: 5, c: 5, d: 6 }
// isNextCourse(test2);
// isNextCourse(test3);


console.log(student);