const pizzas = [
  {
    name: "Маргарита",
    price: 150,
    img: "https://i.imgur.com/1yY5Z6F.jpg"
  },
  {
    name: "Пепероні",
    price: 190,
    img: "https://i.imgur.com/V8xVJvE.jpg"
  },
  {
    name: "4 сири",
    price: 210,
    img: "https://i.imgur.com/6hZ6y1p.jpg"
  }
];

const cardsContainer = document.getElementById("cards");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");
const loginBtn = document.getElementById("loginBtn");

let isAuthorized = false;

// Генерація карток
function renderCards() {
  cardsContainer.innerHTML = "";
  pizzas.forEach(pizza => {
    cardsContainer.insertAdjacentHTML("beforeend", `
      <div class="card">
        <img src="${pizza.img}">
        <h3>${pizza.name}</h3>
        <div class="price">${pizza.price} грн</div>
        <button class="buy-btn">Купити</button>
      </div>
    `);
  });
}

renderCards();

// Делегування подій
cardsContainer.addEventListener("click", (event) => {
  const buyBtn = event.target.closest(".buy-btn");
  if (!buyBtn) return;

  if (!isAuthorized) {
    modal.classList.remove("hidden");
  } else {
    const card = buyBtn.closest(".card");
    const name = card.querySelector("h3").innerText;
    alert("Піца "" + name + "" додана до кошика!");
  }
});

// Авторизація
loginBtn.addEventListener("click", () => {
  isAuthorized = true;
  modal.classList.add("hidden");
  alert("Ви успішно авторизувались!");
});

closeModal.addEventListener("click", () => {
  modal.classList.add("hidden");
});