// Tree Data (Based on screenshot style)
const products = [
    { id: 1, name: "Mango Tree", category: "Fruit Trees", price: 500, desc: "A fast-growing tropical tree that produces delicious juicy mangoes.", img: "https://via.placeholder.com/150/90EE90/000000?text=Mango" },
    { id: 2, name: "Guava Tree", category: "Fruit Trees", price: 300, desc: "Produces sweet fruits rich in Vitamin C.", img: "https://via.placeholder.com/150/90EE90/000000?text=Guava" },
    { id: 3, name: "Teak Tree", category: "Timber Trees", price: 1200, desc: "High quality wood, great for long term investment.", img: "https://via.placeholder.com/150/90EE90/000000?text=Teak" },
    { id: 4, name: "Neem Tree", category: "Medicinal Trees", price: 200, desc: "Known for its medicinal and air purifying properties.", img: "https://via.placeholder.com/150/90EE90/000000?text=Neem" },
    { id: 5, name: "Bamboo", category: "Bamboo", price: 150, desc: "Fast growing and versatile plant for decoration.", img: "https://via.placeholder.com/150/90EE90/000000?text=Bamboo" },
    { id: 6, name: "Rose Plant", category: "Flowering Trees", price: 250, desc: "Beautiful flowers to enhance your garden beauty.", img: "https://via.placeholder.com/150/90EE90/000000?text=Rose" }
];

// Categories
const categories = ["All Trees", "Fruit Trees", "Medicinal Trees", "Timber Trees", "Bamboo", "Flowering Trees"];
let cart = [];

// DOM Elements
const categoryList = document.getElementById("category-list");
const productGrid = document.getElementById("products-grid");
const spinner = document.getElementById("loading-spinner");
const cartContainer = document.getElementById("cart-items-container");
const totalElement = document.getElementById("cart-total");
const modal = document.getElementById("product-modal");

// Initialize
window.onload = () => {
    loadCategories();
    displayProducts("All Trees");
};

// 1. Load Category Buttons
function loadCategories() {
    categories.forEach(cat => {
        const btn = document.createElement("button");
        btn.innerText = cat;
        btn.classList.add("cat-btn");
        if (cat === "All Trees") btn.classList.add("active");

        btn.addEventListener("click", () => {
            // Active state toggle
            document.querySelectorAll(".cat-btn").forEach(b => b.classList.remove("active"));
            btn.classList.add("active");
            displayProducts(cat);
        });

        categoryList.appendChild(btn);
    });
}

// 2. Display Products (with simulated loader)
function displayProducts(category) {
    productGrid.innerHTML = "";
    spinner.classList.remove("hidden");

    setTimeout(() => {
        spinner.classList.add("hidden");
        
        const filtered = category === "All Trees" 
            ? products 
            : products.filter(p => p.category === category);

        filtered.forEach(product => {
            const card = document.createElement("div");
            card.classList.add("product-card");
            card.innerHTML = `
                <img src="${product.img}" alt="${product.name}">
                <h4 onclick="openModal(${product.id})">${product.name}</h4>
                <p>${product.desc}</p>
                <div class="price-row">
                    <span class="category-tag">${product.category}</span>
                    <span class="price-tag">৳${product.price}</span>
                </div>
                <button class="add-btn" onclick="addToCart(${product.id})">Add to Cart</button>
            `;
            productGrid.appendChild(card);
        });
    }, 500); // 0.5s loading time
}

// 3. Add to Cart Logic
function addToCart(id) {
    const product = products.find(p => p.id === id);
    cart.push(product);
    updateCartUI();
}

// 4. Update Cart Sidebar
function updateCartUI() {
    cartContainer.innerHTML = "";
    let total = 0;

    if (cart.length === 0) {
        cartContainer.innerHTML = "<p class='empty-msg'>Cart is empty</p>";
    } else {
        cart.forEach((item, index) => {
            total += item.price;
            const div = document.createElement("div");
            div.classList.add("cart-item");
            div.innerHTML = `
                <div>
                    <strong>${item.name}</strong><br>
                    <small>৳${item.price}</small>
                </div>
                <span class="remove-item" onclick="removeFromCart(${index})">×</span>
            `;
            cartContainer.appendChild(div);
        });
    }
    totalElement.innerText = "৳" + total;
}

// 5. Remove Item
function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartUI();
}

// 6. Modal Functions
function openModal(id) {
    const product = products.find(p => p.id === id);
    document.getElementById("modal-name").innerText = product.name;
    document.getElementById("modal-desc").innerText = product.desc;
    document.getElementById("modal-cat").innerText = product.category;
    document.getElementById("modal-price").innerText = "৳" + product.price;
    document.getElementById("modal-img").src = product.img;
    modal.style.display = "block";
}

document.querySelector(".close-btn").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if(e.target == modal) modal.style.display = "none"; };