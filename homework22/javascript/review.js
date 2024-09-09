function readReviews(key) {
    // let reviews = new Map();
    return localStorage.getItem("reviews")
        ? new Map(JSON.parse(localStorage.getItem("reviews")))
        : new Map();
    // return reviews;
}

function saveReview(productName, productReview) {
    let reviews = readReviews("reviews");
    // let reviews = new Map();
    // if (localStorage.getItem("reviews")) {
    //     reviews = new Map(JSON.parse(localStorage.getItem("reviews")));
    if (reviews.get(productName) != null) {
        reviews.get(productName).push(productReview);
    } else {
        reviews.set(productName, [productReview]);
    }
    // } else {
    //     reviews.set(productName, [productReview]);
    // }
    localStorage.setItem(
        "reviews",
        JSON.stringify(Array.from(reviews.entries()))
    );
}

export { saveReview };
