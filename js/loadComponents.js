// Funkcja do wczytywania komponentów HTML
function loadComponent(elementId, filePath) {
  return fetch(filePath)
    .then((response) => response.text())
    .then((html) => {
      const placeholder = document.getElementById(elementId);
      if (placeholder) {
        placeholder.innerHTML = html;
        // Inicjalizacja po załadowaniu komponentu
        initializeComponent(elementId);
      }
    })
    .catch((error) => {
      console.error(`Błąd wczytywania ${filePath}:`, error);
    });
}

// Funkcja inicjalizująca komponent po załadowaniu
function initializeComponent(elementId) {
  // Tutaj można dodać logikę inicjalizacji po załadowaniu komponentu
  if (elementId === "sidebar-placeholder") {
    // Sidebar został załadowany
    console.log("Sidebar załadowany");
    // Podświetl aktywną stronę w sidebarze
    highlightActiveSidebarLink();
  } else if (elementId === "topbar-placeholder") {
    // Topbar został załadowany
    console.log("Topbar załadowany");
  }

  // Inicjalizuj sortowanie tabel po załadowaniu komponentów
  if (typeof addSortIcons === "function") {
    setTimeout(addSortIcons, 100);
  }
}

// Funkcja do podświetlania aktywnego linku w sidebarze
function highlightActiveSidebarLink() {
  // Pobierz nazwę aktualnej strony
  const currentPage = window.location.pathname.split("/").pop();

  // Znajdź wszystkie linki w sidebarze
  const sidebarLinks = document.querySelectorAll("#sidebar-placeholder a");

  sidebarLinks.forEach((link) => {
    const href = link.getAttribute("href");

    // Sprawdź czy to link do aktualnej strony
    if (href === currentPage || href.includes(currentPage)) {
      // Ustaw aktywny styl
      link.style.backgroundColor = "#eff6ff";
      link.style.color = "#3b82f6";
    } else {
      // Ustaw domyślny styl
      if (!link.href.includes("index.html")) {
        link.style.backgroundColor = "transparent";
        link.style.color = "#6b7280";
      }
    }
  });
}

// Funkcja do wczytywania wszystkich komponentów
function loadAllComponents() {
  // Określ ścieżkę względną do komponentów w zależności od lokalizacji
  const isInPagesFolder = window.location.pathname.includes("/pages/");
  const componentsPath = isInPagesFolder ? "../components/" : "components/";

  // Dodaj timestamp aby uniknąć cache
  const cacheBuster = "?v=" + Date.now();

  // Wczytaj sidebar
  loadComponent(
    "sidebar-placeholder",
    componentsPath + "sidebar.html" + cacheBuster
  );

  // Wczytaj topbar
  loadComponent(
    "topbar-placeholder",
    componentsPath + "topbar.html" + cacheBuster
  );
}

// Wczytaj komponenty po załadowaniu DOM
document.addEventListener("DOMContentLoaded", function () {
  loadAllComponents();

  // Dodatkowo podświetl aktywny link po krótkim opóźnieniu
  setTimeout(highlightActiveSidebarLink, 200);
});
