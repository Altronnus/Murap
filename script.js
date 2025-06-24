const list = document.getElementById("product-list");

demoProducts.forEach(product => {
  const card = document.createElement("div");
  card.className = "product-card";

  card.innerHTML = `
    <div class="product-name">${product.name}</div>
    <div class="product-price">💰 Опт: ${product.opt_price} сом</div>
    <div class="product-price">🏷 Розница: ${product.retail_price} сом</div>
  `;

  list.appendChild(card);
});
