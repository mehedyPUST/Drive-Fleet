# 🚗 DriveFleet - Car Rental Platform

DriveFleet is a full-stack car rental management application where users can browse available cars, book them, list their own cars for rent, and manage bookings. The platform provides secure authentication, real-time car status updates, and a responsive user interface.

## 🌐 Live Site URL

**Client Side (Frontend):** `https://drive-fleet-vzy1.vercel.app/`  
**Server Side (Backend API):** `https://drive-fleet-server-oihu.vercel.app/`

*(Replace with your actual deployed URLs if different)*

## ✨ Key Features

- **User Authentication & Authorization**  
  Secure login/registration system using Next.js Auth. Users can only edit/delete their own listed cars and view their personal bookings.

- **Car Management (CRUD)**  
  Authenticated users can add new cars with details (name, type, price, image, location, seating capacity), and edit or remove their own listings.

- **Booking System**  
  Users can book available cars for specific dates. All bookings are stored with user IDs, rental price, and car details. Users can cancel their bookings if needed.

- **Dynamic Car Status**  
  Cars have availability statuses: `Available`, `Booked`, or `Under Maintenance`. Status updates automatically when a car is booked.

- **Responsive & Modern UI**  
  Fully responsive design built with Tailwind CSS, featuring gradient backgrounds, hover effects, mobile-friendly navigation (hamburger menu), and loading/empty states for better user experience.

- **Real-Time Data Sync**  
  MongoDB Atlas with `readPreference: 'primary'` ensures that newly added cars are immediately visible after insertion (solves replication lag issue on free tier).

- **Protected API Routes**  
  All sensitive endpoints (add/edit/delete cars, bookings) are protected with JWT token verification.

## 🛠️ Technology Stack

### Frontend
- **Next.js 14** (App Router)
- **Tailwind CSS** (Styling)
- **Better-Auth** (Authentication)
- **React Icons** (Icons)

### Backend
- **Node.js** + **Express.js**
- **MongoDB Atlas** (Database)
- **MongoDB Native Driver** (Database operations)
- **JOSE** (JWT verification)
- **CORS** (Cross-origin resource sharing)

### Deployment
- **Vercel** (Frontend & Backend hosting)

## 📦 Installation & Setup (Local Development)

### Prerequisites
- Node.js (v18 or higher)
- MongoDB Atlas account (or local MongoDB)

### Backend Setup
1. Clone the repository:
   ```bash
   git clone https://github.com/your-username/drive-fleet-server.git
   cd drive-fleet-server
