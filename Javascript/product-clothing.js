const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Clothing/C1.jpeg",
      name: "Brown Oversized Cardigan",
      price: "Rp 210.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Clothing/C2.jpeg",
      name: "Folkfore brownie Outer",
      price: "Rp 155.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Clothing/C3.jpeg",
      name: "Casual Strip Shirt",
      price: "Rp 120.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Clothing/C4.jpeg",
      name: "Daisy baloon top",
      price: "Rp 160.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Clothing/C5.jpeg",
      name: "Yellow Basic T-shirt",
      price: "Rp 100.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Clothing/C6.jpeg",
      name: "Chupa Chups T-Shirt",
      price: "Rp 100.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Clothing/C7.jpeg",
      name: "A-Line Jeans Dress",
      price: "Rp 190.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Clothing/C8.jpeg",
      name: "Blue Denim Tennis Skirt",
      price: "Rp 105.000"
    },
    {
      id: "product9",
      itemSrc: "./Image/Clothing/C9.jpeg",
      name: "Milky leather midi skirt",
      price: "Rp 215.000"
    },
    {
      id: "product10",
      itemSrc: "./Image/Clothing/C10.jpeg",
      name: "Denim Short Skirt",
      price: "Rp 160.000"
    },
    {
      id: "product11",
      itemSrc: "./Image/Clothing/C11.jpeg",
      name: "Sky Blue Floral dress",
      price: "Rp 180.000"
    },
    {
      id: "product12",
      itemSrc: "./Image/Clothing/C12.jpeg",
      name: "Jenica smocked dress",
      price: "Rp 160.000"
    },
    {
      id: "product13",
      itemSrc: "./Image/Clothing/C13.jpeg",
      name: "Summer Cherry Top",
      price: "Rp 155.000"
    },
    {
      id: "product14",
      itemSrc: "./Image/Clothing/C14.jpeg",
      name: "White Angel Midi dress",
      price: "Rp 170.000"
    },
    {
      id: "product15",
      itemSrc: "./Image/Clothing/C15.jpeg",
      name: "Denim Off-Shoulder dress",
      price: "Rp 195.000"
    },
    {
      id: "product16",
      itemSrc: "./Image/Clothing/C16.jpeg",
      name: "Neonrina green set",
      price: "Rp 265.000"
    },
    {
      id: "product17",
      itemSrc: "./Image/Clothing/C17.jpeg",
      name: "Highwaist loose Jeans",
      price: "Rp 220.000"
    },
    {
      id: "product18",
      itemSrc: "./Image/Clothing/C18.jpeg",
      name: "Backflip Loose Jeans",
      price: "Rp 250.000"
    },
    {
      id: "product19",
      itemSrc: "./Image/Clothing/C19.jpeg",
      name: "Neo baggy Jeans",
      price: "Rp 230.000"
    },
    {
      id: "product20",
      itemSrc: "./Image/Clothing/C20.jpeg",
      name: "ighwaist Level-up Jeans",
      price: "Rp 205.000"
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
            <button class="btn-co"><a href="https://kampus-merdeka-software-engineering.github.io/FE-Jayapura-5/Layout%20Checkout.HTML">Buy</a></button>
        </div>
    `;

    parentProduct.appendChild(productCard);
});