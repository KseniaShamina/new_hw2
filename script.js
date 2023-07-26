let password = prompt("Введите пароль");
if (password === 'пароль') {
    alert("Пароль введен верно");
} else {
    alert("Пароль введен неправильно");
}

let c = 7;
prompt ("Введите число");
if (c > 0 && с < 10 ) {
    console.log ("Верно");
} else {
    console.log ("Неверно");
}

let d = 150;
let e = 8;
if (d > 100 || e > 100) {
    console.log ("Верно");
} else {
    console.log ("Неверно");
}

let a = 2;
let b = 3;
alert(a + b);

let month = Number(prompt("Введите номер месяца"));

switch (month) {
	case '1':
		console.log('сезон: зима');
		break;
	case '2':
		console.log('сезон: зима');
		break;
    case '3':
		console.log('сезон: весна');
		break;
    case '4':
		console.log('сезон: весна');
		break;
    case '5':
		console.log('сезон: весна');
		break;
    case '6':
		console.log('сезон: лето');
		break;
    case '7':
		console.log('сезон: лето');
		break;
    case '8':
		console.log('сезон: лето');
		break;
    case '9':
		console.log('сезон: осень');
		break;
    case '10':
		console.log('сезон: осень');
		break;
    case '11':
		console.log('сезон: осень');
		break;
    case '12':
		console.log('сезон: зима');
		break;
	default: console.log('Что-то тебя совсем далеко унесло');
		break;
}