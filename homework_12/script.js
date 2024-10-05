const starWarsHeroes = [
  { name: "Anakin Skywalker", age: 30, isJedi: true },
  { name: "Luke Skywalker", age: 25, isJedi: true },
  { name: "Han Solo", age: 35, isJedi: false },
  { name: "Princess Leia", age: 30, isJedi: false },
  { name: "Obi-Wan Kenobi", age: 60, isJedi: true },
];
//Создайте на основе старого массива новый массив объектов по образу: [{ name: "Luke Skywalker", isJedi: true }, {name: "Han Solo", isJedi: false}...]
const starWarsHeroesNamesAndIsJedi = starWarsHeroes.map(element => {
  return element.name + " " + element.isJedi;
});
console.log(starWarsHeroesNamesAndIsJedi);

//Задание 1.2
//Создайте новый массив с джедаями младше 40 лет
console.log(starWarsHeroes.filter(starWarsHeroes => starWarsHeroes.age < 40 ));
// 1.3
//Посчитайте возраст всех джедаев
const heroesAges = 
starWarsHeroes.map(starWarsHeroes =>starWarsHeroes.age);
let sum =0;
for(let i=0; i<heroesAges.length;i++){
    sum+=heroesAges[i];
}
console.log("Возраст всех джедаев", sum);
//Задание 1.4
//Повысьте возраст героев на 10 лет
let sum1 = heroesAges.reduce((acc,current)=> acc+current,10);
console.log("возраст героев на 10 лет больше",sum1);

//Задание 1.5
//Создайте новый массив, где "Anakin Skywalker" заменен на { name: "Darth Vader", isJedi: false, age: 50 }
const returnValue =  starWarsHeroes.shift();
const returnValue1 = starWarsHeroes.unshift({ name: "Darth Vader", isJedi: false, age: 50 });
console.log(starWarsHeroes);




