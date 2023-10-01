const productData = [
    {
      id: "product1",
      itemSrc: "./Image/Bags/b1.jpeg",
      name: "Puffy White Bag",
      price: "Rp 350.000"
    },
    {
      id: "product2",
      itemSrc: "./Image/Bags/b2.jpeg",
      name: "Irish Blue Trapesium Bag",
      price: "Rp 410.000"
    },
    {
      id: "product3",
      itemSrc: "./Image/Bags/b3.jpeg",
      name: "Leon Hand Bag",
      price: "Rp 320.000"
    },
    {
      id: "product4",
      itemSrc: "./Image/Bags/b4.jpeg",
      name: "Kattie Mocca Bag",
      price: "Rp 360.000"
    },
    {
      id: "product5",
      itemSrc: "./Image/Bags/b5.jpeg",
      name: "Kuoka Sling Bag",
      price: "Rp 300.000"
    },
    {
      id: "product6",
      itemSrc: "./Image/Bags/b6.jpeg",
      name: "Dusty Dumpling Hand Bag",
      price: "Rp 380.000"
    },
    {
      id: "product7",
      itemSrc: "./Image/Bags/b7.jpeg",
      name: "Hyori Messengger Bag",
      price: "Rp 290.000"
    },
    {
      id: "product8",
      itemSrc: "./Image/Bags/b8.jpeg",
      name: "Beliana Black Sling Bag",
      price: "Rp 310.000"
    },
    {
    id: "product9",
      itemSrc: "./Image/Bags/b9.jpeg",
      name: "Flippy Hand Bag",
      price: "Rp 330.000"
    },
    {
        id: "product10",
      itemSrc: "./Image/Bags/b10.jpeg",
      name: "Round Vintage Hand Bag",
      price: "Rp 300.000"
    },
    {
        id: "product11",
      itemSrc: "./Image/Bags/b11.jpeg",
      name: "Poppy Leather Tote Bag",
      price: "Rp 285.000"
    },
    {
        id: "product12",
      itemSrc: "./Image/Bags/b12.jpeg",
      name: "Sunflowers Hand Bag",
      price: "Rp 340.000"
    },
    {
      id: "product13",
    itemSrc: "./Image/Bags/b13.jpeg",
    name: "Light Blue Suede Sling Bag",
    price: "Rp 290.000"
  },
  {
    id: "product14",
  itemSrc: "./Image/Bags/b14.jpeg",
  name: "Rosie Vintage Hand Bag",
  price: "Rp 330.000"
},
{
  id: "product15",
itemSrc: "./Image/Bags/b15.jpeg",
name: "Lavender Leather Hand Bag",
price: "Rp 350.000"
},
{
  id: "product16",
itemSrc: "./Image/Bags/b16.jpeg",
name: "Pinky star Sling Bag",
price: "Rp 300.000"
},
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
            <button class="btn-co"><a href="https://kampus-merdeka-software-engineering.github.io/front-end-capstone-project-section-jayapura-group-5/Layout%20Checkout.HTML">Buy</a></button>
        </div>
    `;

    parentProduct.appendChild(productCard);
});