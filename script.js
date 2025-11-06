const treesData = [
  {
    id: 1,
    name: "Mango Tree",
    image: "images/mango.jpg", // Replace with your mango tree image path
    description:
      "A fast-growing tropical tree that produces delicious, juicy mangoes during summer. Its dense green foliage provides great shade.",
    category: "Fruit Trees",
    price: 500,
  },
  {
    id: 2,
    name: "Guava Tree",
    image: "images/guava.jpg",
    description:
      "Guava tree produces fragrant green fruit rich in Vitamin C. It is a hardy tree that adapts well to various climates.",
    category: "Fruit Trees",
    price: 500,
  },
  {
    id: 3,
    name: "Neem Tree",
    image: "images/neem.jpg",
    description:
      "Neem tree has medicinal properties and is used in traditional medicine. Grows well in tropical and semi-tropical regions.",
    category: "Medicinal Trees",
    price: 500,
  },
  {
    id: 4,
    name: "Bamboo",
    image: "images/bamboo.jpg",
    description:
      "Bamboo is a fast-growing grass plant that can be harvested sustainably. Used in construction and decoration.",
    category: "Bamboo",
    price: 500,
  },
  {
    id: 5,
    name: "Rose Tree",
    image: "images/rose.jpg",
    description:
      "Known for its beautiful blooms that brighten up any garden or landscape.",
    category: "Flowering Trees",
    price: 500,
  },
  {
    id: 6,
    name: "Oak Tree",
    image: "images/oak.jpg",
    description:
      "A classic shade tree providing a large canopy and excellent habitat for wildlife.",
    category: "Shade Trees",
    price: 500,
  },
];

// DOM Elements
const treesGrid = document.querySelector(".trees-grid");
const categoryButtons = document.querySelectorAll(".category-btn");
const cartList = document.getElementById("cart-list");
const cartTotal = document.getElementById("cart-total");

const modal = document.getElementById("modal-overlay");
const modalCloseBtn = document.getElementById("modal-close");
const modalImage = document.getElementById("modal-image");
const modalTitle = document.getElementById("modal-title");
const modalDescription = document.getElementById("modal-description");
const modalCategory = document.getElementById("modal-category");
const modalPrice = document.getElementById("modal-price");

let cart = [];
let activeCategory = "All Trees";
