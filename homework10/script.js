const products = JSON.parse(productsData);
const productsCategories = new Set(products.map(element => element.category));

const catalogue = document.querySelector('.catalogue');

productsCategories.forEach(element => {
    catalogue.insertAdjacentHTML('beforeend', `
        <section class="catalogue__category">
            <h2 class="catalogue__category-header">${element.toUpperCase()}</h2>
            <div class="catalogue__product-box ${element.toLowerCase().replace("'", "").replace(' ', '-')}"></div>
        </section>
    `);
});

products.forEach(product => {
    document.querySelector(`.${product.category.toLowerCase().replace("'", "").replace(' ', '-')}`).insertAdjacentHTML('beforeend', `
            <article class="product">
                <img src="${product.image}" alt="photo" class="product__image"/>
                <h3 class="product__title">${product.title}</h3>
                <p class="product__description">${product.description}</p>
                <p class="product__price">Price: $${product.price}</p>
                <p class="product__id">Product ID: ${product.id}</p>
                <p class="product__rating">Product rating: ${product.rating.rate}, Count: ${product.rating.count}</p>
            </article>
    `);
});
