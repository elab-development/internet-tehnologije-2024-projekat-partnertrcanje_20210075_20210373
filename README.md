# Veb Aplikacija za Traženje Partnera za Trčanje

Reč je o veb aplikaciji za traženje partnera za trčanje. Aplikacija ima tri moguće korisničke uloge: administratora, ulogovanog trkača i neulogovanog korisnika.

## 🚀 Korišćene Tehnologije

- **Backend**: Laravel (PHP framework)
- **Frontend**: React.js
- **Baza podataka**: MySQL
- **CSS Framework**: Tailwind CSS
- **Build Tool**: Vite

## 📋 Funkcionalnosti

### Funkcionalnosti za neulogovanog korisnika:
- **Prijava (Login)** - Ulogovanje u sistem
- **Registracija (Register)** - Kreiranje novog naloga

### Funkcionalnosti za ulogovanog trkača:
- **Prijava (Login)** - Ulogovanje u sistem
- **Prikaz slike trkača** - Pregled profilne slike
- **Prikaz informacija na profilu** - Pregled ličnih podataka
- **Ažuriranje mesta na profilu** - Izmena lokacije
- **Upload slike na profilu** - Postavljanje profilne slike
- **Prikaz svih trkača** - Lista svih registrovanih trkača
- **Filtriranje trkača prema polu** - Pretraga po polu
- **Kreiranje plana trke** - Planiranje trčanja
- **Prikaz svih komentara plana trke** - Pregled komentara
- **Dodavanje komentara za plan trke** - Komentarisanje planova
- **Prikaz svih planova trka** - Lista svih planova
- **Kreiranje statistike trke** - Unos podataka o trčanju
- **Prikaz statistika trka trkača** - Pregled ličnih statistika
- **Izračunavanje prosečne brzine statistike trke** - Automatski kalkulator
- **Prikaz eksportovane statistike trke na osnovu id-a trkača** - Izvoz podataka
- **Odjava (Log out)** - Izlogovanje iz sistema

### Funkcionalnosti za administratora:
- **Prijava (Login)** - Ulogovanje u sistem
- **Prikaz svih trkača** - Pregled svih korisnika
- **Filtriranje trkača prema polu** - Pretraga po polu
- **Prikaz svih komentara plana trke** - Pregled svih komentara
- **Prikaz svih komentara** - Administracija komentara
- **Brisanje komentara** - Moderacija sadržaja
- **Prikaz svih planova trka** - Pregled svih planova
- **Prikaz statistika trka svih trkača** - Pregled svih statistika
- **Odjava (Log out)** - Izlogovanje iz sistema

## 🛠️ Pokretanje Aplikacije

### Preduslovi
- PHP 8.1+ sa Composer-om
- Node.js 18+ sa npm-om
- MySQL 8.0+ ili MariaDB 10.5+
- Git
- XAMPP (za Apache i MySQL)

### 1. Kloniranje
```bash
git clone https://github.com/elab-development/internet-tehnologije-projekat-aplikacijapartnerzatrcanje_2020_0019
cd internet-tehnologije-projekat-aplikacijapartnerzatrcanje_2020_0019
```

### 2. Backend Setup
Najpre je potrebno pokrenuti Apache i MySQL u okviru XAMPP-a. Zatim je potrebno pokrenuti redom sledeće komande:

```bash
cd backend
composer install
cp .env.example .env
php artisan key:generate
```

Konfigurisati bazu podataka u `.env` fajlu:
```env
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=running_partner
DB_USERNAME=your_username
DB_PASSWORD=your_password
```

```bash
php artisan migrate
php artisan db:seed
php artisan serve
```

Backend će biti dostupan na `http://localhost:8000`

### 3. Frontend Setup
```bash
cd frontend/react-frontend
npm install
npm run dev
```

Frontend će biti dostupan na `http://localhost:5173`

## 🔧 Konfiguracija

### Backend Konfiguracija
1. **Baza podataka**: Ažurirati `.env` fajl sa vašim kredencijalima
2. **CORS**: Backend je konfigurisan da prihvata zahteve sa:
   - `http://localhost:3000`
   - `http://localhost:5173` (Vite default)
   - `http://localhost:4173` (Vite preview)

