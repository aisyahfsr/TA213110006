const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Shoes/S1.jpeg",
      name: "Kara White Sneakers",
      price: "Rp 275.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Shoes/S2.jpeg",
      name: "Catherine Strips High Heels",
      price: "Rp 250.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Shoes/S3.jpeg",
      name: "Liliane Suede Wedges",
      price: "Rp 310.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Shoes/S4.jpeg",
      name: "Pinkish Suede Heels",
      price: "Rp 300.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Shoes/S5.jpeg",
      name: "White Basic High Boots",
      price: "Rp 325.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Shoes/S6.jpeg",
      name: "Lavender Sneakers",
      price: "Rp 285.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Shoes/S7.jpeg",
      name: "Aero Artsy Shoes",
      price: "Rp 305.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Shoes/S8.jpeg",
      name: "Brown Ribbon High Heels",
      price: "Rp 350.000"
    },
    {
      id: "product9",
      itemSrc: "./Image/Shoes/S9.jpeg",
      name: "Eden Ribbon Heels",
      price: "Rp 380.000"
    },
    {
      id: "product10",
      itemSrc: "./Image/Shoes/S10.jpeg",
      name: "Candy Sneakers",
      price: "Rp 340.000"
    },
    {
      id: "product11",
      itemSrc: "./Image/Shoes/S11.jpeg",
      name: "Strada Pink Shoes",
      price: "Rp 285.000"
    },
    {
      id: "product12",
      itemSrc: "./Image/Shoes/S12.jpeg",
      name: "Reddish Docmart",
      price: "Rp 250.000"
    },
    {
      id: "product13",
      itemSrc: "./Image/Shoes/S13.jpeg",
      name: "Low Brown Boots",
      price: "Rp 330.000"
    },
    {
      id: "product14",
      itemSrc: "./Image/Shoes/S14.jpeg",
      name: "Daisy Pattern Sneakers",
      price: "Rp 320.000"
    },
    {
      id: "product15",
      itemSrc: "./Image/Shoes/S15.jpeg",
      name: "High cut Delta Shoes",
      price: "Rp 380.000"
    },
    {
      id: "product16",
      itemSrc: "./Image/Shoes/S16.jpeg",
      name: "Batik Pattern Sneakers",
      price: "Rp 365.000"
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
            <button class="btn-co"><a href="/front-end-capstone-project-section-jayapura-group-5/Layout Checkout.Html">Buy</a></button>
        </div>
    `;

    parentProduct.appendChild(productCard);
});