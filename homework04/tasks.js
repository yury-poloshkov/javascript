//Решение задачи 1
function task1() {
    let numberStatus = 'это ноль';
    for (let i = 0; i < 11; i++) {
        if (i !== 0) {
            switch (i%2) {
                case 0:
                    numberStatus = 'четное число';
                    break;
                case 1:
                    numberStatus = 'нечетное число';
                    break;
            };
        }
        console.log(`${i} - ${numberStatus}`);       
    }
    
}

//Решение задачи 2
function task2() {
    const basicArray = [1, 2, 3, 4, 5, 6, 7];
    let cutedElement = 4;
    let cutedQuntity = 2;
    //обрезка без проверки наличия вырезаемого элемента и валидной длины вырезаемого куска
    basicArray.splice(basicArray.indexOf(cutedElement), cutedQuntity);
    console.log(basicArray);
}

//Решение задачи 3
function task3() {
    const arr = [];
    for (let i = 0; i < 5; i++) {
        arr.push(Math.round(Math.random()*9));    
    };
    console.log(arr);
    let sum = 0;
    let minValue = arr[0];
    let foundThree = false;
    for (let i = 0; i < arr.length; i++) {
        sum = sum + arr[i];
        if (arr[i] < minValue) minValue = arr[i];
        if (arr[i] === 3) foundThree = true;
    }

    console.log(`Сумма элементов массива равна ${sum}`);
    console.log(`Минимальный элемент массива равен ${minValue}`);
    console.log(`Наличие цифры 3 в массиве: ${foundThree}`);   
}

//Решение задачи 4
function task4() {
    let maxRows = 20;
    let rowString = '';
    for (let i = 0; i < maxRows; i++) {
        rowString = rowString + 'x';
        console.log(rowString);
    };
}