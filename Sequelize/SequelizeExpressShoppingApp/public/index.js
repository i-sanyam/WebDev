function createProductCard(product) {
	return $(`
    <div class="col-3 card m-4">
        <div class="card-body">
            <h4 id="product-name" class="card-title">${product.name}</h4>
            <p id="product-manufacturer">by ${product.manufacturer}</p>
            <div class="row">
                <div id="product-price" class="col m-1">Rs.${product.price}</div>
                <button class="btn btn-primary col">Buy</button>
            </div>
        </div>
    </div>
    `);
}

function fetchProducts(done) {
	$.get("/api/products", (data) => {
		done(data);
	});
}

$(() => {
	let productList = $("#product-list");
	fetchProducts((products) => {
		productList.empty();
		for (product of products) {
			productList.append(createProductCard(product));
		}
	});
});
