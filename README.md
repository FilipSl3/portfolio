# Filip Ślemp — Portfolio & CV

Osobista strona portfolio i wizytówka online. Jednostronicowa aplikacja (SPA) zbudowana w React + Vite, wdrożona na GitHub Pages.

🌐 **Live:** [filipsl3.github.io/portfolio](https://filipsl3.github.io/portfolio)

---

## O projekcie

Strona prezentuje mój profil zawodowy, wybrane projekty komercyjne, ścieżkę kariery i dane kontaktowe. Zaprojektowana z myślą o wydajności i estetyce — płynne animacje, interaktywny model 3D w sekcji hero, efekt przechylenia kart przy hover i responsywny układ od telefonu po ultrawide.

### Sekcje

- **Hero** — nazwisko, rola, CTA do CV i kontaktu, interaktywna scena Three.js
- **O mnie** — bio, zdjęcie, krótki opis
- **Projekty wiodące** — 5 realizacji komercyjnych z linkami i statusem (Live / W produkcji)
- **Doświadczenie** — pionowa oś czasu z 8 pozycjami zawodowymi
- **Więcej projektów** — siatka 6 projektów własnych i akademickich
- **Kontakt** — e-mail, telefon, linki do GitHub i LinkedIn

### Funkcje

- 🌙 Przełącznik trybu jasny / ciemny (zapamiętywany między wizytami)
- 🌐 Pełne tłumaczenie PL / EN (wszystkie treści w jednym pliku)
- 📱 W pełni responsywny — telefon, tablet, desktop, ultrawide
- 🎯 Efekt przechylenia 3D kart na hover (wyłączany automatycznie na ekranach dotykowych)
- ⚡ Pasek postępu czytania, scrollspy w nawigacji, animacje wejścia sekcji

---

## Stack

| Technologia | Zastosowanie |
|---|---|
| React 18 | UI, zarządzanie stanem (motyw, język) |
| Vite | Bundler, serwer deweloperski |
| Tailwind CSS | Stylowanie, semantyczne tokeny kolorów |
| Framer Motion | Animacje, efekt tilt 3D kart |
| Three.js | Interaktywna scena 3D w sekcji hero |
| Lucide React | Ikony |

---

## Uruchomienie lokalne

Wymagany Node.js w wersji 18 lub nowszej.

```bash
# 1. Zainstaluj zależności (jednorazowo)
npm install

# 2. Uruchom serwer deweloperski
npm run dev
```

Strona dostępna pod: `http://localhost:5173/portfolio/`

```bash
# Zbuduj wersję produkcyjną
npm run build

# Podejrzyj zbudowaną wersję lokalnie
npm run preview
```

---

## Struktura projektu

```
portfolio/
├── public/
│   └── cv/                  # plik CV do pobrania
├── src/
│   ├── assets/              # zdjęcia, grafiki (importowane przez Vite)
│   ├── components/          # wszystkie komponenty React
│   │   ├── Navbar.jsx       # nawigacja + hamburger na mobile
│   │   ├── Hero.jsx         # sekcja główna z Canvas3D
│   │   ├── AboutMe.jsx      # o mnie
│   │   ├── FeaturedProjects.jsx  # projekty wiodące (karty tilt)
│   │   ├── ExperienceTimeline.jsx # oś czasu kariery
│   │   ├── GithubGrid.jsx   # siatka pozostałych projektów
│   │   ├── ContactSection.jsx    # kontakt
│   │   └── ...              # Background, ThemeToggle, ImageSlot itd.
│   ├── context/
│   │   ├── ThemeContext.jsx  # stan motywu (dark/light)
│   │   └── LanguageContext.jsx   # stan języka (pl/en)
│   ├── data/
│   │   └── content.js       # wszystkie treści strony — edytuj tutaj
│   └── index.css            # tokeny kolorów, efekty tła (aurora)
├── index.html               # punkt wejścia, meta tagi, favicon
├── tailwind.config.js       # tokeny kolorów, fonty, animacje
└── vite.config.js           # konfiguracja Vite + base dla GitHub Pages
```

---

## Kontakt

**Filip Ślemp** — filip.slemp7@gmail.com · [linkedin.com/in/filip-ślemp](https://www.linkedin.com/in/filip-%C5%9Blemp-05637b278/) · [github.com/FilipSl3](https://github.com/FilipSl3)
