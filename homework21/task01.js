// Задание 1
// Представьте, что у вас есть класс для управления библиотекой. 
// В этом классе будет приватное свойство для хранения списка книг, 
// а также методы для добавления книги, удаления книги и получения информации о наличии книги.

// Класс должен содержать приватное свойство #books, которое инициализируется пустым массивом 
// и представляет собой список книг в библиотеке.

// Реализуйте геттер allBooks, который возвращает текущий список книг.

// Реализуйте метод addBook(title), который позволяет добавлять книгу в список. 
// Если книга с таким названием уже существует в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод removeBook(title), который позволит удалять книгу из списка по названию. 
// Если книги с таким названием нет в списке, выбросьте ошибку с соответствующим сообщением.

// Реализуйте метод hasBook(title), который будет проверять наличие книги в библиотеке 
// и возвращать true или false в зависимости от того, есть ли такая книга в списке или нет.

// Реализуйте конструктор, который принимает начальный список книг (массив) в качестве аргумента. 
// Убедитесь, что предоставленный массив не содержит дубликатов; в противном случае выбрасывайте ошибку.

class Library {
    #books =[]

    constructor (books){
        
        const booksSet = new Set(books.map((book) => book.toUpperCase()));

        if (books.length == booksSet.size ){
            this.#books = Array.from(booksSet);
        }else{
            throw new Error(`ERROR: Переданный перечень книг содержит дубликаты!`);
        };        
    }

    get allBooks(){
        return this.#books;
    }

    addBook(title){
        if (!this.hasBook(title)) {
            this.#books.push(title.toUpperCase());
        }else{
            throw new Error(`ERROR: Книга ${title} в библиотеке уже есть!`);
        }
    }

    removeBook(title){
        if (this.hasBook(title)) {
            this.#books.splice(this.#books.indexOf(title.toUpperCase()),1);
        }else{
            throw new Error(`ERROR: Книга ${title} в библиотеке не найдена!`);
        }

    }

    hasBook(title){
        return this.#books.includes(title.toUpperCase());
    }

}

const books = [
    'Мастер и Маргарита',
    'Война и мир',
    'Граф Монте-Кристо',
    'Три мушкетера',
    // 'МАСТЕР И Маргарита new edition', // тест на ошибку дубликата в начальном массиве
    'МАСТЕР И МАРГАРИТА new edition'
]

let myLibrary = new Library(books);

console.log(myLibrary.hasBook('aksjdhfksjdh')); // тест на наличие книги = false

console.log(myLibrary.hasBook('мастер и маргарита')); // тест на наличие книги = true

// myLibrary.addBook('мастер и Маргарита'); // тест на ошибку при добавлении дубликата

myLibrary.addBook('Преступление и наказание');

myLibrary.removeBook('МАСТЕР И МАРГАРИТА new edition')
// myLibrary.removeBook('МАСТЕР И МАРГАРИТА new edition') // тест на ошибку удаления несуществующего элемента

console.log(myLibrary.allBooks);

