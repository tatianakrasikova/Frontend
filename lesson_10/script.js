// *! объявление переменных
// *!

// * через ключевое слово let
// такой переменной можно переприсвоить значение (и даже другого типа данных)
let hello = "hello.js";
// hello = 100;

let student;
// если переменной не присвоено значение она равна undefined
student = "Vladimir";
student = "Mykola";
console.log(student)

// * через ключевое слово const
// c const нужно определить значение в момент создания переменной
// нельзя переприсвоить значение

const language = "JavaScript";
console.log(language)

// мы не будем использовать var - для работы с переменными

// ! примитивные типы данных в JS

// * 1. string - строка

// при создании строк в js можно использовать двойные, одинарные, косые кавычки
// "Earth", 'Earth', `Earth`
// вопрос выбора - стилизационный, но косые кавычки также используется для особого синтаксиса шаблонных строк для работы с переменными

let planet = "Earth";

// строки можно складывать - это называется конкатенация
let greeting = "Мы с планеты " + planet;
let planetNumber = 3;

// это синтаксис шаблонных строк для работы с логикой и выражениями внутри строк
// пишется с косыми кавычками по бокам и знаком доллара с фигурными скобками - ${  }
let greeting1 = `Мы с планеты ${planet}. Она находится в солнечной системе! Это ${planetNumber} планета от солнца`;
console.log(greeting1);

// *  2. number - число

let n1 = 42;
let n2 = 3.14;
let n3 = -41;

// максимальный безопасный number в js
let lastSafeInteger = Number.MAX_SAFE_INTEGER;

// * 3. boolean - булевое значение

let isStudent = true;
let isBackend = false;

// * 4. undefined - неопределенное значение
// не явное указание на отсутствие значение
// часто приходит как результат недопустимых операций

let object;

// * 5. null - пустое значение
// явное указание на отсутствие значение

// отсутствие пользователя
let user = null;

// * 6. bigint - большое число
// тип данных для операций над большими целочисленными значениями (больше чем Number.MAX_SAFE_INTEGER)

let bigNumber = 1000n;
let bigResult = 1000n + 100n;

// * 7. symbol - символ
// уникальное символьное значение (чаще всего используется в объектах)

let symbolId = Symbol(10);
 console.log(symbolId);

// ! операции над данными в JS

// приведение типов

// * преобразование в строку

// неявное

// число которое сложим со строкой станет строкой
let sum = 14 + 2 + "2";
console.log(sum)

// явное через String()
let sum1 = String(42) + " - ответ на главный вопрос"
console.log(sum1);

// * преобразование в число

// явное через Number()
// получится преобразовать только если все значения допустимые для перевода в число
// в противном случае мы получим NaN - 'not a number' - специальное зарезервированное значение для результата недопустимых математических операций

let sum2 = 2 + Number("2");
console.log(sum2)

let sum3 = 1000 + Number("100€");
console.log(sum3)

// явное через parseInt()
// этот метод преобразовывает строку в число
// до момента пока не найдет недопустимый символ для преобразования

let sum4 = 1000 + parseInt("100€");
console.log(sum4);

// * логическое преобразование в булевое значение

// значения для false в js:

// false
// 0
// null
// undefined
// "" (пустая строка)
// NaN (Not a number)
// 0n (bigint)
// -0

// остальные значения считаются истинными

let b1 = Boolean(""); // будет false
console.log(b1)
let b2 = Boolean(100);
console.log(b2) // будет true

// ! математические операторы в JS

// арифметические

let v1 = 12 + 45; // сложение
let v2 = 10 - 5; // вычитание
let v3 = 2 * 2; // умножение
let v4 = 10 ** 10; // степень
let v5 = 8 / 4;// деление
console.log(v5)
let v6 = 13 % 2; // остаток от деления
let v7 = Math.sqrt(16); // квадратный корень



// случайное число от 1 до 0
let random = Math.random();
console.log(random)

// мы можем преобразовать предыдущей выражение до нужных нам диапазонов
// Math.floor() - округляет число с плавающей точкой
// случайное число от 1 до 100
let random1 = Math.floor(Math.random() * 100) + 1;
console.log(random1)
// console.log(v7);
// console.log(random1);

// операторы сравнения

// >, <, >=, <=, ===, ==, !==
// скобки влияют на приоритизацию выполнений операций сравнения

// == - это равенство с приведением типов
// === - это строгое равенство (рекомендуется к использованию)
// - !== (не равно)
// - ! (логическое 'нет')

const r1 = 25 !== "25"; // будет true, так как это не равно
const r2 = !true; // логическое нет превращает булевое значение в противоположное

console.log(r2);

// в node.js нет глобального объекта document
// он есть только в браузере, будьте острожны используя code runner
 //console.log(document)