### Frontend Konfiguracija
1. **API Base URL**: Frontend je konfigurisan da se povezuje sa `http://localhost:8000/api`
2. **Proxy**: Vite je konfigurisan sa proxy-jem za `/api` zahteve ka backend-u

## 🎨 Dizajn i UI

### Bojna Shema
- **Primarna**: Zelena (#10b981) - Moderna, energična
- **Sekundarna**: Plava (#3b82f6) - Pouzdanost, sigurnost
- **Akcentna**: Narandžasta (#f59e0b) - Topla, prijateljska
- **Pozadina**: Svetlo sive sa gradijentima

### Stilski Poboljšanja
- Moderni gradijent pozadini
- Glatke hover animacije
- Bolja tipografija sa Inter fontom
- Poboljšani dizajn dugmića sa hover efektima
- Unapređeni layout kartica
- Responzivni dizajn
- Prilagođeni scrollbar-ovi
- Bolje accessibility funkcije

## 🚦 API Endpoints

### Autentifikacija
- `POST /api/register` - Registracija korisnika
- `POST /api/login` - Prijava korisnika
- `POST /api/logout` - Odjava korisnika

### Trkači
- `GET /api/trkaci` - Dobijanje svih trkača
- `GET /api/trkaci/{id}` - Dobijanje određenog trkača
- `POST /api/trkaci` - Kreiranje trkača (samo trkac uloga)
- `PUT /api/trkaci/{id}` - Ažuriranje trkača (samo trkac uloga)

### Planovi Trka
- `GET /api/planovi-trka` - Dobijanje svih planova trka
- `POST /api/planovi-trka` - Kreiranje plana trke (samo trkac uloga)

### Statistike
- `GET /api/statistike-trke` - Dobijanje svih statistika (samo user uloga)
- `POST /api/statistike-trke` - Kreiranje statistike (samo trkac uloga)
- `GET /api/statistike-trke/{trkac_id}` - Dobijanje statistika trkača

### Komentari
- `GET /api/komentari/{planTrkeId}` - Dobijanje komentara za plan
- `POST /api/komentari` - Dodavanje komentara (samo trkac uloga)
- `DELETE /api/komentari/{id}` - Brisanje komentara (samo user uloga)

## 🧪 Testiranje

### Backend Testovi
```bash
cd backend
php artisan test
```

### Frontend Testovi
```bash
cd frontend/react-frontend
npm test
```

## 🐛 Rešavanje Problema

### Česti Problemi

1. **CORS Greške**: Proveriti da li backend CORS konfiguracija uključuje frontend URL
2. **Konekcija sa Bazom**: Verifikovati kredencijale baze u `.env` fajlu
3. **Konflikti Portova**: Proveriti da li su portovi 8000 (backend) i 5173 (frontend) dostupni
4. **Zavisnosti**: Pokrenuti `composer install` i `npm install` u odgovarajućim direktorijumima

### Logovi
- Backend logovi: `backend/storage/logs/laravel.log`
- Frontend logovi: Proveriti browser konzolu

## 📚 Dodatni Resursi

- [Laravel Dokumentacija](https://laravel.com/docs)
- [React Dokumentacija](https://react.dev/)
- [Vite Dokumentacija](https://vitejs.dev/)
- [Tailwind CSS Dokumentacija](https://tailwindcss.com/)

## 🤝 Doprinosi Projektu

1. Fork-ovati repository
2. Kreirati feature branch
3. Napraviti vaše izmene
4. Testirati temeljno
5. Poslati pull request

## 📄 Licenca

Ovaj projekat je licenciran pod MIT Licencom.

## 👥 Autori

- **Nikola Velikov 20210075** - Prvi student
- **Luka Vukovic 20210373** - Drugi student

## 📞 Kontakt

Za sva pitanja i sugestije, molimo vas da otvorite issue na GitHub-u ili nas kontaktirate putem email-a.
