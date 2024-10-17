// let age = +prompt("Введите свой возраст");

// if (age >= 0 && age <= 2) {
//     alert ("Вы ребенок");
// } else if (age >= 12 && age <= 17) {
//     alert ("Вы подросток");
// } else if (age >= 18 && age <= 59) {
//     alert ("Вы взрослый");
// } else if (age >= 60) {
//     alert ("Вы пенсионер");
// } else {
//     alert ("Некорректный ввод")
// }


// let number = +prompt("Введите число")

// function isSpetsSimvol (number) {
//     switch(number) {
//         case 0:
//             return ')'
//         case 1:
//             return '!'
//         case 2:
//             return '@'
//         case 3:
//             return '#'
//         case 4:
//             return '$'
//         case 5:
//             return '%'
//         case 6:
//             return '^'
//         case 7:
//             return '&'
//         case 8:
//             return '*'
//         case 9:
//             return '('
//     }
// }

// alert(isSpetsSimvol(number))


// let amount = prompt("Введите количество USD")
// let currency = prompt("Выберите валюту: EUR = 1, UAH = 2, AZN = 3")

// function isConvertCurrency(amount, currency) {
//     switch(currency) {
//         case '1':
//             return (amount*1.09 + 'EUR')
//         case '2':
//             return (amount*0.024 + 'UAH')
//         case '3':
//             return (amount*0.59 + 'AZN')
//     }
// }

// alert(isConvertCurrency(amount, currency))


// let num1 = prompt("Введите первое число");
// let num2 = prompt("Введите второе число");
// let result = isCommonDivisor(num1, num2);

// function isCommonDivisor(a, b) {
//     while (b !== 0) {
//         let remainder = a % b;
//         a = b;
//         b = remainder;
//     }
//     return a;
// }

// alert(`Наибольший общий делитель ${num1} и ${num2} равен ${result}`)


let number = prompt("Введите число");

function isDivisorNumber(number) {
    for (let i = 1; i <= number; i++) {
        if (number % i === 0) {
            console.log(i);
        }
    }
}


