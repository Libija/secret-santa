# Secret Santa – Gift Exchange Manager 🎄

Full-stack rješenje za organizaciju **Secret Santa** razmjene poklona unutar firme/tima.  
Aplikacija ima **admin** i **user** dio, podržava dva algoritma za sparivanje učesnika i nudi jasnu administraciju sesija i korisnika.

---

## 1. Pregled funkcionalnosti

### Uloge

- **ADMIN**
  - Login
  - Pregled svih korisnika
  - Registracija novih korisnika (usera)
  - Aktiviranje/deaktiviranje korisnika
  - Kreiranje novih Secret Santa sesija sa izborom algoritma:
    - `OPTIMAL`
    - `NAIVE`
  - Pregled svih sesija (sa osnovnim statistikama)
  - Pregled detalja pojedinačne sesije (svi parovi + unmatched)

- **USER (EMPLOYEE)**
  - Login
  - Pregled svog zadatka za **zadnju kreiranu sesiju**:
    - Za koga kupuje poklon, ili  
    - Da li je ostao *unmatched*

---

## 2. Zašto postoje dva algoritma?

Sistem podržava dva algoritma sparivanja:

1. **Optimal Algorithm (`OPTIMAL`)**
   - Cilj: da **svi koji učestvuju dobiju zadatak** (nema unmatched korisnika), kad god je to matematički moguće.
   - Koristi se algoritam koji traži “perfektno uparivanje” (perfect matching) u grafu učesnika.
   - Idealno rješenje za realni Secret Santa u firmi – svi igraju, svi dobiju zadatak i dobiju poklon.

2. **Naive Algorithm (`NAIVE`)**
   - Radi **nasumično (random) uparivanje**.
   - Može se desiti:
     - da neka osoba ne dobije zadatak (unmatched),
     - da algoritam odbaci neke kombinacije (npr. da ne dozvoli da neko kupuje sam sebi) i time ostavi višak.
   - Koristo je didaktički – pokazuje razliku između “pametnog” i “naivnog” algoritma, i može poslužiti kao fallback ili demo mod.

Oba algoritma vraćaju isti oblik rezultata:

