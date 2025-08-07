document.addEventListener("DOMContentLoaded", () => {
    display();
})

function display(){
    let cart = JSON.parse(localStorage.getItem("cart")) || [];
    let cartItem = document.getElementById("cartItems");
    let totalPrice=document.getElementById("totalPrice");

    let total=0;
    if(cart.length===0){
        cartItem.innerHTML=`<p id="empty-msg">your cart is empty></p>`;
        totalPrice.innerHTML="";
        return;
    }
    
    cartItem.innerHTML=""
    cart.map((v,index) => {
        total+=v.price;
        cartItem.innerHTML += `
        <div id="main-cart">
            <div id="citems" class="cart-item">
                <div class="cart-item-image">
                    <a href="./viewMore.html">
                        <img src="${v.images[0]}" alt="${v.title}">
                    </a>
                </div>
            <div class="cart-item-details">
                <h3>${v.title}</h3>
                <h2><strong>Brand:</strong> ${v.brand}</h2>
                <h2><strong>Description:</strong> ${v.description}</h2>
                <h2><strong>Price:</strong> $${v.price}</h2>
                <h2><strong>Shipping:</strong> ${v.shippingInformation}</h2>
                <h2><strong>Warranty:</strong> ${v.warrantyInformation}</h2>
                <h2><strong>Return Policy:</strong> ${v.returnPolicy}</h2>

                <div id="ad-no">
                <button id="sub" onclick="increment(${index})">-</button>
                <button>${quantity}</button>
                <button id="add">+</button>
                </div>
                <h2><strong>Total: $<span class="item-total">${(v.price * 1)}</span></strong></h2>
                
                <button id="remove" onclick="remove(${index})">REMOVE</button>
            </div>
            </div>
        </div>
        `
        document.getElementById("remove").addEventListener("click",(index)=>{
                remove(index);
        })

        // // document.getElementById("sub").addEventListener("click",()=>{
        // //     increment(quantity);
            
        // //  });
        //  document.getElementById("add").addEventListener("click",()=>{
        //     decrement(quantity);
        //  });
        
    })
    totalPrice.innerHTML=`<h2>Total Price: $ ${total.toFixed(2)}</h2>`
}
function remove(product){
    let cart=JSON.parse(localStorage.getItem("cart")) || []
    cart.splice(product,1);
    localStorage.setItem("cart",JSON.stringify(cart));
    display();
 } 

 function increment(index){
        let cart=JSON.parse(localStorage.getItem("cart"))||[]
        cart[index].quantity;
 }
 function decrement(quantity){
        quantity = quantity-1;
 }


//  <div id="price-det">
//                     <h1>PRICE DETAILS</h1>
//                     <h3>price: ${v.price}</h3>

//                     <hr>
//                     <i class="fa-solid fa-shield-heart">Safe and Secure Payments.Easy returns.100% Authentic products.</i>
//             </div>

// const quantityButtons = document.querySelectorAll('.quantity button');

// quantityButtons.forEach(button => {
//     button.addEventListener('click', (e) => {
//         const quantitySpan = e.target.parentElement.querySelector('span');
//         const quantity = parseInt(quantitySpan.textContent);
//         const price = parseFloat(e.target.parentElement.previousElementSibling.textContent);

//         if (e.target.textContent === '+') {
//             quantitySpan.textContent = quantity + 1;
//         } else if (quantity > 1) {
//             quantitySpan.textContent = quantity - 1;
//         }

//         // Update total price (implement this logic)
//     });
// });
