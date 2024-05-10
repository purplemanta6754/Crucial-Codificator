const themeButtons = document.querySelectorAll(".btn-theme");

themeButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const selectedTheme = button.getAttribute("data-theme");
    document.documentElement.style.setProperty(
      "--accent-color",
      `var(--${selectedTheme})`
    );
    saveSelectedTheme(selectedTheme);
  });
});

function saveSelectedTheme(theme) {
  localStorage.setItem("selectedTheme", theme);
}

const currentThemeName = document.getElementById("currentThemeName");

window.addEventListener("load", () => {
  const storedTheme = localStorage.getItem("selectedTheme");
  if (storedTheme) {
    document.documentElement.style.setProperty(
      "--accent-color",
      `var(--${storedTheme})`
    );
    currentThemeName.textContent(storedTheme);
  }
});
