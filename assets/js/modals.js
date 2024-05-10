const openModalLink = document.getElementById("openModalLink");

openModalLink.addEventListener("click", (event) => {
  event.preventDefault();
  modal.style.display = "block";
  overlay.style.display = "block";
});

function closeModal() {
  modal.style.display = "none";
  overlay.style.display = "none";
  location.reload();
}

closeModalButton.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);
