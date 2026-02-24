
// LEVEL 5 – MINI PROJECT – PRODUCT DASHBOARD

// Fetch products and display:
// - Title
// - Image
// - Price

// Add:
// - Loading message
// - Error message
// - Total product count

// Bonus: Sort by price (Low to High)
// ---------- Create UI using JavaScript ----------
document.body.style.fontFamily = "Arial";

let heading = document.createElement("h2");
heading.innerText = "Product Dashboard";

let status = document.createElement("p"); // loading / error
let countText = document.createElement("h3");

let container = document.createElement("div");
container.style.display = "grid";
container.style.gridTemplateColumns = "repeat(3, 1fr)";
container.style.gap = "20px";

document.body.append(heading, status, countText, container);


// ---------- Loading Message ----------
status.innerText = "Loading products...";


// ---------- Fetch Products ----------
fetch("https://fakestoreapi.com/products")
  .then(res => {
      if (!res.ok) throw new Error("API Error");
      return res.json();
  })
  .then(products => {

      //Sort by price (Low → High)
      products.sort((a, b) => a.price - b.price);

      // remove loading
      status.innerText = "";

      // total count
      countText.innerText = `Total Products: ${products.length}`;

      // display products
      products.forEach(product => {

          let card = document.createElement("div");
          card.style.border = "1px solid #ccc";
          card.style.padding = "10px";
          card.style.textAlign = "center";

          let img = document.createElement("img");
          img.src = product.image;
          img.style.width = "120px";
          img.style.height = "120px";

          let title = document.createElement("p");
          title.innerText = product.title;

          let price = document.createElement("h4");
          price.innerText = `₹ ${product.price}`;

          card.append(img, title, price);
          container.appendChild(card);
      });
  })
  .catch(() => {
      status.innerText = "Error loading products.";
  });