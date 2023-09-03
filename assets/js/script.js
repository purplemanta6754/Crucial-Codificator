// Función para abrir telegrafo virtual
function abrirTelegrafo() {
    // Obtener el ancho y alto de la pantalla
    const screenWidth = window.screen.width;
    const screenHeight = window.screen.height;

    // Definir las dimensiones de la ventana emergente
    const windowWidth = 400;
    const windowHeight = 285;

    // Calcular las coordenadas x e y para centrar la ventana emergente en la pantalla
    const windowX = (screenWidth - windowWidth) / 2;
    const windowY = (screenHeight - windowHeight) / 2;

    // Abrir la ventana emergente y centrarla en la pantalla
    window.open("telegrafo-virtual/index.html", "miVentana", `width=${windowWidth}, height=${windowHeight}, top=${windowY}, left=${windowX}`);

    console.log('Se ha abierto una nueva ventana para mostrar el telegrafo virtual')
}

const openModalLink = document.getElementById('openModalLink');

openModalLink.addEventListener('click', (event) => {
    event.preventDefault();
    modal.style.display = 'block';
    overlay.style.display = 'block';
});

function closeModal() {
    modal.style.display = 'none';
    overlay.style.display = 'none';
    location.reload()
}

closeModalButton.addEventListener('click', closeModal);

overlay.addEventListener('click', closeModal);