```ts
{
  pairs: { giverId: number; receiverId: number }[];
  unmatchedUserIds: number[];
}
Na osnovu toga backend kreira sesiju i sve upisuje u bazu.

3. Tehnologije
Backend
Node.js / Express

TypeScript

Prisma ORM + PostgreSQL

JWT autentikacija

bcrypt za hashiranje šifri

Strukturiran u slojeve:

repositories/ – direktan rad s bazom (Prisma)

services/ – poslovna logika (algoritmi, validacije)

controllers/ – Express handleri

routes/ – definicija API ruta

middleware/ – auth, provjera role

Frontend
Next.js 16 (App Router)

React 19

TypeScript

Tailwind-like utility klase (custom UI)

Komponente:

LoginForm

AdminDashboard + AdminNav

UsersList + RegisterUserModal

SessionsList

CreateSession

UserDashboard

ui/button, ui/card, ui/badge, itd. – osnovni UI building blocks

4. Arhitektura sistema
4.1. Visok nivo
mermaid
Copy code
flowchart LR
  subgraph FE[Frontend - Next.js]
    L[/ "/" Login page/]
    A[/ "/admin" Admin dashboard/]
    U[/ "/user" User dashboard/]
  end

  subgraph BE[Backend - Express API]
    Auth[/ /auth routes/]
    Users[/ /users routes/]
    Sessions[/ /sessions routes/]
  end

  DB[(PostgreSQL + Prisma)]

  L --> Auth
  A --> Auth
  A --> Users
  A --> Sessions
  U --> SessionsMe[/GET /sessions/me/latest/]

  BE --> DB
4.2. Model baze (pojednostavljen ER dijagram)
mermaid
Copy code
classDiagram
  class User {
    int id
    string email
    string passwordHash
    string firstName
    string lastName
    UserRole role  // ADMIN | EMPLOYEE
    bool isActive
  }

  class SecretSantaSession {
    int id
    SessionMode mode   // OPTIMAL | NAIVE
    datetime createdAt
    int createdByUserId
  }

  class Pair {
    int id
    int sessionId
    int giverId
    int receiverId
  }

  class UnmatchedUser {
    int id
    int sessionId
    int userId
  }

  User "1" --> "many" SecretSantaSession : createdBy
  SecretSantaSession "1" --> "many" Pair : pairs
  SecretSantaSession "1" --> "many" UnmatchedUser : unmatchedUsers
  User "1" --> "many" Pair : gives
  User "1" --> "many" Pair : receives
  User "1" --> "many" UnmatchedUser : canBeUnmatched
5. Backend – slojevi i logika
5.1. Repozitorij: sessionRepository
Glavne funkcije:

createSessionWithResults(input)

Otvara prisma.$transaction:

kreira SecretSantaSession

createMany za Pair (ako ih ima)

createMany za UnmatchedUser (ako ih ima)

vraća punu sesiju s: pairs, unmatchedUsers, createdByUser

Osigurava da se sve upiše ili ništa (atomicnost).

getLatestSessionWithDetails()

Najnovija sesija (orderBy createdAt desc) sa:

pairs, unmatchedUsers, createdByUser

getLatestSessionForUser(userId)

Najnovija sesija gdje:

pairs su filtrirani na giverId = userId

unmatchedUsers filtrirani na userId

Vraća i osnovne info o creatoru.

listAllSessionsSummary()

Vraća listu svih sesija (sortirano od najnovije) sa:

createdByUser

_count.pairs, _count.unmatchedUsers

getSessionByIdWithDetails(id)

Vraća jednu sesiju sa:

pairs + giver + receiver

unmatchedUsers + user

createdByUser

5.2. Service sloj: sessionService
generateOptimalSession(adminUserId)

userRepository.listAllActive() – svi aktivni korisnici (EMPLOYEE + eventualno ADMIN ako želiš)

Ako manje od 2 -> baca NOT_ENOUGH_USERS

generateOptimal(users.map(u => ({ id: u.id })))

sessionRepository.createSessionWithResults(...) s mode = SessionMode.OPTIMAL

generateNaiveSession(adminUserId)

isto kao gore, ali koristi generateNaive i mode = SessionMode.NAIVE.

getLatestSessionForAdmin()

koristi getLatestSessionWithDetails

ako nema sesija -> NO_SESSIONS_YET

getMyLatestAssignment(userId)

sessionRepository.getLatestSessionForUser(userId)

ako nema sesija -> NO_SESSIONS_YET

uzima pair = session.pairs[0] ?? null

isUnmatched je true ako nema para ili ako session.unmatchedUsers.length > 0

vraća DTO oblika:

ts
Copy code
// kad je unmatched
{
  sessionId: number;
  mode: SessionMode;
  isUnmatched: true;
  receiver: null;
}

// kad postoji zadatak
{
  sessionId: number;
  mode: SessionMode;
  isUnmatched: false;
  receiver: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
}
getAllSessionsForAdmin()

koristi listAllSessionsSummary i mapira u jednostavan summary za frontend:

id, createdAt, mode, createdBy, pairCount, unmatchedCount

getSessionDetailsForAdmin(sessionId)

koristi getSessionByIdWithDetails

ako nema -> SESSION_NOT_FOUND

5.3. Rute: sessionRoutes.ts
POST /sessions/generate-optimal – admin only

POST /sessions/generate-naive – admin only

GET /sessions/latest – admin only

GET /sessions/me/latest – običan user (employee), vraća njegov zadatak

GET /sessions – admin only, lista svih sesija (summary)

GET /sessions/:id – admin only, detalji jedne sesije

5.4. Rute: auth i users
POST /auth/login

prima email, password

vraća { token, user } gdje je user:

id, email, firstName, lastName, role

POST /auth/register – samo ADMIN

kreira novog korisnika (EMPLOYEE po defaultu) i hashira password.

Zašto samo ADMIN?

jer je cilj da učesnici dolaze isključivo preko admina (npr. HR), ne želiš “random” ljude u sistemu.

GET /users – admin only, vraća listu svih usera

PATCH /users/:id/status – admin only

mijenja isActive (aktiviran/deaktiviran)

5.5. Auth & autorizacija
authMiddleware

parsira Authorization: Bearer <token>

validira JWT

upisuje req.user (id, role, itd.)

requireAdmin

provjerava da je req.user.role === "ADMIN"

u suprotnom vraća 403

6. Frontend – funkcionalni opis
6.1. Login stranica (/)
Komponente:

page.tsx (Home)

useEffect:

čita iz localStorage: token, userRole

ako postoji token:

ADMIN -> redirect na /admin

inače -> /user

ako nema token → prikaže login UI

prikazuje:

animirane snowflakes

naslov “Secret Santa”

LoginForm

LoginForm

state: email, password, error, isLoading

API_BASE_URL = process.env.NEXT_PUBLIC_API_URL ?? "http://localhost:4000"

handleSubmit:

POST ${API_BASE_URL}/auth/login

očekuje { token, user }

ako !response.ok:

čita data.message ili vrati generičku poruku

ako ok:

čuva u localStorage:

token

userId

userRole

userEmail

userName = firstName + lastName

redirect:

admin -> /admin

user -> /user

UI:

Card sa zaglavljem “Welcome”

input za email/password

Button “Sign In”

prikaz error poruke ako nešto pođe po zlu

6.2. Admin dashboard (/admin)
AdminDashboard

State:

view: "dashboard" | "sessions" | "users" | "create"

userName

isLoading

useEffect:

čita token, role, userName

ako !token || role !== "ADMIN" → router.push("/")

inače userName = localStorage.userName, isLoading = false

Header:

lijevo: “Admin Panel” + “Welcome, {userName}”

desno: AdminNav + “Logout” dugme

logout briše localStorage i vraća na /

Glavni sadržaj:

view === "dashboard":

3 kartice:

View Sessions

Manage Users

Create Session

svaka kartica samo mijenja view state.

view === "sessions" → SessionsList

view === "users" → UsersList

view === "create" → CreateSession

AdminNav

Horizontalni mini-navbar:

Dashboard, View Sessions, Manage Users, Create Session

ističe aktivan tab klasama (bg-blue-600 text-white)

6.3. UsersList + RegisterUserModal
UsersList

State:

users: User[]

isLoading

error

showRegisterModal

loadUsers():

čita token iz localStorage

GET ${API_BASE_URL}/users

očekuje { users: [...] } i postavlja setUsers(list)

useEffect → odmah zove loadUsers()

handleToggleStatus(user):

računa nextActive = !user.isActive

PATCH ${API_BASE_URL}/users/${user.id}/status sa body { isActive: nextActive }

ako uspije, ažurira users state.

handleUserCreated():

zatvara modal

refreshuje listu zvanjem loadUsers()

UI:

Header: All Users (N) + dugme Register New User

Lista kartica:

ime + prezime + email

Badge za rolu (ADMIN/EMPLOYEE)

dugme za aktiviranje/deaktiviranje (✓ Active / ✕ Inactive)

RegisterUserModal

Props:

open, onOpenChange, onSuccess

State: firstName, lastName, email, password, error, isLoading

handleSubmit:

čita token

POST ${API_BASE_URL}/auth/register

ako !res.ok → prikaže error

ako ok:

reset polja

onOpenChange(false)

onSuccess() (da parent refreša listu)

UI:

Full-screen overlay bg-black/50

Modal Card:

naslov “Register New User”

forma sa 4 inputa

dugmad “Cancel” i “Register”

6.4. CreateSession
CreateSession

Props: onSuccess: () => void

State:

mode: "NAIVE" | "OPTIMAL" (default "OPTIMAL")

isLoading, error, success

handleCreate():

čisti error i success

čita token

POST ${API_BASE_URL}/sessions/generate-optimal ili /generate-naive

u tvojoj implementaciji je već prilagođeno da gađa postojeće rute.

ako error → ispis poruke

ako uspjeh →

prikaže poruku (npr. “Session created successfully!”)

resetuje mode na "OPTIMAL"

pozove onSuccess() (npr. admin view prebaci na “sessions”)

UI:

Card s dva “radio” boxa:

Optimal Algorithm

Naive Algorithm

Dugme “Create Session 🎄”

6.5. SessionsList (Admin – lista svih sesija)
SessionsList

Tipovi (u types/session.ts):

ts
Copy code
export interface SessionSummary {
  id: number;
  createdAt: string;
  mode: "NAIVE" | "OPTIMAL";
  createdBy: {
    id: number;
    email: string;
    firstName: string;
    lastName: string;
  };
  pairCount: number;
  unmatchedCount: number;
}

export interface SessionPairDetail {
  id: number;
  giver: string;
  receiver: string;
}

export interface SessionDetails {
  id: number;
  pairs: SessionPairDetail[];
  unmatchedCount: number;
}
State:

sessions: SessionSummary[]

detailsById: Record<number, SessionDetails | null>

expandedSessionId: number | null

detailsLoadingId: number | null

isLoading, error

loadSessions():

GET ${API_BASE_URL}/sessions

očekuje { sessions: SessionSummary[] }

setSessions(list)

loadSessionDetails(sessionId):

ako imamo već detailsById[sessionId] → ne radi ništa

GET ${API_BASE_URL}/sessions/${sessionId}

očekuje objekt sa pairs[] i unmatchedUsers[]

mapira:

pairs → { id, giver: "Ime Prezime", receiver: "Ime Prezime" }

unmatchedCount = rawUnmatched.length

upisuje u detailsById

handleToggleExpand(sessionId):

ako je već otvoren → zatvara (setExpandedSessionId(null))

inače:

await loadSessionDetails(sessionId)

setExpandedSessionId(sessionId)

Isticanje zadnje kreirane sesije

Pošto backend vraća sesije sortirane orderBy createdAt desc, prvi element u sessions je zadnja kreirana sesija.

U komponenti možeš vizualno istaknuti prvu sesiju, npr.:

tsx
Copy code
const isLatest = sessions[0]?.id === session.id;

<Card
  key={session.id}
  className={
    "bg-white/95 backdrop-blur border-blue-200" +
    (isLatest ? " ring-2 ring-green-400 shadow-lg" : "")
  }
>
  {/* ... ostatak */}
Tako admin odmah vidi koja je zadnja generisana sesija.

Prikaz unmatched usera po imenu (ako backend vrati detalje)

U loadSessionDetails već imaš rawUnmatched.

Ako želiš prikazati i imena, proširi SessionDetails:

ts
Copy code
export interface UnmatchedUserDetail {
  id: number;
  fullName: string;
}

export interface SessionDetails {
  id: number;
  pairs: SessionPairDetail[];
  unmatchedCount: number;
  unmatchedUsers: UnmatchedUserDetail[];
}
I pri mapiranju:

ts
Copy code
const unmatchedUsers: UnmatchedUserDetail[] = rawUnmatched.map((u) => ({
  id: u.user.id,
  fullName: `${u.user.firstName} ${u.user.lastName}`,
}));

const details: SessionDetails = {
  id: data.id,
  pairs,
  unmatchedCount: unmatchedUsers.length,
  unmatchedUsers,
};
U renderu (unutar isExpanded && details):

tsx
Copy code
{details.unmatchedUsers.length > 0 && (
  <div className="p-3 bg-yellow-50 border border-yellow-300 rounded-lg space-y-2">
    <p className="flex items-center gap-2 text-yellow-800 font-medium">
      <span>⚠️</span>
      {details.unmatchedUsers.length} unmatched user
      {details.unmatchedUsers.length > 1 ? "s" : ""}:
    </p>
    <ul className="list-disc list-inside text-sm text-yellow-900">
      {details.unmatchedUsers.map((u) => (
        <li key={u.id}>{u.fullName}</li>
      ))}
    </ul>
  </div>
)}
6.6. UserDashboard (/user)
UserDashboard

State:

userName

assignment (zadnji zadatak) ili null

isLoading

useEffect:

čita token, userId, userName iz localStorage

ako nema token → userName = "User" i ne zove API (ili može redirect)

ako ima userId + token → zove fetchAssignment(token)

fetchAssignment(token):

GET ${API_BASE_URL}/sessions/me/latest (na backend ruti)

očekuje:

ts
Copy code
type MyAssignment =
  | {
      sessionId: number;
      mode: "NAIVE" | "OPTIMAL";
      isUnmatched: true;
      receiver: null;
    }
  | {
      sessionId: number;
      mode: "NAIVE" | "OPTIMAL";
      isUnmatched: false;
      receiver: {
        id: number;
        email: string;
        firstName: string;
        lastName: string;
      };
    }
na frontu možeš to mapirati u:

ts
Copy code
setGiftInfo({
  matched: !data.isUnmatched,
  receiver: data.receiver ? `${data.receiver.firstName} ${data.receiver.lastName}` : "",
});
UI:

Header s Logout dugmetom (čišćenje localStorage + redirect /)

Kartica:

Ako isLoading → “Loading…”

Ako matched:

“You are buying a gift for: {receiver}”

Ako !matched:

“You haven't been matched yet. An admin will create a session soon…”

7. Sekvencijski dijagrami
7.1. Kreiranje nove sesije (admin → optimal)
mermaid
Copy code
sequenceDiagram
  participant A as Admin (browser)
  participant FE as Next.js Frontend
  participant BE as Express API
  participant Svc as Session Service
  participant Repo as Session Repository
  participant DB as Postgres

  A->>FE: klik na "Create Session (OPTIMAL)"
  FE->>BE: POST /sessions/generate-optimal (Bearer token)
  BE->>Svc: generateOptimalSession(adminUserId)
  Svc->>Repo: userRepository.listAllActive()
  Repo->>DB: SELECT * FROM User WHERE isActive = true
  DB-->>Repo: lista aktivnih usera
  Svc->>Svc: generateOptimal(users) // gradi pairs + unmatchedUserIds
  Svc->>Repo: createSessionWithResults(...)
  Repo->>DB: INSERT secretSantaSession, pairs, unmatchedUsers (transaction)
  DB-->>Repo: commit ok
  Repo-->>Svc: sesija sa detaljima
  Svc-->>BE: session DTO
  BE-->>FE: 201 + JSON
  FE-->>A: prikaže “Session created successfully”
7.2. User vidi svoj zadatak
mermaid
Copy code
sequenceDiagram
  participant U as User (browser)
  participant FE as Next.js Frontend
  participant BE as Express API
  participant Svc as Session Service
  participant Repo as Session Repository
  participant DB as Postgres

  U->>FE: otvara /user (ima token u localStorage)
  FE->>BE: GET /sessions/me/latest (Bearer token)
  BE->>Svc: getMyLatestAssignment(userId)
  Svc->>Repo: getLatestSessionForUser(userId)
  Repo->>DB: query secretSantaSession + pairs (giver=user) + unmatchedUsers(user)
  DB-->>Repo: sesija s parovima i unmatched
  Repo-->>Svc: session objekt
  Svc->>Svc: izračuna {isUnmatched, receiver?}
  Svc-->>BE: DTO o zadatku
  BE-->>FE: JSON response
  FE-->>U: prikaže ili:
    Note over FE: “You are buying a gift for X”
    Note over FE: ili “You haven't been matched yet”
8. Kako pokrenuti projekat lokalno
8.1. Preduvjeti
Node.js (preporuka LTS verzija)

PostgreSQL

npm ili pnpm

8.2. Backend
Pretpostavka: backend se nalazi u folderu backend/.

Instalacija:

bash
Copy code
cd backend
npm install
Postavi .env (primjer):

env
Copy code
DATABASE_URL="postgresql://user:password@localhost:5432/secretsanta"
JWT_SECRET="super-secure-secret"
PORT=4000
Prisma migracije i (opcionalno) seed:

bash
Copy code
npx prisma migrate dev
# npx prisma db seed   # ako imaš seed skriptu
Pokretanje:

bash
Copy code
npm run dev
# API sluša npr. na http://localhost:4000
8.3. Frontend
Pretpostavka: frontend je u frontend/.

Instalacija:

bash
Copy code
cd frontend
npm install
.env.local:

env
Copy code
NEXT_PUBLIC_API_URL=http://localhost:4000
Pokretanje dev servera:

bash
Copy code
npm run dev
# Frontend na http://localhost:3000
Test flow:

Otvori http://localhost:3000

Login kao admin (korisnik kojeg si kreirao u bazi)

Dodaj nove usere preko admin UI

Kreiraj sesiju (OPTIMAL/NAIVE)

Uloguj se kao neki od tih usera da vidiš svoj zadatak.

9. Zašto je registracija samo na admin strani?
U realnom scenariju Secret Santa sistema:

učesnike obično dodaje HR / admin,

želiš kontrolisati ko uopće ulazi u sistem (npr. samo uposlenici firme),

ne želiš da se bilo ko “sam od sebe” registruje i uđe u razmjenu poklona.

Zato:

POST /auth/register je ograničen na ADMIN rolu (requireAdmin middleware),

obični useri se ne mogu sami registrirati – dobiju account kada ih admin doda.

10. Potencijalna unapređenja
E-mail notifikacije:

slanje maila svakom useru nakon generisanja sesije sa informacijom “za koga kupuje”.

Podešavanje budžeta i dodatnih pravila (npr. maksimalna cijena poklona, exclude parovi).

Višestruke grupe / timovi (npr. različite Secret Santa sesije u istom sistemu).

UI:

pagination / filtriranje u listama usera i sesija,

bolje isticanje zadnje sesije i prikaz statistika (npr. graf parova).

11. Zaključak
Ovo rješenje pokriva:

kompletan admin flow:

upravljanje korisnicima,

generisanje sesija s dva algoritma,

pregled svih parova i unmatched učesnika;

kompletan user flow:

login,

pregled vlastitog Secret Santa zadatka za zadnju kreiranu sesiju.

Arhitektura je čisto slojevita (repository → service → controller → routes), a frontend je organizovan kroz Next.js App Router sa jasnom podjelom po ulogama i komponentama.
README se može koristiti i kao tehnička i funkcionalna dokumentacija projekta.

yaml
Copy code

---
::contentReference[oaicite:0]{index=0}