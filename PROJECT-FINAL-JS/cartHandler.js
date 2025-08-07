
let cart = [];

function addToCart(product) {
    let existingProduct = cart.find(item => item.id === product.id);
    if (existingProduct) {
        existingProduct.quantity += 1;
    } else {
        product.quantity = 1;
        cart.push(product);
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    alert('Product added to cart!');
}

function viewCart() {
    cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log("Cart Contents:", cart);
}

// Example usage
// addToCart({id: 1, name: "Product A", price: 100});
// viewCart();
