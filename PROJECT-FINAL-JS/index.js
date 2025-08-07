// let emp={
//     name:"anish",
//     age:20
// }

// console.log(emp.name);
// console.log(emp);

// let b=JSON.stringify(emp)
// console.log(b);
// let c=JSON.parse(b)
// console.log(c);
// let {age,name}=emp;
// console.log(age);
// console.log(name);

let products = [];

let fetchdata = async () => {
    let res = await fetch("https://dummyjson.com/products");
    let data = await res.json();
    // console.log(data);
    products = data.products;
    // console.log(products);
    localStorage.setItem("products", JSON.stringify(products));
    fetchProducts(products);
}

function fetchProducts(products) {
    let product = "";
    products.map((val)=> {
        product +=`

           <div id="prod">

            <div id="crd-img">
            <img onclick="viewMore()" src="${val.images[0]}">
            </div>

            <h3>${val.title}</h3>

            <h3>From $ ${val.price}<h3>

            <div class="card-btn">
            <button>Cart</button>
            <button class="viewmore" onclick="viewMore(${val.id})">viewMore</button>
            </div>

           </div>
            
           `
    });
    document.getElementById("cards").innerHTML = product;
    }

// fetchdata()

                                      //------------------- for search bar ----------------------------//
function searchItem(event){
    // alert("hello")
    let selectitem=event.target.value.toLowerCase();
    let filterProduct=products.filter(
        (product)=>
        product.title.toLowerCase().includes(selectitem) ||
        product.category.toLowerCase().includes(selectitem)
    );
    fetchProducts(filterProduct);
    // viewMore(product);
}
document.getElementById("input-btn").addEventListener("input",searchItem);


                                  //------------------------ view more button ----------------------------//
function viewMore(productId){ 
    localStorage.setItem("selectedProductId",productId);
    window.location.href="viewmore.html";
}
fetchdata()


