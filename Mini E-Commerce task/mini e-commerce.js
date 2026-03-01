const container = document.getElementById("productContainer");
const searchInput = document.getElementById("searchInput");
const categoryFilter = document.getElementById("categoryFilter");
const cartCount = document.getElementById("cartCount");

let products = [];
let cart = [];

// ---------- FETCH API ----------
fetch("https://fakestoreapi.com/products")
    .then(res => res.json())
    .then(data => {
        products = data;
        renderProducts(products);
    });

// ---------- RENDER FUNCTION ----------
function renderProducts(list) {

    container.innerHTML = "";

    list.map(product => {

        const card = document.createElement("div");
        card.className = "card";

        card.innerHTML = `
            <img src="${product.image}">
            <h4 id="title">${product.title}</h4>
            <p><b>$ ${product.price}</b></p>
            <p>${product.category}</p>
            <p>⭐ ${product.rating.rate}</p>
            <button id="add">Add to Cart</button>
        `;

        // ADD TO CART
        card.querySelector("button")
            .addEventListener("click", () => addToCart(product));

        container.appendChild(card);
    });
}

// ---------- CART SYSTEM ----------
function addToCart(product){

    // prevent duplicate
    const exists = cart.some(item => item.id === product.id);

    if(!exists){
        cart.push({...product, qty:1});
    }else{
        const item = cart.find(i => i.id === product.id);
        item.qty++;
    }

    cartCount.textContent = cart.length;
    alert("Product Added Successfully");
}

// ---------- SEARCH ----------
searchInput.addEventListener("input", () => {

    const value = searchInput.value.toLowerCase();

    const filtered = products.filter(p =>
        p.title.toLowerCase().includes(value)
    );

    renderProducts(filtered);
});

// ---------- CATEGORY FILTER ----------
categoryFilter.addEventListener("change", () => {

    const category = categoryFilter.value;

    if(category === "all"){
        renderProducts(products);
        return;
    }

    const filtered = products.filter(
        p => p.category === category
    );

    renderProducts(filtered);
});