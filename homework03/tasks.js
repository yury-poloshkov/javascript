//Решение задачи 1
function task1() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));
    console.log(`Результат: ${num1}^3 + ${num2}^3 = ${powNumber(num1) + powNumber(num2)}`);
}

const powNumber = (number, pow = 3) => number ** pow;

//Решение задачи 2
function task2() {
    let salary = Number(prompt('Введите Вашу заработную плату'));
    if (!isNaN(salary)) {
        console.log(`Размер заработной платы за вычетом налогов равен ${netIncome(salary)}`);    
    } else {
        console.log('ERROR: Значение задано не верно!');
    }
}

const netIncome = (salary, tax = 0.13) => salary * (1-tax);


//Решение задачи 3
function task3() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));
    let num3 = Number(prompt('Введите третье число'));
    
    console.log(`Максимальное из введенных чисел ${maximum(num1, num2, num3)}`);
}

function maximum(num1, num2, num3){
    let result = num1;
    if (num2 > result) result = num2
    if (num3 > result) result = num3
    return result;
}

//Решение задачи 4
function task4() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));

    console.log(`Сумма чисел ${num1} и ${num2} равна ${sum(num1, num2)}`);
    console.log(`Разность чисел ${num1} и ${num2} равна ${difference(num1, num2)}`);
    console.log(`Произведение чисел ${num1} и ${num2} равно ${mult(num1, num2)}`);
    console.log(`Частное от деления чисел ${num1} на ${num2} равно ${division(num1, num2)}`);
}

const sum = (num1, num2) => num1 + num2;
const difference = (num1, num2) => Math.abs(num1 - num2);
const mult = (num1, num2) => num1 * num2;
const division = (num1, num2) => (num2 != 0) ? num1 / num2 : 'ERROR: division by zero!';

