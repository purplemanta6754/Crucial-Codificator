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

// Obtener referencia a los botones
var myButtons = document.querySelectorAll('.btn');

// Función para quitar las clases de animación después de 2 segundos
function quitarClases(element) {
  element.classList.remove('animate__animated', 'animate__fadeIn');
}

// Agregar eventos de clic a los botones
myButtons.forEach(function (button) {
  button.addEventListener('click', function () {
    // Agregar las clases de animación al botón
    button.classList.add('animate__animated', 'animate__fadeIn');

    // Después de 3 segundos, quitar las clases de animación
    setTimeout(function () {
      quitarClases(button);
    }, 3000);
  });
});

// Después de 2 segundos, quitar las clases de animación (si los botones aún las tienen)
setTimeout(function () {
  myButtons.forEach(function (button) {
    quitarClases(button);
  });
}, 2000);

// Obtener referencia a las anclas y botones de la barra de navegación
var myAnchors = document.querySelectorAll('.navbar-btn');

// Función para quitar las clases de animación después de 2 segundos
function quitarClases(element) {
  element.classList.remove('animate__animated', 'animate__fadeIn');
}

// Agregar eventos de clic a los botones
myAnchors.forEach(function (button) {
  button.addEventListener('click', function () {
    // Agregar las clases de animación al botón
    button.classList.add('animate__animated', 'animate__fadeIn');

    // Después de 3 segundos, quitar las clases de animación
    setTimeout(function () {
      quitarClases(button);
    }, 3000);
  });
});

// Después de 2 segundos, quitar las clases de animación (si los botones aún las tienen)
setTimeout(function () {
  myAnchors.forEach(function (button) {
    quitarClases(button);
  });
}, 2000);
