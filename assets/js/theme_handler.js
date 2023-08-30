const themeButtons = document.querySelectorAll('.btn-theme');

themeButtons.forEach(button => {
    button.addEventListener('click', () => {
        const selectedTheme = button.getAttribute('data-theme');
        document.documentElement.style.setProperty('--accent-color', `var(--${selectedTheme})`);
        saveSelectedTheme(selectedTheme); // Almacenar la selección del tema
    });
});

function saveSelectedTheme(theme) {
    localStorage.setItem('selectedTheme', theme);
}

// Obtén la selección de tema almacenada cuando la página carga
window.addEventListener('load', () => {
    const storedTheme = localStorage.getItem('selectedTheme');
    if (storedTheme) {
        document.documentElement.style.setProperty('--accent-color', `var(--${storedTheme})`);
    }
});
