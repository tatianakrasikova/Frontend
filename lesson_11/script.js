// ! arrays - массивы
// сложный тип данных
// синтаксис массива включает фигурные скобки

const arr = [];

const numbers = [4, 8, 15, 16, 23, 42];
const fruits = ["apple", "orange", "kiwi", "banana"];

// вы можете создавать массивы из разных типов данных, но как правило это не нужно и не удобно 😳
const arr1 = [1, "apple", undefined, true];

// чтобы обратится к элементу массива мы используем его индекс
let kiwi = fruits[2];

// если мы обратимся к индексу несуществующего элемента - мы получим undefined
let secret = fruits[10];

// * for loop - цикл for

// for (let i = 0; i < fruits.length; i++) {
//   console.log(fruits[i], "под номером", i);
// }

let fruitsLength = fruits.length; // длина массива fruits

// * while - цикл (до тех пор | пока)

let i = 1;

// while (i < 6) {
//   console.log(i, "раз");
//   // без изменения i мы не выйдем из цикла
//   i++;
// }

// * if / else условный оператор

let isStudent = false;

// if (isStudent) {
//   console.log("похоже что вы студент");
// } else {
//   console.log("кажется что вы не 👩🏼‍🎓");
// }

// ! методы добавления и удаления элементов массива
// все методы массивов делятся на мутирующие и не мутирующие
// мутирующие - изменяют исходный массив
// не мутирующие - не изменяют

const animals = ["shark", "panda", "tiger", "otter"];

const snake = "snake";

// * push() - метод добавления элемента в конец массива
// мутирующий метод (изменяет исходный массив)

// 1. изменяет исходный массив, добавляет элемент в конец
// 2. возвращенное значение - длинна измененного массива

const returnedValue1 = animals.push(snake);

// * pop() - метод удаление элементов из конца массива
// мутирующий метод

// 1. изменяет исходный массив, удаляет последний элемент
// 2. возвращенное значение - удаленный элемент

// console.log(animals);

const returnedValue2 = animals.pop();

// console.log(animals);
// console.log(returnedValue2);

// * unshift - метод добавления элемента в начало массива
// мутирующий метод

// 1. изменяет исходный массив, добавляет элемент в начало
// 2. возвращенное значение - длинна измененного массива

const returnedValue3 = animals.unshift("panda");

// console.log(animals);
// console.log(returnedValue3);

// * shift - метод удаления элемента из начала массива
// мутирующий метод

// 1. изменяет исходный массив, удаляет первый элемент
// 2. возвращенное значение - удаленный элемент

const returnedValue4 = animals.shift();

// console.log(animals);
// console.log(returnedValue4);

// * spread syntax - спред оператор
// чтобы сделать копию нужно обратиться в квадратных скобках к исходному массиву через '...'
// работает только для одномерных массивов

// удобный способ сделать копию массива

// пример создании копии элементов массива через spread
const newAnimals = [...animals];

// не путайте с созданием двумерного массива
// если не прописать три точки (...) элементы не распакуются
const mixedArr1 = [animals, fruits];

// пример создания нового массива из объединения элементов старого
const mixedArr2 = [...animals, ...fruits];

// мы можем дописывать элементы напрямую в новый массив вместе с spread
const newAnimals1 = ["fox", ...animals, "🐻‍❄️"];

//console.log(mixedArr2);
// console.log(newAnimals1);

// два одинаковых на вид объекта не равны
// потому что это ссылки на разные ячейки памяти
// массивы - ссылочный тип данных

// const num1 = [1, 2, 3]
// const num2 = [1, 2, 3]
// const isTrue = num1 === num2

// ! создание глубокой копии для двумерных (и более) массивов

// используйте метод structuredClone() для создание глубокой копии
let mixedArrDeep = structuredClone(mixedArr1);

// если вы создаете копию со spread оператором - это поверхностная копия
let mixedArrShallow = [...mixedArr1];

// при изменении вложенных данных в поверхностной копии - данные меняются и в источнике
mixedArrShallow[0][1] = "🦫";

// console.log(mixedArr1);
// console.log(mixedArrDeep);
// console.log(mixedArrShallow);

// ! Objects - объекты

// объект - ссылочный тип данных
// данные хранятся в формате: ключ и значение
// ключи - это строковые значения

const person1 = {
  name: "Ron",
  lastname: "Weasley",
  age: 40,
  isAdult: true,
  isMarried: false,
  siblings: ["Jinny", "Fred", "George"]
};

const person2 = {
  name: "Jinny",
  lastname: "Weasley",
  age: 35,
  isAdult: true,
  isMarried: true,
  siblings: ["Ron", "Fred", "George"]
};

// частны случай массива состоящего из объектов
const family = [person1, person2];

// к значениям объектов мы обращаемся по ключам через точку
const person2Info =
  person2.name + " " + person2.lastname + " is sister of " + person1.name + " " + person1.lastname;

const person1Info = `${person1.name} ${person1.lastname} is brother of ${person2.name} ${person2.lastname}`;

// пример работы с циклами с массивом из объектов
// итерируемся по массиву и обращаемся по индексу к каждому объекту через итератор
// у выбранного объекта по ключу забираем нужное значение

// for (let i = 0; i < family.length; i++) {
//   console.log(`${family[i].name} is ${family[i].age}!`);
// }

// когда мы работаем с объектами мы называем ключи в одно слово через camel case
// для того чтобы упростить работу с ключами
// если ключ назван строкой с пробелом - обращаемся к ней через квадратные скобки

// мы хотим добавить в объект ключ-строку из этой переменной
const variable = "hasWife";

const person3 = {
  name: "Bill",
  lastname: "Weasley",
  age: 40,
  isAdult: true,
  // способ создания ключа из переменной со строкой
  [variable]: true,
  "brothers and sisters": ["Ron", "Fred", "George", "Jinny"]
};

const siblings = person3["brothers and sisters"]; // обращение к ключу со строкой с пробелом
// console.log(person3);

// * деструктуризация объектов

// в одну строку мы:

// 1. забираем данные из объекта по выбранным ключам
// 2. объявляем переменные с названиями совпадающими с именами этих ключей
// 3. присваиваем значения в эти новые переменные

// ? так выглядит запись без деструктуризации 😥

// const name = person1.name
// const siblings1 = person1.siblings
// const age = person1.age

// ? пример c деструктуризацией
// поскольку у нас уже была переменная siblings - мы меняем имя новой переменной из деструктуризации на siblings1

const { age, name, lastname, siblings: siblings1 } = person1;

// console.log(name);
// console.log(siblings1);
// console.log(age);

// * деструктуризация массивов

family.push(person3);

// console.log(family);

// важно сохранить порядок элементов - названия переменных могут быть любыми
const [ron, jinny, bill] = family;

console.log(ron.name);
console.log(jinny.name);
console.log(bill.name);

// если нам нужен только элемент под индексом 2, мы сохраняем порядок обращения к нему через запятые пропуская ненужные элементы

// const [, , bill] = family;

// console.log(ron.name);
// console.log(jinny.name);
// console.log(bill.name);