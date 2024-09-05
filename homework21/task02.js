// Задание 2
// Вы разрабатываете систему отзывов для вашего веб-сайта. Пользователи могут оставлять отзывы,
// но чтобы исключить слишком короткие или слишком длинные сообщения, вы решаете установить некоторые ограничения.

// Создайте HTML-структуру с текстовым полем для ввода отзыва,
// кнопкой для отправки и контейнером, где будут отображаться отзывы.

// Напишите функцию, которая будет добавлять отзыв в контейнер с отзывами.
// Однако если длина введенного отзыва менее 50 или более 500 символов, функция должна генерировать исключение.

// При добавлении отзыва, он должен отображаться на странице под предыдущими отзывами, а не заменять их.

// const initialData = [
// {
// product: "Apple iPhone 13",
// reviews: [
// {
// id: "1",
// text: "Отличный телефон! Батарея держится долго.",
// },
// {
// id: "2",
// text: "Камера супер, фото выглядят просто потрясающе.",
// },
// ],
// },
// {
// product: "Samsung Galaxy Z Fold 3",
// reviews: [
// {
// id: "3",
// text: "Интересный дизайн, но дорогой.",
// },
// ],
// },
// {
// product: "Sony PlayStation 5",
// reviews: [
// {
// id: "4",
// text: "Люблю играть на PS5, графика на высоте.",
// },
// ],
// },
// ];

// Вы можете использовать этот массив initialData для начальной загрузки данных при запуске вашего приложения.

const initialData = [
    {
        product: "Apple iPhone 13",
        reviews: [
            {
                id: "1",
                text: "Отличный телефон! Батарея держится долго.",
            },
            {
                id: "2",
                text: "Камера супер, фото выглядят просто потрясающе.",
            },
        ],
    },
    {
        product: "Samsung Galaxy Z Fold 3",
        reviews: [
            {
                id: "3",
                text: "Интересный дизайн, но дорогой.",
            },
        ],
    },
    {
        product: "Sony PlayStation 5",
        reviews: [
            {
                id: "4",
                text: "Люблю играть на PS5, графика на высоте.",
            },
        ],
    },
];

const reviews = document.querySelector(".reviews");
let reviewsCounter = 0;

function showReviews() {
    initialData.forEach((product) => {
        const productArticle = document.createElement("article");
        productArticle.classList.add("item");
        reviews.insertAdjacentElement("beforeend", productArticle);

        const productName = document.createElement("h2");
        productName.textContent = product.product;
        productName.classList.add("item__name");
        productArticle.insertAdjacentElement("beforeend", productName);

        const reviewText = document.createElement("textarea");
        reviewText.classList.add("item__review");
        productArticle.insertAdjacentElement("beforeend", reviewText);

        const btnSendReview = document.createElement("button");
        btnSendReview.textContent = "Отправить";
        btnSendReview.classList.add("item__review_send");
        productArticle.insertAdjacentElement("beforeend", btnSendReview);

        product.reviews.forEach((review) => {
            const productReview = document.createElement("p");
            productReview.textContent = review.text;
            productReview.classList.add("item__reviews");
            productReview.id = review.id;
            productArticle.insertAdjacentElement("beforeend", productReview);
            reviewsCounter++;
        });
    });
}

function saveReview(newReview, previousReviewID) {
    reviewsCounter++;
    initialData.forEach((product) => {
        product.reviews.forEach((review) => {
            if (review.id == previousReviewID) {
                product.reviews.push({ id: reviewsCounter, text: newReview });
            }
        });
    });
}

showReviews();

reviews.addEventListener("click", (event) => {
    if (event.target.classList.contains("item__review_send")) {
        const newReview = event.target
            .closest("article")
            .querySelector("textarea").value;
        if (newReview.length >= 50 && newReview.length <= 500) {
            saveReview(newReview, event.target.closest("article").lastChild.id);
            reviews.innerHTML = "";
            showReviews();
        } else {
            alert(
                `ERROR: Unproper review length: too ${
                    newReview.length < 50 ? "short" : "long"
                }!`
            );
            throw new Error(
                `ERROR: Unproper review length: too ${
                    newReview.length < 50 ? "short" : "long"
                }!`
            );
        }
    }
});
