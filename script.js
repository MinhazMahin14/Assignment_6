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

// Render trees by selected category
function renderTrees(category) {
  const filtered = category === "All Trees" ? treesData : treesData.filter(t => t.category === category);
  treesGrid.innerHTML = "";

  if (filtered.length === 0) {
    treesGrid.innerHTML = `<p style="color:#305032; font-weight:700; grid-column: 1/-1; text-align:center;">No trees available in this category.</p>`;
    return;
  }

  filtered.forEach(tree => {
    const card = document.createElement("article");
    card.className = "tree-card";
    card.tabIndex = 0;
    card.innerHTML = `
      <div aria-label="${tree.name} image" role="img" class="tree-image" style="background-image:url('${tree.image}');"></div>
      <h3 class="tree-name" data-id="${tree.id}" tabindex="0">${tree.name}</h3>
      <p class="tree-description">${tree.description}</p>
      <span class="tree-category">${tree.category}</span>
      <p class="tree-price">৳${tree.price}</p>
      <button class="add-cart-btn" data-id="${tree.id}">Add to Cart</button>
    `;
    treesGrid.appendChild(card);
  });
  attachCardListeners();
}

// Tree cards event listeners
function attachCardListeners() {
  document.querySelectorAll(".add-cart-btn").forEach(button => {
    button.onclick = () => addToCart(Number(button.dataset.id));
  });
  document.querySelectorAll(".tree-name").forEach(title => {
    const id = Number(title.dataset.id);
    title.onclick = () => openModal(id);
    title.onkeydown = e => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        openModal(id);
      }
    };
  });
}

// Add tree to cart or increase quantity
function addToCart(id) {
  const existing = cart.find(item => item.id === id);
  if (existing) existing.qty += 1;
  else {
    const tree = treesData.find(t => t.id === id);
    if (tree) cart.push({...tree, qty: 1});
  }
  renderCart();
}

// Remove tree from cart
function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  renderCart();
}

// Render cart UI
function renderCart() {
  cartList.innerHTML = "";
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const li = document.createElement("li");
    li.innerHTML = `
      <span>${item.name} ৳${item.price} × ${item.qty}</span>
      <button class="remove-btn" data-id="${item.id}" aria-label="Remove ${item.name} from cart">×</button>
    `;
    cartList.appendChild(li);
  });

  cartTotal.textContent = total;
  document.querySelectorAll(".remove-btn").forEach(btn => {
    btn.onclick = () => removeFromCart(Number(btn.dataset.id));
  });
}

// Open modal with full tree info
function openModal(id) {
  const tree = treesData.find(t => t.id === id);
  if (!tree) return;

  modalImage.src = tree.image;
  modalImage.alt = tree.name;
  modalTitle.textContent = tree.name;
  modalDescription.textContent = tree.description;
  modalCategory.textContent = tree.category;
  modalPrice.textContent = tree.price;

  modal.style.display = "flex";
  modalCloseBtn.focus();
}
// Close modal listeners
modalCloseBtn.onclick = () =>  (modal.style.display = "none");
modal.onclick = e => { if (e.target === modal) modal.style.display = "none"; };
window.onkeydown = e => { if (e.key === "Escape" && modal.style.display === "flex") modal.style.display = "none"; };

// Categories button event
categoryButtons.forEach(button => {
  button.onclick = () => {
    if (button.classList.contains("active")) return;
    categoryButtons.forEach(btn => btn.classList.remove("active"));
    button.classList.add("active");
    activeCategory = button.dataset.category;
    renderTrees(activeCategory);
  };
});

// Form submit with alert
document.getElementById("plant-tree-form").onsubmit = e => {
  e.preventDefault();
  alert("Thank you for your donation! Form can be integrated with backend.");
  e.target.reset();
};

// Initial tree load
renderTrees(activeCategory);
renderCart();