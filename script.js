const productList = document.getElementById("product-list");

function renderProducts(data) {
  productList.innerHTML = "";
  data.forEach((product) => {
    const card = document.createElement("div");
    card.className = "card";

    card.innerHTML = `
      <img src="${product.image}" alt="${product.name}" />
      <h3>${product.name}</h3>
      <div class="price">💰 ${product.price} сом</div>
      <button class="btn">🛒 В корзину</button>
    `;

    productList.appendChild(card);
  });
}

renderProducts(products);
