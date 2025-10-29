// Skrypt do wczytywania komponentów admina
document.addEventListener("DOMContentLoaded", function () {
  // Wczytaj admin sidebar
  fetch("../../components/admin/admin-sidebar.html")
    .then((response) => response.text())
    .then((data) => {
      const placeholder = document.getElementById("admin-sidebar-placeholder");
      if (placeholder) {
        placeholder.innerHTML = data;
        setActiveMenuItem();
      }
    })
    .catch((error) => console.error("Błąd wczytywania sidebar:", error));

  // Wczytaj admin topbar
  fetch("../../components/admin/admin-topbar.html")
    .then((response) => response.text())
    .then((data) => {
      const placeholder = document.getElementById("admin-topbar-placeholder");
      if (placeholder) {
        placeholder.innerHTML = data;
      }
    })
    .catch((error) => console.error("Błąd wczytywania topbar:", error));
});

// Funkcja do ustawiania aktywnego elementu menu
function setActiveMenuItem() {
  const currentPage = window.location.pathname.split("/").pop();
  const menuItems = document.querySelectorAll("#sidebar a");

  menuItems.forEach((item) => {
    const href = item.getAttribute("href");
    if (href === currentPage) {
      // Usuń klasy aktywne z innych elementów
      menuItems.forEach((mi) => {
        mi.style.backgroundColor = "transparent";
        mi.style.color = "#6b7280";
      });

      // Ustaw aktywny element
      item.style.backgroundColor = "#eff6ff";
      item.style.color = "#3b82f6";
    }
  });
}
