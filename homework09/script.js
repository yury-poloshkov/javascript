// 1. При изменении значения в input с id = "from", 
// значение содержащееся в нем должно моментально отображаться в span.
// То есть при печати в input'е тег span также должен меняться.

const inputElement = document.querySelector('#from');
const outputElement = document.querySelector('span');

inputElement.addEventListener('input', () => {
    outputElement.textContent = inputElement.value;
})

// 2. При клике на кнопку с классом messageBtn необходимо элементу с классом message:
//     - добавить два класса: animate_animated и animate_fadeInLeftBig
//     - поставить данному элементу стиль visibility в значение 'visible'.

const btn = document.querySelector('.messageBtn');
const messageElement = document.querySelector('.message')

btn.addEventListener('click', () => {
    messageElement.classList.add('animate_animated');
    messageElement.classList.add('animate_fadeInLeftBig');
    messageElement.style.visibility = 'visible';
})

// 3. Необходимо при отправке формы проверить, заполнены ли все поля в этой форме.
// Если какое - либо поле не заполнено, форма не должна отправляться, 
// также должны быть подсвечены незаполненные поля(необходимо поставить класс error незаполненным полям).
// Как только пользователь начинает заполнять какое - либо поле, необходимо, 
// при вводе в данное поле, произвести проверку:
// - Если поле пустое, необходимо данное поле подсветить(поставить класс error данному полю).
// - Если поле было чем - либо заполнено, подсветку(класс error) необходимо убрать.

const inputForm = document.querySelector('form');
const formButton = inputForm.querySelector('button');
const formInputs = inputForm.querySelectorAll('.form-control');

inputForm.addEventListener('input', (e) => {
    e.target.classList.remove('error');
})

formButton.addEventListener('click', (e) => {
    e.preventDefault();
    let isNullField = false;
    formInputs.forEach(element => {
        if (!element.value) {
            isNullField = true;
            element.classList.add('error');
        };
    });
    if (!isNullField) {
        console.log("Sending form-data to somewhere...");
    };
})