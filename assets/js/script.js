// Función para abrir telegrafo virtual
function abrirTelegrafo() {
  // Obtener el ancho y alto de la pantalla
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  // Definir las dimensiones de la ventana emergente
  const windowWidth = 1400;
  const windowHeight = 700;

  // Calcular las coordenadas x e y para centrar la ventana emergente en la pantalla
  const windowX = (screenWidth - windowWidth) / 2;
  const windowY = (screenHeight - windowHeight) / 2;

  // Abrir la ventana emergente y centrarla en la pantalla
  window.open("telegrafo-virtual/index.html", "miVentana", `width=${windowWidth}, height=${windowHeight}, top=${windowY}, left=${windowX}`);

  console.log ('Se ha abierto una nueva ventana para mostrar el telegrafo virtual')
}

// Función para abrir ventana de personalización
function establecerTema() {
  // Obtener el ancho y alto de la pantalla
  const screenWidth = window.screen.width;
  const screenHeight = window.screen.height;

  // Definir las dimensiones de la ventana emergente
  const windowWidth = 900;
  const windowHeight = 500;

  // Calcular las coordenadas x e y para centrar la ventana emergente en la pantalla
  const windowX = (screenWidth - windowWidth) / 2;
  const windowY = (screenHeight - windowHeight) / 2;

  // Abrir la ventana emergente y centrarla en la pantalla
  window.open("establecer-tema/index.html", "miVentana", `width=${windowWidth}, height=${windowHeight}, top=${windowY}, left=${windowX}`);

  console.log ('Se ha abierto una nueva ventana para mostrar el telegrafo virtual')
}