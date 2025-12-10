🎄 Secret Santa – Full Stack Application
Kompletnа funkcionalna i tehnička dokumentacija

📌 Sadržaj


Opis projekta


Glavne funkcionalnosti


Uloge korisnika


Arhitektura sistema


Tehnologije


Algoritmi za uparivanje


Baza podataka – model


API rute i objašnjenja


Frontend struktura i logika


Dijagrami sistema


Kako pokrenuti projekat


Zašto je ovakva arhitektura izabrana



📖 Opis projekta
Secret Santa je full-stack web aplikacija za organizaciju razmjene poklona unutar kompanije.
Administrator kreira sesiju („Secret Santa“ rundu), a sistem automatski generiše parove:


ko kome kupuje poklon


ko je ostao bez para (ako algoritam nije optimalan)


Korisnici (zaposlenici) se uloguju i odmah vide:


kome kupuju poklon


da li su unmatched


poruku da admin još nije kreirao sesiju (ako nema nijedne)


Cilj projekta je demonstracija znanja u:


backend arhitekturi


frontend arhitekturi


algoritmima


zaštiti pristupa (autentikacija / autorizacija)


tehničkoj dokumentaciji i dizajnu sistema



🚀 Glavne funkcionalnosti
👤 Admin


Login


Pregled svih korisnika


Aktiviranje/deaktiviranje korisnika


Registracija novih korisnika


Kreiranje nove Secret Santa sesije


Pregled svih sesija


Detaljan prikaz uparenih korisnika


Pregled unmatched korisnika


🧑‍💼 User


Login


Pregled kome kupuje poklon


Obavijest da je unmatched


Obavijest da sesija još ne postoji


Logout



🔐 Uloge korisnika
UlogaOpisADMINIma sve privilegije – upravlja sistemomEMPLOYEEMože samo da vidi svoje uparivanje
➡️ Registracija je dozvoljena samo adminu
Zašto?


jer zaposlena osoba ne treba sama kreirati nalog


admin kontroliše ko učestvuje


osigurava se integritet i sprečava zloupotreba



🏛 Arhitektura sistema
Frontend (Next.js)  →  Backend API (Express + Prisma)  →  PostgreSQL Database

Frontend (Next.js 14)


Client-side components ("use client")


Custom UI sistem (Button, Card, Badge…) inspirisan shadcn/ui


State management per-page (useState/useEffect)


LocalStorage za token i user info


Routing: /admin i /user dashboardi


Backend


Node.js + Express


Prisma ORM


Services + Repository pattern (čisto razdvajanje logike)


Auth middleware (JWT)


Dva algoritma generisanja parova



🧠 Algoritmi za uparivanje
Postoje dva načina kreiranja sesije.

1️⃣ OPTIMAL (zadani / preporučeni)
Garantuje da:


svi korisnici imaju par


niko ne dobija samog sebe


nema ciklusa dužine 1


kreira "perfect matching"


U osnovi radi kao:
1. napravi listu svih korisnika
2. pronađi permutaciju gdje niko ne daje poklon sam sebi
3. ako postoji – gotovi ste (uvijek postoji ako su ≥ 2 korisnika)

2️⃣ NAIVE (slučajni shuffle)
Radi kao:


permutacija korisnika


parovi se kreiraju redom


ali moguće:


da neka osoba ostane bez para


da ciklusi budu nepravični


da viška korisnika ostane unmatched




Ovo postoji da se pokaže poređenje algoritama i da admin vidi razliku.

🗃 Baza podataka – model
User (id, firstName, lastName, email, role, isActive)
SecretSantaSession (id, createdByUserId, mode, createdAt)
Pair (id, sessionId, giverId, receiverId)
UnmatchedUser (id, sessionId, userId)

Relacije
Session 1 --- N Pair
Session 1 --- N UnmatchedUser

User 1 --- N Pair (giver)
User 1 --- N Pair (receiver)


🔌 API rute i objašnjenja
AUTH
RutaMetodaAccessOpis/auth/loginPOSTPublicLogin korisnika/auth/registerPOSTAdmin onlyKreiranje korisnika

SESSION ROUTES (admin only)
RutaMetodaOpis/sessions/generate-optimalPOSTKreira sesiju koristeći optimal algoritam/sessions/generate-naivePOSTKreira sesiju koristeći naive algoritam/sessionsGETLista svih sesija (sa brojem parova)/sessions/:idGETDetalji jedne sesije/sessions/latestGETNajnovija sesija

USER ROUTES
RutaMetodaOpis/user/me/latestGETZa employee-ja – ko mu je par
Backend uvijek vraća strukturu:
{
  sessionId,
  mode,
  isUnmatched,
  receiver: { firstName, lastName } | null
}


🎨 Frontend struktura i logika
src/
  app/
    admin/
      page.tsx          ← Admin Dashboard
    user/
      page.tsx          ← User Dashboard
    components/
      LoginForm.tsx
      UsersList.tsx
      CreateSession.tsx
      SessionsList.tsx
      RegisterUserModal.tsx
      ui/
        button.tsx
        card.tsx
        badge.tsx

Frontend radi kroz:


localStorage za čuvanje tokena


provjeru role (ADMIN / USER)


svaki dashboard ima vlastiti view state


API pozive prema backendu



📊 Dijagrami sistema

1️⃣ Use Case dijagram
          +-------------------+
          |      ADMIN        |
          +-------------------+
                |       \
                |        \
                v         v
     Create Session     Manage Users
                |
                v
          View All Sessions

          +-------------------+
          |     EMPLOYEE      |
          +-------------------+
                 |
                 v
        View Assignment (Gift Info)


2️⃣ Sekvencijski dijagram – kreiranje sesije
Admin → Frontend → Backend → SessionService → SessionRepository → DB
           |            |           |               |
           | POST /generate-optimal |               |
           | ---------------------> |               |
           |                        | find users    |
           |                        | run algorithm |
           |                        | save session  |
           | <--------------------- | return data   |
Display Success


3️⃣ Sekvencijski dijagram – user vidi assignment
User → Frontend → Backend (/user/me/latest) → Service → DB
           |               |                    |
           | GET request   |                    |
           | ------------> | get latest session |
           |               | find pair          |
           | <------------ | return result      |
Frontend prikaže receivera ili unmatched poruku


▶️ Kako pokrenuti projekat
Backend
cd backend
npm install
npx prisma migrate dev
npm run dev

Frontend
cd frontend
npm install
npm run dev


💡 Zašto je ovakva arhitektura izabrana?
✔ Repository + Service pattern
Čisti backend, jasna odvojenost:


service = biznis logika


repository = rad sa bazom


controller = HTTP responsi


✔ Algoritmi odvojeni u /algorithms folder
Testabilno, čitko, može se proširiti.
✔ Next.js
Omogućuje:


reaktivni UI


jednostavno rukovanje formama


komponente se modularno prave


sigurnije rukovanje route pristupom


✔ Admin i User dijeljeni, ali odvojeni dashboardi
Daje bolju UX jasnoću.
✔ UI sistem (Card, Button, Badge)
Uniforman izgled, lakše je širiti UI.



