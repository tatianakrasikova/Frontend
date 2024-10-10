//Напишите фукнцию, которая будет принимать массив. Массив может содержать любые строки и числа. Функция должна вернуть объект, который содержит свойства, ключ и значение которых равны соответствующему элементу массива. Пример работы функции:
//['a', 36.6, 'John Doe'] ==> { a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' }

function arrayToObject(arr) {
    const result = {};
arr.forEach(item => {
    result[item] = item;
  });

  return result;
}

// Пример работы функции
const inputArray = ['a', 36.6, 'John Doe'];
const resultObject = arrayToObject(inputArray);

console.log(resultObject);

 
//2.Напишите функцию, которая превратит массив который содержит элементы в виде массивов из двух элементов, в объект. Первый элемент каждого внутреннего массива ключ, второй - значение. Например такой:
//[
// [ 'height', 170 ],
//[ 'weight', 80 ],
//[ 'sport', 'regbi' ],
//[ 'full name', 'John Doe' ],
//[ 'sing', 'love' ],
//[ 'speed', 90 ]
//]
function arrayPairsToObject(arr) {
    const result = {};
  
    arr.forEach(([key, value]) => {
      result[key] = value;
    });
  
    return result;
  }
  
  // Пример работы функции
  const inputArray1 = [
    ['height', 170],
    ['weight', 80],
    ['sport', 'regbi'],
    ['full name', 'John Doe'],
    ['sing', 'love'],
    ['speed', 90]
  ];
  
  const resultObject1 = arrayPairsToObject(inputArray1);
  
  console.log(resultObject1);

 // второй вариант
 function arrayToObject2(array){
  const result={};
  arr.forEach(el=>{
    const[key,value]=el;
    result[key]=value;

  });
  return result;
}
function objectToString (obj){
  return Object.values(obj).join(', ')
}
// второй вариант
function objectValuesToString(object){
  return Object.values(object)+"";
}

  //3.Функция должна принимать объект и возвращать строку, где будут перечислены все значения свойств объекта через запятую.
  //Пример работы функции:
  
  //{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> 'a, 36.6, John Doe'
  function objectValuesToString(obj) {
    return Object.values(obj).join(', ');
  }
  
  // Пример работы функции
  const inputObject = { 
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe' 
  };
  
  const resultString = objectValuesToString(inputObject);
  
  console.log(resultString);


  // 4.Напишите функцию, которая принимает объект и возвращает другой обьект, который содержит все свойства исходного обьетка, но значения свойств - это их типы.
  // Пример:
  
   //{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: 'string', '36.6': 'number', 'John Doe': 'string' }
   function getObjectWithTypes(obj) {
    let result = {};
    
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = typeof obj[key];
      }
    }
    
    return result;
  }
  
  // Пример работы функции
  const inputObject2 = { 
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe' 
  };
  
  const resultObject2 = getObjectWithTypes(inputObject2);
  
  console.log(resultObject2);

  // второй вариант
  function getObjectWithTypes(obj) {
    const result = {};
    Object.keys(obj).forEach(el=> result[el]= typeof obj[el])
    return result;
  }

  // 4*. Напишите функцию, которая принимает объект и возвращает другой более сложный обьект, который содержит все свойства исходного обьетка, но значения свойств - это объект содержащий исходное значение, и его тип.

 //Пример:

 //{ a: 'a', '36.6': 36.6, 'John Doe': 'John Doe' } ==> { a: { value: 'a', type: 'string' }, '36.6': { value: 36.6, type: 'number' }, 'John Doe': { value: 'John Doe', type: 'string' } }
 function transformObjectWithTypes(obj) {
    let result = {};
  
    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        result[key] = {
          value: obj[key],
          type: typeof obj[key]
        };
      }
    }
  
    return result;
  }
  
  // Пример работы функции
  const inputObject3 = { 
    a: 'a', 
    '36.6': 36.6, 
    'John Doe': 'John Doe' 
  };
  
  const resultObject3 = transformObjectWithTypes(inputObject3);
  
  console.log(resultObject3);

  //5*. Напишите функцию, которая посчитает сумму к оплате в корзине в интернет магазине комп техники. На вход функция получает обьект корзины (пример ниже - наименование товара и количество, а также обьект с ценами на товары, с доп уровнями вложености). К названиям товаров привязываться не стоит, они могут быть другими, в примере просто пример.

