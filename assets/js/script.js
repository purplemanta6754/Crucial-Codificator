// Obtener referencia a los botones
var myButtons = document.querySelectorAll('.btn');

// Función para quitar las clases de animación después de 2 segundos
function quitarClases(element) {
  element.classList.remove('animate__animated', 'animate__fadeIn');
}

// Agregar eventos de clic a los botones
myButtons.forEach(function(button) {
  button.addEventListener('click', function() {
    // Agregar las clases de animación al botón
    button.classList.add('animate__animated', 'animate__fadeIn');
    
    // Después de 3 segundos, quitar las clases de animación
    setTimeout(function() {
      quitarClases(button);
    }, 3000);
  });
});

// Después de 2 segundos, quitar las clases de animación (si los botones aún las tienen)
setTimeout(function() {
  myButtons.forEach(function(button) {
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
myAnchors.forEach(function(button) {
  button.addEventListener('click', function() {
    // Agregar las clases de animación al botón
    button.classList.add('animate__animated', 'animate__fadeIn');
    
    // Después de 3 segundos, quitar las clases de animación
    setTimeout(function() {
      quitarClases(button);
    }, 3000);
  });
});

// Después de 2 segundos, quitar las clases de animación (si los botones aún las tienen)
setTimeout(function() {
  myAnchors.forEach(function(button) {
    quitarClases(button);
  });
}, 2000);
