// Задание 2
// Вы управляете рестораном, в котором работают разные повара, специализирующиеся на определенных блюдах.
// Клиенты приходят и делают заказы на разные блюда.

// Необходимо создать систему управления этими заказами, которая позволит:
// • Отслеживать, какой повар готовит какое блюдо.
// • Записывать, какие блюда заказал каждый клиент.

// Используйте коллекции Map для хранения блюд и их поваров, а также для хранения заказов каждого клиента.
// В качестве ключей для клиентов используйте объекты.

// Повара и их специализации:
// Виктор - специализация: Пицца.
// Ольга - специализация: Суши.
// Дмитрий - специализация: Десерты.

// Блюда и их повара:
// Пицца "Маргарита" - повар: Виктор.
// Пицца "Пепперони" - повар: Виктор.
// Суши "Филадельфия" - повар: Ольга.
// Суши "Калифорния" - повар: Ольга.
// Тирамису - повар: Дмитрий.
// Чизкейк - повар: Дмитрий.

// Заказы:
// Клиент Алексей заказал: Пиццу "Пепперони" и Тирамису.
// Клиент Мария заказала: Суши "Калифорния" и Пиццу "Маргарита".
// Клиент Ирина заказала: Чизкейк.

const cooks = new Map();
cooks.set("Пицца", "Виктор")
    .set("Суши", "Ольга")
    .set("Десерт", "Дмитрий");

const dishes = new Map();
dishes.set("Маргарита", "Пицца")
    .set("Пепперони", "Пицца")
    .set("Филадельфия", "Суши")
    .set("Калифорния", "Суши")
    .set("Тирамису", "Десерт")
    .set("Чизкейк", "Десерт");

const client1 = { name: "Алексей" };
const order01 = new Set();
order01.add("Пепперони").add("Тирамису");

const client2 = { name: "Мария" };
const order02 = new Set();
order02.add("Калифорния").add("Маргарита");

const client3 = { name: "Ирина" };
const order03 = new Set();
order03.add("Чизкейк");

const orders = new Map()
orders.set(client1, order01)
    .set(client2, order02)
    .set(client3, order03)


console.log("Блюда и их повара:");
for (let key of dishes.keys()) {
    console.log(`${dishes.get(key)} "${key}" - повар: ${cooks.get(dishes.get(key))}`);
}

console.log("Заказы:");
for (let order of orders.keys()) {
    console.log(`Клиентом ${order.name} заказано:`);
    for (let key of orders.get(order)) {
        console.log(`${dishes.get(key)} "${key}" - повар: ${cooks.get(dishes.get(key))}`);
    }
}