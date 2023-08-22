"use strict";

const deepObj = {
    mileage: null,
    name: "cars",
    colors: ["red", "black", "blue"],
    weels: 4,
    models: {
        nissan: {
            color: "red",
            doors: 3,
            speed: 180,
            otherProps: [
                { price: 25000 },
                { engine: [
                    { power: 1.8 },
                    { valve: 16 },
                    { type: "diesel" },]
                }
            ],
        },
        tesla: {
            color: "black",
            doors: 5,
            speed: 150,
            otherProps: [
                { price: 60000 },
                { engine: [
                    { power: 2.2 },
                    { valve: null },
                    { type: "electro"},]
                }
            ],
        },
        vw: {
            color: "blue",
            doors: 4,
            speed: 160,
            otherProps: [
                { price: 40000 },
                { engine: [
                    { power: 2.4 },
                    { valve: 16 },
                    { type: "petrol"},]
                }
            ],        
        }
    },
    changeModel() {
        this.models.mercedes = this.models.nissan;
        delete this.models.nissan;
     },
}

function isPrimitive(obj) {
	return obj === null ||
	typeof obj === 'number' ||
	typeof obj === 'string' ||
    typeof obj === 'boolean' ||
    typeof obj === "function"
}

function isObject(obj) {
	return obj != null && typeof obj === 'object' 
}

function deepClone(obj) {
	if(isPrimitive(obj)) {
		return obj
	} else if (Array.isArray(obj)) {
		return obj.map((value) => {
			return deepClone(value)
		})
	} else if (isObject(obj)) {
		const result = {}
		for (let key in obj) {
			result[key] = deepClone(obj[key])
		}
		return result
	}
}

const cloneObj = deepClone(deepObj);



deepObj.changeModel();
deepObj.name = "changed name";
deepObj.models.vw.otherProps[1].engine[0].power = 3;
console.log("изначальный глубокий объект")
console.log(deepObj);
console.log("клонированный глубокий объект")
console.log(cloneObj)


const simpleObj = { text: "some text", number: 1 };
const simpleClone = deepClone(simpleObj);

simpleObj.number = 9;
simpleClone.text = "other text"
console.log("не глубокий объект")
console.log(simpleObj);
console.log("клонированный не глубокий объект")
console.log(simpleClone);