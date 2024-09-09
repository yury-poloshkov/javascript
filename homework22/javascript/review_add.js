import { saveReview } from "./review.js";

const btnAddReview = document.querySelector(".review_save_btn");

btnAddReview.addEventListener("click", (event) => {
    event.preventDefault();
    const productName = document
        .querySelector(".review_product_name")
        .value.trim();
    const productReview = document.querySelector(".review_text").value.trim();
    if (!productName || !productReview) {
        alert("Заполните все поля формы!");
        throw new Error("ERROR: data missing");
    } else {
        saveReview(productName, productReview);
        window.location.href = "./index.html";
    }
});
