// Funkcja do sortowania tabel
function sortTable(tableId, columnIndex, type = "text") {
  const table = document.getElementById(tableId);
  if (!table) return;

  const tbody = table.querySelector("tbody");
  const rows = Array.from(tbody.querySelectorAll("tr"));

  // Pobierz aktualny kierunek sortowania z nagłówka
  const header = table.querySelectorAll("thead th")[columnIndex];
  const isAscending = header.getAttribute("data-sort") === "asc";

  // Zresetuj wszystkie nagłówki
  table.querySelectorAll("thead th").forEach((th) => {
    th.removeAttribute("data-sort");
    th.classList.remove("sort-asc", "sort-desc");
  });

  // Ustaw nowy kierunek sortowania
  const newSortDirection = isAscending ? "desc" : "asc";
  header.setAttribute("data-sort", newSortDirection);
  header.classList.add(newSortDirection === "asc" ? "sort-asc" : "sort-desc");

  // Sortuj wiersze
  rows.sort((a, b) => {
    const aText =
      a.querySelectorAll("td")[columnIndex]?.textContent.trim() || "";
    const bText =
      b.querySelectorAll("td")[columnIndex]?.textContent.trim() || "";

    let aValue, bValue;

    switch (type) {
      case "number":
        aValue = parseFloat(aText.replace(/[^\d.]/g, "")) || 0;
        bValue = parseFloat(bText.replace(/[^\d.]/g, "")) || 0;
        break;
      case "date":
        aValue = new Date(aText.split(" - ")[0].split(".").reverse().join("-"));
        bValue = new Date(bText.split(" - ")[0].split(".").reverse().join("-"));
        break;
      default:
        aValue = aText;
        bValue = bText;
    }

    if (newSortDirection === "asc") {
      return aValue > bValue ? 1 : -1;
    } else {
      return aValue < bValue ? 1 : -1;
    }
  });

  // Wyczyść tabelę i dodaj posortowane wiersze
  tbody.innerHTML = "";
  rows.forEach((row) => tbody.appendChild(row));
}

// Funkcja do dodania znaczników sortowania do nagłówków
function addSortIcons() {
  const sortableTables = document.querySelectorAll("table[data-sortable]");

  sortableTables.forEach((table) => {
    const headers = table.querySelectorAll("thead th");

    headers.forEach((header, index) => {
      // Pomiń kolumnę z akcjami
      const text = header.textContent.trim().toUpperCase();
      if (text === "AKCJE" || text === "Akcje") {
        return;
      }

      // Sprawdź czy ikona już istnieje
      if (header.querySelector(".sort-icon")) {
        return; // Ikona już została dodana
      }

      // Dodaj klasę sortowalną i obsługę kliknięcia
      header.style.cursor = "pointer";
      header.classList.add("sortable-header");

      // Utwórz kontener dla ikony
      const span = document.createElement("span");
      span.className = "sort-icon";
      span.innerHTML =
        '<svg class="w-4 h-4 inline ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 9l4-4 4 4m0 6l-4 4-4-4"/></svg>';
      header.appendChild(span);

      // Dodaj kliknięcie
      header.addEventListener("click", () => {
        let sortType = "text";

        // Określ typ sortowania na podstawie nagłówka
        if (
          text.includes("KWOTA") ||
          text.includes("BUDŻET") ||
          text.includes("WYŚWIETLENIA") ||
          text.includes("CTR")
        ) {
          sortType = "number";
        } else if (text.includes("DATA") || text.includes("OKRES")) {
          sortType = "date";
        } else if (text.includes("KAMPANIA")) {
          sortType = "date"; // dla dat kampanii
        }

        sortTable(table.id, index, sortType);
      });
    });
  });
}

// Inicjalizuj po załadowaniu DOM
document.addEventListener("DOMContentLoaded", function () {
  setTimeout(addSortIcons, 300); // Poczekaj aż tabele się załadują
});

// Style dla sortowania
const style = document.createElement("style");
style.textContent = `
  .sortable-header {
    user-select: none;
  }
  .sortable-header:hover {
    background-color: #f3f4f6 !important;
  }
  .sort-icon {
    opacity: 0.3;
    transition: opacity 0.2s;
  }
  .sort-asc .sort-icon,
  .sort-desc .sort-icon {
    opacity: 1;
  }
  .sort-asc .sort-icon svg {
    transform: rotate(180deg);
  }
`;
document.head.appendChild(style);
