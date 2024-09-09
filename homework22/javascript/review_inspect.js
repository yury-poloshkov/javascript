import { readReviews } from "./review.js";

const productsSection = document.querySelector(".products");
let reviews = readReviews("reviews");

function loadProducts() {
    if (reviews != null) {
        productsSection.innerHTML = "";
        reviews.forEach((reviews_texts, product) => {
            if (reviews_texts.length != 0) {
                const productDetails = document.createElement("details");
                productsSection.insertAdjacentElement("beforeend", productDetails);

                const productSummary = document.createElement("summary");
                productSummary.textContent = product;
                productDetails.insertAdjacentElement("beforeend", productSummary);

                let index = 0;
                reviews_texts.forEach((review) => {
                    const productReview = document.createElement("p");
                    productReview.classList.add("products");
                    productReview.classList.add("products__review");
                    productReview.textContent = review;
                    productDetails.insertAdjacentElement("beforeend", productReview);

                    const btnDeleteReview = document.createElement("button");
                    btnDeleteReview.textContent = "Удалить";
                    btnDeleteReview.dataset.index = index++;
                    btnDeleteReview.classList.add("products__btnDelete");
                    productDetails.insertAdjacentElement("beforeend", btnDeleteReview);
                });
            }
        });
    }
}

loadProducts();

productsSection.addEventListener("click", (event) => {
    if (event.target.classList.contains("products__btnDelete")) {
        const product = event.target.closest("details").querySelector("summary").textContent;
        const reviewIndex = event.target.dataset.index;
        reviews.get(product).splice(reviewIndex, 1);
        localStorage.setItem("reviews", JSON.stringify(Array.from(reviews.entries())));
        loadProducts();
    }
});
