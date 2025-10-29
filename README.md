# Dogtronic Retail Media - MVP

Minimalistyczny dashboard dla systemu zarządzania reklamami w sieciach handlowych.

## 📋 Opis

Dogtronic Retail Media (DRM) to platforma do zarządzania kampaniami reklamowymi wyświetlanymi na ekranach w sklepach. System umożliwia klientom biznesowym (np. Pepsi, Coca-Cola) wykupienie reklam w wybranych sieciach handlowych (np. Lewiatan, ABC).

## 🚀 Demo

Strona dostępna online: [GitHub Pages]()

## 📁 Struktura

```
dogtronic-retail-media-mvp/
├── index.html                  # Strona logowania (główna)
├── pages/                      # Podstrony aplikacji
│   ├── dashboard.html         # Panel główny po zalogowaniu
│   ├── campaigns.html         # Lista kampanii
│   ├── new-campaign.html      # Tworzenie nowej kampanii
│   ├── reports.html           # Raporty i analityka
│   ├── billing.html          # Rozliczenia i płatności
│   └── settings.html         # Ustawienia konta
├── components/                 # Komponenty wielokrotnego użytku
│   ├── sidebar.html          # Boczne menu nawigacyjne
│   └── topbar.html           # Górny pasek nawigacyjny
└── js/                        # Skrypty JavaScript
    ├── loadComponents.js     # Ładowanie komponentów
    └── tableSort.js          # Sortowanie tabel
```

## 🎨 Design

- **Minimalizm** - Czysty, prosty interfejs
- **Kolorystyka** - Jasne tło z niebieskim akcentem (#3B82F6)
- **Framework** - Tailwind CSS via CDN
- **Responsywność** - W pełni responsywny design

## ⚙️ Funkcje

### Strona logowania (`index.html`)

- Formularz logowania (email + hasło)
- Reset hasła
- Dla klientów biznesowych (bez rejestracji publicznej)

### Dashboard (`pages/dashboard.html`)

- **Przegląd** - Statystyki kampanii (wyświetlenia, lokalizacje, budżet)
- Możliwość tworzenia nowej kampanii
- Szybki dostęp do wszystkich sekcji

### Kampanie (`pages/campaigns.html`)

- **Lista kampanii** - Podgląd wszystkich aktywnych i zakończonych kampanii
- Sortowanie i filtrowanie kampanii
- Szczegóły każdej kampanii

### Nowa kampania (`pages/new-campaign.html`)

- **Formularz** - Tworzenie nowej kampanii reklamowej
- Wybór lokalizacji (sieci handlowe)
- Ustawienia budżetu i czasu trwania

### Raporty (`pages/reports.html`)

- **Statystyki i analizy** - Szczegółowe raporty z kampanii
- Wykresy i wizualizacje danych
- Eksport danych

### Rozliczenia (`pages/billing.html`)

- **Historia płatności** - Wszystkie transakcje
- Faktury i rozliczenia
- Płatności i metody płatności

### Ustawienia (`pages/settings.html`)

- **Zarządzanie kontem** - Edycja profilu
- Ustawienia notyfikacji
- Bezpieczeństwo konta

## 🛠️ Technologie

- **HTML5** - Struktura strony
- **Tailwind CSS** (CDN) - Framework CSS do stylizacji
- **JavaScript** (Vanilla) - Logika aplikacji
- **Architektura komponentowa** - Ponownie używane komponenty (sidebar, topbar)
- **GitHub Pages** - Hosting

## 📦 Instalacja

1. Sklonuj repozytorium:

```bash
git clone [URL-repozytorium]
```

2. Otwórz `index.html` w przeglądarce

Lub uruchom prosty serwer:

```bash
python -m http.server 8000
```

## 🔐 Logowanie (Demo)

Możesz się zalogować używając dowolnych danych - to mockup bez backendu.

## 📝 TODO

- [ ] Integracja z backendem
- [ ] Autentykacja użytkowników
- [ ] API dla kampanii
- [ ] Upload plików (video/grafika)
- [ ] Zaawansowane raporty i wykresy
- [ ] Panel administratora

## 👥 Autorzy

Made with ❤️ by **Dogtronic**

## 📄 Licencja

Wszystkie prawa zastrzeżone © 2025 Dogtronic
