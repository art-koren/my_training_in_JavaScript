let nam1 = 5;
let nam2 = 15;
let nam3 = 25;


let result = nam1 + nam2 + nam3

console.log('Результат:' + ' ' + result);

/*-------------------------------------------*/

/*
// Тренировались с ссылочными данными(с обьектами работает в точности также)


const arr1 = [1, 2, 3];
const arr3 = arr1;

let arr4 = arr3

arr4.push(10) // добавляет новый элемент в массив

console.log(arr4) // [1, 2, 3, 10]

arr4 = [1, 2, 3]

delete arr4[0] // удаляет певый элемент массива

console.log(arr4) // [2, 3]

console.log(arr1) // [1, 2, 3, 10]

*/


/*

const personAlexey = {
    name: 'alexey',
    age: 18
}

const personNikita = personAlexey;

console.log(personNikita); // { name: 'alexey',age: 18 } 

personAlexey.age = 25

console.log(personNikita); // { name: 'alexey', age: 25 }

personNikita = {
    name: 'Nikita',
    age: 14,
}

console.log(personNikita); // { name: 'Nikita', age: 14 }

console.log(personAlexey); // { name: 'alexey', age: 25 }

*/

let namber = 5

if (namber === 5) {
    console.log('Вау!');
}

namber = 6

if (namber > 5) {
    console.log('Ахуеть!');
}



namber = 2

if (namber < 5 && namber > 0) {
    console.log('Неплохо');
}


namber = -1

if (namber <= 0) {
    console.log('Очень плохо');
}

/*
    1 // true 
    0 // true 

    'asdasd' //true 
    '' // false 
    [] // true 
    [1, 2,] // true 
    {} // true 
    null // false 
    NaN // false
*/
 


if (namber === 5) {
    console.log('Вау!');
} else if (namber > 5) {
    console.log('Ахуеть!');
} else if (namber < 5 && namber > 0) {
    console.log('Неплохо');
} else if (namber <= 0) {
    console.log('Очень плохо');
} else {
    console.log('ВООЩЕ НИХУЯ НЕ ПОНЯЛ ИДИ НАХУЙ');
}

/*

>
<
==
>=
<=
&&
||
!
!==
!
===
*/

console.log();

