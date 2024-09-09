function readReviews(key) {
    return localStorage.getItem(key) ? new Map(JSON.parse(localStorage.getItem(key))) : new Map();
}

function saveReview(productName, productReview) {
    let reviews = readReviews("reviews");
    if (reviews.get(productName) != null) {
        reviews.get(productName).push(productReview);
    } else {
        reviews.set(productName, [productReview]);
    }
    localStorage.setItem("reviews", JSON.stringify(Array.from(reviews.entries())));
}

export { readReviews, saveReview };
