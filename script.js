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



// 1. Подсчитать сумму всех чисел в заданном пользователи диапазоне

// function rangeSum (start, end) {
//     let sum = start

//     while(start < end) {
//         start++ // start = start +1
//         sum += start //sum = sum + start
//     }

//     // for (let i = start + 1; i <= end; i++) {
//     //     sum += i
//     // }
//     return sum
// }

// 2. Запросить у пользователя число и вывести все делители этого числа

// function getDividers(num) {
//     let result = []

//     for (let i = 1; i <= num; i++) {
//         if (num % i === 0) {
//             result.push(i)
//         }
//     }

//     return result
// }


function factorial(num) {
    if (num <= 2) return num
    return num * factorial(num - 1)
}

console.log(factorial(5))
console.log(factorial(3))
console.log(factorial(1))
