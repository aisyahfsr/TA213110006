const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Accessories/A1.jpeg",
      name: "Pentagon Bracelet Set",
      price: "Rp 290.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Accessories/A2.jpeg",
      name: "Simple pearl Bracelet",
      price: "Rp 260.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Accessories/A3.jpeg",
      name: "Hera Ring",
      price: "Rp 300.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Accessories/A4.jpeg",
      name: "Tear Drop Necklace",
      price: "Rp 360.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Accessories/A5.jpeg",
      name: "Siren Pearls Necklace",
      price: "Rp 400.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Accessories/A6.jpeg",
      name: "Milky way Jewelry Set",
      price: "Rp 480.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Accessories/A7.jpeg",
      name: "Rose pendant Necklace",
      price: "Rp 355.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Accessories/A8.jpeg",
      name: "Double Knot Bracelet",
      price: "Rp 320.000"
    },
    {
      id: "product9",
      itemSrc: "./Image/Accessories/A9.jpeg",
      name: "Vintage Brown Belt",
      price: "Rp 185.000"
    },
    {
      id: "product10",
      itemSrc: "./Image/Accessories/A10.jpeg",
      name: "Brownie Ring belt",
      price: "Rp 130.000"
    },
    {
      id: "product11",
      itemSrc: "./Image/Accessories/A11.jpeg",
      name: "Vienna Belt",
      price: "Rp 150.000"
    },
    {
      id: "product12",
      itemSrc: "./Image/Accessories/A12.jpeg",
      name: "Medusa Black Belt",
      price: "Rp 150.000"
    }
];

const parentProduct = document.getElementById('parent-product');

productData.forEach(product => {
    const productCard = document.createElement('div');
    productCard.classList.add('row');
    productCard.id = product.id;

    productCard.innerHTML = `
        <img src="${product.itemSrc}" alt="image">
        <div class="product-text">
            <h5>Hot</h5>
        </div>
        <div class="heart-icon">
            <i class="fa-regular fa-heart"></i>
        </div>
        <div class="ratting">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
        </div>
        <div class="price">
            <h4>${product.name}</h4>
            <p>${product.price}</p>
            <button class="btn-co"><a href="Layout Checkout.Html">Buy</a></button>
        </div>
    `;

    parentProduct.appendChild(productCard);
});