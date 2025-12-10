#  Secret Santa Web Application – Full Technical Documentation

##  Opis projekta

**Secret Santa Web Application** je full-stack web aplikacija za upravljanje Secret Santa razmjenom poklona u organizaciji (firma, škola, tim).  
Sistem omogućava administratorima da:

- Registruju korisnike  
- Aktiviraju/deaktiviraju korisnike  
- Kreiraju Secret Santa sesije koristeći jedan od dva algoritma  
- Pregledaju sve sesije i tačne parove  

Korisnici (EMPLOYEE) mogu:

- Vidjeti **samo svog dodijeljenog primatelja poklona**
- Dobiti informaciju da li su **unmatched**
- Vidjeti samo **zadnju aktivnu sesiju**

Aplikacija je **sigurna, skalabilna i backend-driven**, sa jasnim razdvajanjem uloga.

---

##  Tehnologije

###  Backend
- **Node.js**
- **Express.js**
- **TypeScript**
- **Prisma ORM**
- **PostgreSQL**
- **JWT Authentication**
- **bcrypt**
- **REST API arhitektura**

###  Frontend
- **Next.js 14+ (App Router)**
- **React**
- **TailwindCSS**
- **Shadcn/UI**
- **Lucide Icons**
- **Fetch API**
- **LocalStorage session handling**

---

##  Uloge korisnika

| Uloga | Dozvole |
|--------|----------|
| **ADMIN** | Kreira sesije, upravlja korisnicima, vidi sve podatke |
| **EMPLOYEE** | Vidi samo vlastiti rezultat |

---

##  Sigurnost sistema

- Lozinke se čuvaju pomoću **bcrypt hashed passworda**
- Autentifikacija preko **JWT tokena**
- Middleware:
  - `authMiddleware` – validacija tokena
  - `requireAdmin` – dozvola samo adminu
- Svi osjetljivi API pozivi su zaštićeni tokenom

---

##  Algoritmi uparivanja

###  1. OPTIMAL algoritam
**Cilj:** Svaki korisnik dobije tačno jednog primatelja poklona  
**Karakteristike:**
- Nema unmatched korisnika
- Bez samododjele
- Stabilan i deterministički rezultat

 Koristi se kada želimo fer i potpunu razmjenu.

---

###  2. NAIVE algoritam
**Cilj:** Nasumična dodjela  
**Karakteristike:**
- Mogu se pojaviti unmatched korisnici
- Neko može ostati bez para
- Brz, ali ne garantuje potpunost

 Koristi se kao demonstracija nasumičnih algoritama.

---

###  Pravila sistema:
- Ako A izvuče B → **B više ne može biti izvučen**
- A nikad ne može izvući sam sebe
- A može izvući B dok B može izvući A (kružno dozvoljeno)

---

##  Backend Arhitektura

/controllers
/services
/repositories
/routes
/middleware
/generated/prisma



###  Ključni API Endpoints

####  Auth
POST /auth/login
POST /auth/register (ADMIN only)



####  Users
GET /users (ADMIN)
PATCH /users/:id/status (ADMIN)



####  Sessions
POST /sessions/generate-optimal (ADMIN)
POST /sessions/generate-naive (ADMIN)
GET /sessions (ADMIN)
GET /sessions/:id (ADMIN)
GET /sessions/latest (ADMIN)
GET /sessions/me/latest (USER)




---

##  Frontend Struktura

### Routing
- `/` → Login
- `/admin` → Admin Dashboard
- `/user` → User Dashboard

---

##  Admin Funkcionalnosti

 Pregled svih korisnika  
 Aktivacija / deaktivacija korisnika  
 Kreiranje sesija  
 Pregled svih sesija  
 Detaljan pregled parova  
 Pregled unmatched korisnika  
 Automatski refresh nakon akcija  

---

##  User Funkcionalnosti

 Prikaz samo **svog receivera**  
 Prikaz poruke ako je:
- Unmatched
- Nema još nijedne sesije  
    Potpuna privatnost podataka  

---

##  Session Prikaz

Admin vidi:
- ID sesije
- Ko ju je kreirao
- Datum kreiranja
- Broj parova
- Broj unmatched korisnika
- Sve parove poimenično

Korisnik vidi:
- Samo svoje ime i svog receivera

---

##  Testiranje sistema

Backend se testira putem:
-  Postman


Frontend kroz:
-  Real-time fetch API
-  JWT token validaciju
-  UI fallback stanje

---

##  Dijagram tokova (logički opis)

###  Login Flow
Frontend → /auth/login → JWT → LocalStorage → Redirect User/Admin



### 2 Admin Creates Session
Admin → /sessions/generate-* → Algorithm → Prisma → DB → Frontend Refresh



###  User Checks Assignment
User → /sessions/me/latest → Backend Filter → Single Result



---

##  Zašto registraciju korisnika može izvršiti samo ADMIN?

 Sigurnost sistema  
 Kontrolisana organizacija  
 Sprječavanje lažnih prijava  
 Usklađeno sa realnim poslovnim okruženjem  

---

##  Pokretanje projekta

### Backend:

npm install
npm run dev
Frontend:
bash
npm install
npm run dev


Autor: Emrah Libić
Projekat: Secret Santa Web Application
