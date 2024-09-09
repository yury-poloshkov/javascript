function saveReview(productName, productReview) {
    const reviews = new Map();
    reviews.set(JSON.parse(localStorage.getItem("reviews")));
    reviews.set(productName, productReview);
    console.log(reviews);
    localStorage.setItem("reviews", JSON.stringify(reviews));
}

export { saveReview };
