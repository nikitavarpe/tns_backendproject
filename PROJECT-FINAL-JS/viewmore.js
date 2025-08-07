document.addEventListener("DOMContentLoaded", () => {
    let selectedProductId = localStorage.getItem("selectedProductId");
    let products = JSON.parse(localStorage.getItem("products"));
    let productdeatils = document.getElementById("view");
    let productReview = document.getElementById("review");
    

    if (products && selectedProductId) {
        let selectedProduct = products.find(
            (product) => product.id == selectedProductId
        )
        let customer_rev="";

        selectedProduct.reviews.map(v=>{
            customer_rev+=`
                            <div class="rating" style="width:50px;">
                                <span class="rating-value">${v.rating}</span>
                                <span class="rating-star">★</span>
                            </div>
                                    <div><span style="color:green; font-size:25px;">${"★".repeat(v.rating)}${"☆".repeat(5-v.rating)}</span></div>
                                    <h3>${v.comment}</h3>
                                    <div id="rev-name">
                                    <h3>🙎🏻‍♂️ ${v.reviewerName}</h3>
                                    &nbsp&nbsp
                                    <h3>DATE : ${v.date}</h3>
                                    </div>
                                    <br>
                                    <hr>  
            `
        })

        let total=selectedProduct.price+selectedProduct.price*(selectedProduct.discountPercentage/100)

        if (selectedProduct) {
           
            productdeatils.innerHTML = `
                                    <div id="view-page">
                                        <div id="prod-img">
                                        <img src="${selectedProduct.images[0]}">
                                        </div>

                                        <div id="content">
                                            <h1>${selectedProduct.title}</h1>
                                            <div class="rating">
                                                <span class="rating-value">${selectedProduct.rating}</span>
                                                <span class="rating-star">★</span>
                                            </div>
                                            <div id="discount"><h3>EXTRA ${selectedProduct.discountPercentage}% OFF</h3></div>
                                            <h3>$ ${selectedProduct.price} <del>$${Math.ceil(total)}</del></h3>
                                            <h3>Category :${selectedProduct.category}</h3>
                                            <h3>REMAINING: ${selectedProduct.stock}</h3>
                                            <h3>DESCRIPTION : ${selectedProduct.description}</h3>
                                            <div id="dimension">
                                            <h3>Product Details</h3>
                                            <h3>WIDTH : ${selectedProduct.dimensions.width}</h3>
                                            <h3>HEIGHT : ${selectedProduct.dimensions.height}</h3>
                                            <h3>DEPTH : ${selectedProduct.dimensions.depth}</h3>
                                            </div>
                                            <h3>WARRANTY : ${selectedProduct.warrantyInformation}</h3>
                                            
                                            <button id="addToCart">ADD TO CART</button>
                                            <button id="backToHome">BACK HOME</button>
                                        </div>
            `;
            productReview.innerHTML= `
                                <div id="review-rat">
                                    <span id="rating-head"> Ratings & Reviews</span>
                                    <div id="review">
                                    <div id="cust-rev">${customer_rev}</div>
                                    </div>
                                </div>
            `;
            document.getElementById("addToCart").addEventListener("click",()=>{
                localStorage.setItem("cart",JSON.stringify(selectedProduct))
                addToCart(selectedProduct)});
            
            document.getElementById("backToHome").addEventListener("click",()=>{
                window.location.href="index.html";
            });
        }
        else{
            productdeatils.innerHTML="<p>Product not found</p>";
        }
    }else{
        productdeatils.innerHTML="<p>NO Product Selected</p>";
    }
})

function addToCart(selectedProduct){
    let  cart=JSON.parse(localStorage.getItem("cart")) || [];
    cart.push(selectedProduct);
    localStorage.setItem("cart",JSON.stringify(cart));
    alert("item added successfully");
}

function addToCart(id){
    let cart = JSON.parse(localStorage.getItem("cart")) || []
cart=[]
    if(cart.length > 0){
        console.log(cart)
        let status = false;
        cart.map((item)=>{
            if (item.product.id == selectProduct.id){
                item.quantity += 1;
                alert("Product exixts alrady quantity increse by 1")
                status = true;
            }
        }) 
            if(!status){
                cart.push({
                    product : selectProduct,
                    quantity : 1
                })
                alert("Product added")
            }
    }
    else{
        cart.push({
            product : selectProduct,
            quantity : 1
        })
        alert("Product added")
    }
    localStorage.setItem("cart1",JSON.stringify(cart))
}
