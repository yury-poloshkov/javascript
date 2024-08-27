// Задание 1
// • Используя Symbol.iterator, создайте объект "Музыкальная коллекция", который можно итерировать. 
//     Каждая итерация должна возвращать следующий альбом из коллекции.

// • Создайте объект musicCollection, который содержит массив альбомов и имеет свойство - символ Symbol.iterator. 
//     Каждый альбом имеет следующую структуру:
// {
//     title: "Название альбома",
//         artist: "Исполнитель",
//             year: "Год выпуска"
// }

// • Реализуйте кастомный итератор для объекта musicCollection.Итератор должен перебирать альбомы по порядку.
// • Используйте цикл for...of для перебора альбомов в музыкальной коллекции и вывода их на консоль в формате: 
//     Название альбома - Исполнитель(Год выпуска)

const musicCollection = [
    {
        title: "Название альбома 1",
        artist: "Исполнитель 1",
        year: 2020,
    },
    {
        title: "Название альбома 2",
        artist: "Исполнитель 2",
        year: 2021,
    },
    {
        title: "Название альбома 3",
        artist: "Исполнитель 3",
        year: 2022,
    },
    {
        title: "Название альбома 4",
        artist: "Исполнитель 4",
        year: 2023,
    },
];

musicCollection[Symbol.iterator] = function () {
    return {
        current: 0,
        last: this.length,
        next() {
            return this.current < this.last ? { done: false, value: this.current++ } : { done: true };
        },
    };
};

for (let item of musicCollection) {
    console.log(
        `${musicCollection[item].title} - ${musicCollection[item].artist} (${musicCollection[item].year})`
    );
}