// Задание 1.1
const starWarsHeroes = [
    { name: "Anakin Skywalker", age: 30, isJedi: true },
    { name: "Luke Skywalker", age: 25, isJedi: true },
    { name: "Han Solo", age: 35, isJedi: false },
    { name: "Princess Leia", age: 30, isJedi: false },
    { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];

const getOutAge = (starWarsHero) => ({
        name: starWarsHero.name,
        isJedi: starWarsHero.isJedi
    })
// map иттерируется по массиву и в каждый элемент массива передает функцию в данном случае мы хотим убрать возраст
const starWarsHeroesModified = starWarsHeroes.map(getOutAge);

console.log(starWarsHeroesModified);

// Задание 1.2
// Создайте новый массив с джедаями младше 40 лет

// if else
// const filterJedi = (jedi) => {
//     if(jedi.age < 40 && jedi.isJedi) {
//         return true
//     } else return false
// }

// с помощью тернаного оператора
const filterJedi = (jedi) => (jedi.age < 40 && jedi.isJedi) ? true : false
const filteredStarWarsHeroes = starWarsHeroes.filter(filterJedi);
console.log(filteredStarWarsHeroes);
// Задание 1.3
// Посчитайте возраст всех джедаев

const sumOfJediAges = starWarsHeroes
.filter((starWarsHero) => starWarsHero.isJedi)
.reduce(
    (accumulator, currentValue) => accumulator + currentValue.age,
    0,
  );
console.log(sumOfJediAges);

// Задание 1.4
// Повысьте возраст героев на 10 лет

const starWarsHeroesPlus10Years = starWarsHeroes.map((hero) => ({...hero, age: hero.age + 10}));
console.log(starWarsHeroesPlus10Years);

// спред 
const exampleArray = [1, 2, 3];
console.log(...exampleArray);
console.log(Math.max(...exampleArray));
const copyOfExampleArray = [...exampleArray];
//  соединение 2 массивов в 1
console.log(          [     ...exampleArray, ...[5, 10, 15]   ]          );

//Задание 1.5
//Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }
function changeHero(hero) {
    // if (hero.name === 'Anakin Skywalker') {
    //     return { name: "Darth Vader", isJedi: false, age: 50 }
    // } else {
    //     return hero
    // }

    // const res = (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
    // return res;

    return (hero.name === 'Anakin Skywalker') ? { name: "Darth Vader", isJedi: false, age: 50 } : hero;
};

const starWarsHeroesWithDarthVader = starWarsHeroes.map(changeHero);
console.log(starWarsHeroesWithDarthVader);