
function task1() {
    let num1 = Number(prompt('Введите первое число'));
    let num2 = Number(prompt('Введите второе число'));
    console.log(`Первое число${(num1<=1)? ' не ' : ' '}больше 1`);
    console.log(`Второе число${(num1>=3)? ' не ' : ' '}меньше 3`);
}
function task2() {
    alert("console.log((test === true) ? '+++' : '---')");
    
    let test = true;
    console.log((test === true) ? '+++' : '---')
}   
function task3() {
    let day = Number(prompt('Введите число месяца (от 1 до 31)'));
    if (day > 0 && day <=31) {
        console.log(`${(day===31)? 3 : Math.floor((day-1)/10)+1}-я декада месяца`);
    } else {
        console.log('EROOR: out of month');
    }
}
function task4() {
    let num = Number(prompt('Введите число'));
    positiveNum = (num < 0) ? -Math.floor(num) : Math.floor(num);
    result = `В числе ${num}`;
    result+= ` количество сотен: ${Math.floor(positiveNum/100)%10},`;
    result+= ` десятков: ${Math.floor(positiveNum/10)%10},`;
    result+= ` единиц: ${positiveNum%10}`;
    console.log(result);
}