// bucket = { display: 20, videocard: 100, cpu: 40, }

//const products = { warehouse1: { videocard: 12.5, }, warehouse2: { display: 56.2, cpu: 150, }, }

//calculateCost(bucket, products); // результат = 8374
function calculateCost(bucket, products) {
    let totalCost = 0;
  
    // Проходим по каждому товару в корзине
    for (let item in bucket) {
      let quantity = bucket[item]; // Количество товара в корзине
      let price = findProductPrice(item, products); // Ищем цену товара
  
      if (price !== undefined) {
        totalCost += quantity * price; // Добавляем к общей сумме
      }
    }
  
    return totalCost;
  }
  
  // Функция для поиска цены товара в объекте продуктов (с вложенными уровнями)
  function findProductPrice(item, products) {
    for (let warehouse in products) {
      if (products[warehouse].hasOwnProperty(item)) {
        return products[warehouse][item]; // Возвращаем цену, если найдена
      }
    }
    return undefined; // Если товара нет в списке продуктов, возвращаем undefined
  }
  
  // Пример использования
  const bucket = { 
    display: 20, 
    videocard: 100, 
    cpu: 40 
  };
  
  const products = { 
    warehouse1: { 
      videocard: 12.5 
    }, 
    warehouse2: { 
      display: 56.2, 
      cpu: 150 
    } 
  };
  
  const result = calculateCost(bucket, products);
  console.log(result); 

 // Функция calculateCost принимает два параметра:

//bucket — объект, представляющий корзину с товарами и их количеством.
//products — объект, представляющий склад с ценами на товары (цены могут быть на разных уровнях вложенности).
//Для каждого товара в корзине мы ищем его цену с помощью функции findProductPrice, которая ищет соответствующую цену во всех уровнях объекта products.

//Функция findProductPrice проходит по всем "складам" (ключам верхнего уровня в объекте products), и если товар найден, возвращает его цену.

//В основной функции calculateCost мы умножаем количество товара на его цену и прибавляем это к общей сумме.

//В результате сумма товаров умножается на их количество и выводится как результат.


//6*. Напишите функцию, которая сравнивает 2 объекта, и возвращает результат true если они равны или false в противном случае

//Функция принимает 2 аргумента - объекты. Объекты в качестве значений свойств могут иметь только примитивные типы данных

//Объекты равные, если их содержание (пары ключ-значение) совпадает, количество свойств также должно совпадать. Порядок не важен.

//function compareObjects(firstObj, secondObj) { // тут ваш код }

//примеры объектов которые можно использовать для тестирования функции const obj1 = { name: 'John', age: 17, };

//const obj2 = { name: 'Mark', age: 17, };

//const obj3 = { name: 'Mark', age: 17, student: false, };

//const obj4 = { name: 'John', age: 17, };
function compareObjects(firstObj, secondObj) {
    // Получаем ключи обоих объектов
    const firstKeys = Object.keys(firstObj);
    const secondKeys = Object.keys(secondObj);
  
    // Если количество ключей не совпадает, объекты точно не равны
    if (firstKeys.length !== secondKeys.length) {
      return false;
    }
  
    // Проверяем каждый ключ и его значение
    for (let key of firstKeys) {
      // Если ключ отсутствует во втором объекте или значения не равны
      if (!secondObj.hasOwnProperty(key) || firstObj[key] !== secondObj[key]) {
        return false;
      }
    }
  
    // Если все ключи и их значения совпадают, объекты равны
    return true;
  }
  
  // Примеры для тестирования
  const obj1 = { name: 'John', age: 17 };
  const obj2 = { name: 'Mark', age: 17 };
  const obj3 = { name: 'Mark', age: 17, student: false };
  const obj4 = { name: 'John', age: 17 };
  
  // Тесты
  console.log(compareObjects(obj1, obj2)); // false
  console.log(compareObjects(obj2, obj3)); // false
  console.log(compareObjects(obj1, obj4)); // true
  console.log(compareObjects(obj3, obj3)); // true
  
 // Объекты obj1 и obj4 равны, так как содержат одинаковые пары ключ-значение.
//Объекты obj1 и obj2 отличаются по значению свойства name, поэтому они не равны.
//Объект obj3 содержит дополнительное свойство student, поэтому он не равен объекту obj2.