let cartCount = 0;

function addToCart() {
  cartCount++;
  document.getElementById("cartCount").innerText = cartCount;
}

function filterService(service) {
  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    if (service === "all") {
      card.style.display = "block";
    } else {
      card.style.display =
        card.getAttribute("data-service") === service
          ? "block"
          : "none";
    }
  });
}
