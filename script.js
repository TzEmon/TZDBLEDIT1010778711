const searchInput = document.getElementById("search");
const imageCards = document.querySelectorAll(".image-card");

searchInput.addEventListener("input", () => {
  const searchTerm = searchInput.value.toLowerCase();

  imageCards.forEach(card => {
    const name = card.getAttribute("data-name").toLowerCase();

    if (name.includes(searchTerm)) {
      card.style.display = "";
    } else {
      card.style.display = "none";
    }
  });
});
