<div align="center">

  <h1>PPDB Lite — Backend API</h1>

  <p>
    <strong>Backend API untuk sistem PPDB (Penerimaan Peserta Didik Baru).</strong>
  </p>

  <p>
    Dibangun dengan <a href="https://adonisjs.com">AdonisJS 7</a> + Lucid ORM + PostgreSQL.
  </p>

  <br>

<a href="#-instalasi">Instalasi</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-routes-bawaan">Routes</a>
<span>&nbsp;&nbsp;•&nbsp;&nbsp;</span>
<a href="#-database-schema">Database Schema</a>

  <br>
  <br>

</div>

---

## 🚀 Instalasi

### Prasyarat

- **Node.js** 20+ dan **npm**
- **PostgreSQL** (database aktif)

### Dari root monorepo

```bash
# Install dependencies
npm install

# Jalankan semua app (backend + frontend)
npm run dev
```

### Backend saja (dari `apps/backend`)

```bash
# 1. Siapkan environment
cp .env.example .env

# 2. Generate APP_KEY
node ace generate:key

# 3. Atur koneksi database di .env
#    DB_URL=postgresql://user:password@host:5432/nama_database

# 4. Jalankan migrasi
node ace migration:run

# 5. Jalankan development server (hot reload)
node ace serve --hmr
```

API akan berjalan di `http://localhost:3333`.

### Perintah lainnya

```bash
node ace test        # Jalankan tests
npm run typecheck    # Type check
npm run lint         # Lint
npm run build        # Build untuk production
npm start            # Jalankan server production
```

---

## 🛣️ Routes Bawaan

| Method | Endpoint                     | Deskripsi                             | Auth |
| ------ | ---------------------------- | ------------------------------------- | ---- |
| GET    | `/`                          | Health check (`{ hello: 'world' }`)   | ✖    |
| POST   | `/api/v1/auth/signup`        | Registrasi akun baru, mengembalikan token | ✖ |
| POST   | `/api/v1/auth/login`         | Login, mengembalikan access token     | ✖    |
| GET    | `/api/v1/account/profile`    | Ambil profil user saat ini            | ✔    |
| POST   | `/api/v1/account/logout`     | Logout (hapus access token aktif)     | ✔    |

---

## 🗄️ Database Schema

```
users
├── id
├── name
├── email
├── password
└── role
    ├── admin
    └── student

registrations
├── id
├── user_id
├── registration_number
├── full_name
├── nisn
├── school_origin
├── phone
├── address
├── average_score
├── status
│   ├── pending
│   ├── approved
│   └── rejected
└── created_at

documents
├── id
├── registration_id
├── type
├── file_path
└── status

scores
├── id
├── registration_id
├── academic_score
├── achievement_score
└── final_score

announcements
├── id
├── title
├── content
└── published_at
```

### Relasi

- `users` **1 — N** `registrations` (via `registrations.user_id`)
- `registrations` **1 — N** `documents` (via `documents.registration_id`)
- `registrations` **1 — 1** `scores` (via `scores.registration_id`)
- `announcements` berdiri sendiri (tidak terikat ke tabel lain)

---

## 📄 License

Open-sourced software licensed under the [MIT license](LICENSE).
