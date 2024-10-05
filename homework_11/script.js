const names = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages = [22, 31, 45, 53];
const mixed = [...ages,...names]
//console.log(mixed);
const person1 ={
    name:"Мария",
    age:22
};
    const person2 ={
        name:"Алексей",
        age:31
    };
        const person3 ={
            name:"Елена",
            age:45
        };
            const person4 ={
                name:"Дмитрий",
                age:53
        };
const mixed1=[person1,person2,person3,person4];
//console.log(mixed1);
const reversedArray1 = mixed1.reverse();
//console.log(reversedArray1);
const names1 = ["Мария", "Алексей", "Елена", "Дмитрий"];
const ages1 = [22, 31, 45, 53];
const nameAgeArray = [];

for (let i = 0; i < names1.length; i++) {
    nameAgeArray.push(names1[i] + " " + ages1[i] + " лет/годов");
}

//console.log(nameAgeArray);
// Массив с обратной последовательностью
const reversedArray = nameAgeArray.reverse();
//console.log(reversedArray);
// задание 3
const countries =[];
const plusValue = countries.unshift("Франция", 
"Германия", "Италия");
//console.log(countries);
const minusValue =countries.pop();
//console.log(countries);
//console.log(minusValue);
const minusValue1 = "Италия";
const plusValue1 = countries.unshift(minusValue1);
//console.log(countries);
//задание 4
const car = {
    brand:"Mercedes", 
    model:"Mercedes -Benz", 
    year:2024,
    isElectric: true    
};
console.log(car);
const{brand,model,year,isElectric} = car;
console.log(brand);
console.log(model);
console.log(year);
console.log(isElectric);

function getObjectKeys(obj) {
    return Object.keys(obj);
}

function getObjectValues(obj) {
    return Object.values(obj);
}

function getCarInfo(obj) {
    return `Марка: ${obj.brand}, Модель: ${obj.model}, Год выпуска: ${obj.year}`;
}

function iterateObject(obj) {
    const entries = Object.entries(obj); 

    for (let i = 0; i < entries.length; i++) {
        const key = entries[i][0]; 
        const value = entries[i][1]; 
        console.log(`Ключ: ${key}, Значение: ${value}`);
    }
}
// console.log("Ключи объекта car:");
// console.log(getObjectKeys(car));
// console.log("Значения объекта car:");
// console.log(getObjectValues(car));
// console.log("Информация о машине:");
// console.log(getCarInfo(car));
// console.log("Итерация по ключам и значениям объекта car:");
iterateObject(car);






