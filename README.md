# 🎟️ Ticket Booking System (Crioxmodex002)

---

# 📦 PROJECT STRUCTURE

```
MODEX-TICKET-BOOKING/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   ├── db.js
│   │   │   └── redis.js
│   │   │
│   │   ├── controllers/
│   │   │   ├── show.controller.js
│   │   │   └── booking.controller.js
│   │   │
│   │   ├── services/
│   │   │   ├── show.service.js
│   │   │   └── booking.service.js
│   │   │
│   │   ├── repositories/
│   │   │   ├── show.repo.js
│   │   │   ├── booking.repo.js
│   │   │   └── seat.repo.js
│   │   │
│   │   ├── routes/
│   │   │   ├── show.routes.js
│   │   │   ├── booking.routes.js
│   │   │   └── seat.routes.js
│   │   │
│   │   ├── jobs/
│   │   │   └── bookingExpiry.job.js
│   │   │
│   │   ├── middlewares/
│   │   │   ├── error.middleware.js
│   │   │   └── logger.middleware.js
│   │   │
│   │   ├── utils/
│   │   │   ├── constants.js
│   │   │   └── response.js
│   │   │
│   │   ├── app.js
│   │   └── server.js
│   │
│   ├── database/
│   │   ├── schema.sql
│   │   └── seed.sql
│   │
│   ├── .env
│   └── package.json
│
├── frontend/
│   ├── src/
│   │   ├── api/
│   │   │   └── axios.ts
│   │   │
│   │   ├── components/
│   │   │   ├── Navbar.tsx
│   │   │   ├── Seat.tsx
│   │   │   └── SeatGrid.tsx
|   |   |   └── Alert.tsx
│   │   │
│   │   ├── context/
│   │   │   ├── AuthContext.tsx
│   │   │   └── BookingContext.tsx
│   │   │
│   │   ├── pages/
│   │   │   ├── Home.tsx
│   │   │   ├── Admin.tsx
│   │   │   └── Booking.tsx
│   │   │
│   │   ├── routes/
│   │   │   └── AppRoutes.tsx
│   │   │
│   │   ├── types/
│   │   │   └── index.ts
│   │   │
│   │   ├── App.tsx
│   │   ├── main.tsx
│   │   └── index.css
│   │
│   └── package.json
│
└── README.md
```

---

# 🚀 OVERVIEW

A full-stack Ticket Booking System inspired by BookMyShow.  
Supports real-time seat booking, concurrency handling, and modern UI.

---

# 🧠 TECH STACK

## Backend
- Node.js
- Express.js
- PostgreSQL (Neon - Serverless Cloud Database)
- Redis (Upstash - Serverless Redis)
- node-cron

## Frontend
- React.js (TypeScript)
- Context API
- Axios
- React Router DOM

---

# 🌍 CLOUD SERVICES USED

## 🐘 PostgreSQL (Neon)
- Serverless Postgres database
- Used for storing shows, seats, and bookings
- Provides auto-scaling and high availability

## 🔴 Redis (Upstash)
- Serverless Redis
- Used for caching and scalable architecture
- Helps in distributed locking (future scalability)

---

# ⚙️ FEATURES

## Admin
- Create a show
- Set total seats
- Input validation & error handling

## User
- View shows
- Select seats visually
- Book seats
- See booking status (CONFIRMED / PENDING / FAILED)

## System
- Prevents overbooking
- Real-time updates (polling)
- Booking expiry system

---

# 🧱 BACKEND ARCHITECTURE

Controller → Service → Repository

- Controllers → API layer  
- Services → Business logic  
- Repositories → Database layer  

---

# 🗄️ DATABASE DESIGN

Tables:
- shows
- seats
- bookings
- booking_seats

Seat Flow:
AVAILABLE → LOCKED → BOOKED

---

# 🔒 CONCURRENCY CONTROL

- PostgreSQL Transactions (BEGIN / COMMIT)
- Row-level locking (FOR UPDATE)
- Prevents race conditions and overbooking

---

# 🔁 BOOKING FLOW

1. User selects seats  
2. Backend locks seats  
3. If available → CONFIRMED  
4. If conflict → FAILED  

---

# ⏳ BOOKING EXPIRY

- LOCKED seats auto release after 2 minutes  
- Implemented using node-cron  

---

# ⚡ REAL-TIME UPDATES

setInterval(fetchSeats, 3000);

- Auto refresh seat availability
- Simulates a real-time system

---

# 📡 API ENDPOINTS

## Shows
POST /shows  
GET /shows  

## Seats
GET /shows/:showId/seats  

## Booking
POST /bookings  

---

# 🎨 FRONTEND ARCHITECTURE

- Context API → Global state
- Pages → Home / Admin / Booking
- Components → Seat / Grid / Navbar
- Hooks → useEffect lifecycle

---

# 🧪 ERROR HANDLING

- Form validation
- API error handling
- Booking conflict handling
- Loading & empty states

---

# 📦 INSTALLATION

## Backend
cd backend  
npm install  
npm start  

## Frontend
cd frontend  
npm install  
npm run dev  

---

# 🌍 DEPLOYMENT

- Backend → Render  
- Database → Neon  
- Redis → Upstash  
- Frontend → Vercel  

---

# 💎 KEY HIGHLIGHTS

- Scalable architecture  
- Concurrency-safe booking system  
- Real-time seat updates  
- Cloud-native deployment (Neon + Upstash)  
- Clean modular code  

---

# 📸 SCREENSHOTS

- Home Page  
- Admin Panel  
- Seat Selection UI  
- Booking Success / Failure  


---

# 🚀 FUTURE IMPROVEMENTS

- WebSocket real-time updates  
- Payment integration  
- JWT Authentication  
- Seat recommendation system  

---

# 👨‍💻 AUTHOR

Dibya Ranjan Sahoo
