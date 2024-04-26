// 1. Ко всем элементам, имеющим класс "dropdown-item" добавить еще один класс "super-dropdown", 
// необходимо использовать методы forEach и querySelectorAll и свойство classList у элементов.

const dropdownItems = document.querySelectorAll('.dropdown-item');
dropdownItems.forEach(element => {
    element.classList.add('super-dropdown');
});

// 2. У элемента с классом btn необходимо убрать класс "btn-secondary", если он присутствует 
// у этого элемента, либо добавить, если такого класса у элемента не было.

const firstBtn = document.querySelector('.btn');
firstBtn.classList.toggle('btn-secondary')

// 3. Необходимо удалить класс "dropdown-menu" у элемента, у которого присутствует класс "menu".

const menuItem = document.querySelector('.menu');
menuItem.classList.remove('dropdown-menu');

// 4. Используя метод insertAdjacentHTML добавьте после div'a с классом "dropdown" следующую разметку:
//     `<a href="#">link</a>`

const dropdownDiv = document.querySelector('div.dropdown');
dropdownDiv.insertAdjacentHTML('afterend', `<a href="#">link</a>`);

// 5. У элемента с id "dropdownMenuButton" замените id на "superDropdown".

const dropdownMenuButton = document.querySelector('#dropdownMenuButton');
dropdownMenuButton.setAttribute('id', 'superDropdown');

// 6. Добавьте атрибут data - dd со значением 3 элементу 
// у которого существует атрибут "aria-labelledby" равный "dropdownMenuButton" используя dataset.

const ariaLabel = document.querySelector('[aria-labelledby="dropdownMenuButton"]');
ariaLabel.dataset.dd = 3;

// 7. Удалите атрибут type у элемента с классом "dropdown-toggle".

const dropdownToggle = document.querySelector('.dropdown-toggle');
dropdownToggle.removeAttribute('type');
