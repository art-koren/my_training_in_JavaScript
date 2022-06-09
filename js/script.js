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

let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9, 1, 2, 3, 4, 5, 6, 7, 8, 9]



for (let num = 0; num < 11; num++) {
	console.log(numbers[num]);
}




////////////////////////////////////////////







//(() => {
//	let x = Number(prompt("Введите первое число", 100));

//	let y = Number(prompt("Введите второе число", 100));

//	let z = Number(prompt("Введите 1, чтобы сработал знак +, 2, что срабатывал знак -, 3, чтобы срабатывал знак *, 4, чтобы срабатывал знака /"));


//	let result;


//	switch (z) {
//		case 1: result = x + y;
//			break;
//		case 2: result = x - y;
//			break;
//		case 3: result = x * y;
//			break;
//		case 4: result = x / y;
//			break;

//		default: result = 'Команда не существует'
//	}

//	alert(result);
//})()




//let brow = 'browser';


//if (brow === 'Edge') {
//	alert("You've got thr Edge!");
//} else if (brow === "Chrom"
//	|| brow === "Firefox"
//	|| brow === "Safari"
//	|| brow === "Opera") {
//	alert("Okay we support these browsers too");
//} else {
//	alert("We hope thet this page looks !")
//}


//const number = +prompt('Ведите число между 0 и 3', '');

//switch (number) {
//	case 0:
//		alert('Вы ввели число 0');
//		break;
//	case 1:
//		alert('Вы ввели число 1');
//		break;
//	case 2:
//	case 3:
//		alert('Вы ввеличи число 2, а может и 3');
//		break;
//	default: alert('Вы ввели не то число');
//		break;
//}



//const mySwitch = function (number) {
//	switch (number) {
//		case 0:
//			alert('Вы ввели число 0');
//			break;
//		case 1:
//			alert('Вы ввели число 1');
//			break;
//		case 2:
//		case 3:
//			alert('Вы ввеличи число 2, а может и 3');
//			break;
//		default: alert('Вы ввели не то число');
//			break;
//	}

//}





//let sum = function (name, num) {
//	return name + num;
//}
//let x = sum(98, 5)

//console.log(x);


//mySwitch(sum(5, 10))







//const minus = function (perv, vtor) {
//	return perv - vtor;
//}

//console.log(minus(100, 40));



//x = y-z*(y+z)

//const uravnenie = function (y, z) {
//	return y - z * (y + z)
//}

////console.log(uravnenie(5, 8));



//const minus = function (perv, vtor) {
//	return perv - vtor;
//}


//let sum = function (name, num) {
//	return name + num;
//}


//const myFunction = function (code, x, z) {

//	const result = sum(x, z);
//	if (code === 'minus') {
//		return minus(x, z);
//	}
//	if (code === 'formula') {
//		return uravnenie(x, z);
//	}
//	if (result > 100) {
//		return code + 'Alexy';
//	}
//	if (result < 100) {
//		return code + 'Tema';
//	}

//}
//console.log(myFunction('name: ', 8, 3));
//console.log(myFunction('name: ', 50, 100));
//console.log(myFunction('minus', 50, 100));
//console.log(myFunction('formula', 50, 100));








//const code = 'minus'
//console.log(code === 'minus');






//const uravnenie = (y, z) => {
//	return y - z * (y + z)
//}

//const minus = (perv, vtor) => {
//	return perv - vtor;
//}


//let sum = (name, num) =>
//	name + num;


//const myFunction = (code, x, z) => {

//	const result = sum(x, z);
//	if (code === 'minus') {
//		return minus(x, z);
//	}
//	if (code === 'formula') {
//		return uravnenie(x, z);
//	}
//	if (result > 100) {
//		return code + 'Alexy';
//	}
//	if (result < 100) {
//		return code + 'Tema';
//	}

//}
//console.log(myFunction('name: ', 8, 3));
//console.log(myFunction('name: ', 50, 100));
//console.log(myFunction('minus', 50, 100));
//console.log(myFunction('formula', 50, 100));








//const code = 'minus'
//console.log(code === 'minus');


//const arowFunction = () => {

//}


//function name(params) {

//}

//(x, z) => x + z





//function checkAge(age) {
//	//return (age > 18) || confirm('Родители разрешили?');
//	return (age > 18) ? true : console.log('Родители разрешили?');
//}
//console.log(checkAge(6));




//function min(a, b) {
//	if (a < b) {
//		return a;
//	} else {
//		return b;
//	}
//}
//console.log(min(2, 5));
//console.log(min(3, -1));
//console.log(min(1, 1));




let carInfo = {
	door: 4,
	light: 4,
	name: 'bmw',
	power: 300,
	isNew: true,
	colorInfo: {
		creslo: 4,
		cvetSolona: 'grey',
		pravoePologenieRuly: true,
		getThis: function () {
			console.log('ColorInfo ', this);
		}

	},

	isLock: true,
	openDoor: function () {
		this.isLock = false;
	},
	closeDoor: function () {
		this.isLock = true;
	},
	getThis: function () {
		console.log('CarInfo ', this);
	}


}

carInfo.colorInfo.getThis();

carInfo.getThis();

console.log(carInfo.isLock, 'Дверт закрыта');

carInfo.openDoor();
console.log(carInfo.isLock, 'Дверь открыта');

carInfo.closeDoor();

console.log(carInfo.isLock, 'Дверт закрыта');


