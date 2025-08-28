# My CV - React Version 🚀

Nowoczesna wersja CV stworzona w React z zaawansowanymi animacjami i interaktywnymi elementami.

## ✨ **Funkcje**

- 🎨 **Ciemny/Jasny motyw** z automatycznym zapisem preferencji
- 🌍 **Dwujęzyczność** (Polski/Angielski) z przełącznikiem
- 🎭 **Zaawansowane animacje** z Framer Motion
- 📱 **W pełni responsywny design**
- 🎯 **Interaktywne karty umiejętności** z rozwijanymi szczegółami
- 📋 **Sekcja projektów** przygotowana na przyszłe projekty
- 📞 **Interaktywne dane kontaktowe** z funkcją kopiowania
- 📄 **Linki do dokumentów** (CV i List Motywacyjny)

## 🛠️ **Technologie**

- **React 18** - Nowoczesny framework
- **Framer Motion** - Zaawansowane animacje
- **CSS Variables** - Dynamiczne motywy kolorystyczne
- **Responsive Design** - Mobile-first approach
- **Local Storage** - Zapisywanie preferencji użytkownika

## 🚀 **Uruchomienie**

### Wymagania
- Node.js (wersja 16 lub nowsza)
- npm lub yarn

### Instalacja
```bash
# Instalacja zależności
npm install

# Uruchomienie w trybie deweloperskim
npm start

# Budowanie do produkcji
npm run build
```

### Struktura projektu
```
src/
├── App.js          # Główny komponent aplikacji
├── App.css         # Style głównego komponentu
├── index.js        # Punkt wejścia aplikacji
└── index.css       # Globalne style
```

## 🎯 **Sekcje CV**

### 1. **Hero Section**
- Imię i nazwisko z animacją
- Tytuł zawodowy
- Zainteresowania i hobby

### 2. **Umiejętności IT**
- **HTML & CSS** - Semantyczna struktura, responsywność, Flexbox/Grid
- **JavaScript** - ES6+, DOM, async programming, REST API
- **Python** - Data analysis, web scraping, FastAPI, ML
- **Linux** - Ubuntu/Debian admin, networking, bash scripting
- **AI Prompt Engineering** - Specjalizacje muzyczne, fotograficzne, wideo
- **SQL** - Query optimization, database design, stored procedures
- **Software Testing/QA** - Jira, Figma, ISTQB, manual testing, Postman

### 3. **Projekty** 🆕
- **React Projects** - Aplikacje webowe z nowoczesnymi technologiami
- **Python Projects** - Automatyzacja i analiza danych

### 4. **Kontakt**
- Adres (Hengelo, Netherlands)
- Telefon (+48 666 913 017)
- WhatsApp (@batsnuff)
- Email (miloszszczepaniak@gmail.com)

### 5. **Dokumenty**
- CV w wersji polskiej i angielskiej
- List motywacyjny w wersji polskiej i angielskiej

## 🎨 **Motywy kolorystyczne**

### Jasny motyw
- Tło: #ffffff
- Powierzchnie: #f8fafc
- Tekst: #1e293b
- Akcent: #2563eb

### Ciemny motyw
- Tło: #0f172a
- Powierzchnie: #1e293b
- Tekst: #f1f5f9
- Akcent: #3b82f6

## 📱 **Responsywność**

- **Desktop**: Grid layout z 3+ kolumnami
- **Tablet**: Grid layout z 2 kolumnami
- **Mobile**: Single column layout
- **Breakpoints**: 768px, 480px

## 🔧 **Dostosowywanie**

### Dodawanie nowych umiejętności
Edytuj tablicę `skills` w `App.js`:

```javascript
{
  name: 'Nazwa umiejętności',
  level: 'intermediate', // 'good', 'intermediate', 'beginner'
  details: [
    { pl: 'Opis po polsku', en: 'Description in English' },
    // ... więcej szczegółów
  ]
}
```

### Dodawanie projektów
Edytuj tablicę `projects` w `App.js`:

```javascript
{
  name: { pl: 'Nazwa po polsku', en: 'Name in English' },
  icon: '🚀',
  description: { pl: 'Opis po polsku', en: 'Description in English' },
  color: '#custom-color'
}
```

## 🚀 **Deployment**

Aplikacja jest gotowa do wdrożenia na:
- **Netlify** - Drag & drop `build` folder
- **Vercel** - Connect GitHub repository
- **GitHub Pages** - `npm run build` + deploy `build` folder
- **AWS S3** - Upload `build` folder

## 📝 **Licencja**

MIT License - Swobodne użytkowanie i modyfikacja.

---

**Autor**: Milosz Szczepaniak  
**Technologie**: React, Framer Motion, Modern CSS  
**Status**: Gotowe do wdrożenia 🎯
