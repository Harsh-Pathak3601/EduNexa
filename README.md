# 🎓 Edunexa — Modern Full-Stack EdTech Platform

> A comprehensive, production-grade e-learning marketplace built with the **MERN stack** (MongoDB, Express.js, React.js, Node.js), Redux Toolkit, Tailwind CSS, and Razorpay.

---

## 📌 Table of Contents
- [Overview](#-overview)
- [Key Features](#-key-features)
  - [Student Experience](#1-student-experience)
  - [Instructor Studio](#2-instructor-studio)
  - [Admin Control Center](#3-admin-control-center)
  - [Platform & Security](#4-platform--security)
- [Tech Stack](#-tech-stack)
- [System Architecture](#-system-architecture)
- [Folder Structure](#-folder-structure)
- [Environment Variables](#-environment-variables)
- [Getting Started](#-getting-started)
  - [Prerequisites](#prerequisites)
  - [Backend Setup](#1-backend-setup)
  - [Frontend Setup](#2-frontend-setup)
- [API Endpoints Reference](#-api-endpoints-reference)
- [Future Roadmap](#-future-roadmap)
- [License](#-license)

---

## 📖 Overview

**Edunexa** is an all-in-one educational ecosystem designed for students, instructors, and administrators. It empowers instructors to design, build, and monetize multimedia courses while providing students with an interactive video learning experience, course progress tracking, ratings, and a seamless Razorpay checkout flow.

---

## ✨ Key Features

### 1. 🎓 Student Experience
- **Interactive Video Player**: View course lectures with nested section navigation, play/pause controls, and automatic resume.
- **Lecture Completion Tracking**: Marks completed lectures and updates visual progress bars in real-time.
- **Ratings & Reviews**: Enrolled students can write course reviews and assign star ratings shown across the platform.
- **Cart & Checkout**: Multi-course shopping cart with live total computation and secure **Razorpay** payment gateway integration.
- **Enrolled Courses Dashboard**: Centralized dashboard to view all enrolled courses, total durations, and progress percentages.

### 2. 👨‍🏫 Instructor Studio
- **3-Step Course Creation Wizard**:
  - **Step 1 — Course Information**: Title, description, price, category dropdown, tags (chip inputs), thumbnail upload, and requirements.
  - **Step 2 — Course Builder**: Nested sections & subsections modal with video upload, duration, and title.
  - **Step 3 — Publish Settings**: Draft vs. Public visibility toggles.
- **Instructor Analytics Dashboard**: Visual earnings summary, student enrollment metrics, and course statistics.
- **Course Management**: Edit lectures, update course details, and delete courses.

### 3. 🛡️ Admin Control Center
- **Dedicated Admin Panel (`/dashboard/admin-panel`)**:
  - Direct UI for creating new course categories with validation.
  - Real-time catalog category monitoring showing IDs, course counts, and descriptions.
  - Instantly populates the live Catalog navbar dropdown and course creation selectors.
- **Direct Admin Signup**: Built-in Admin account type selection on registration.

### 4. 🔒 Platform & Security
- **Authentication**: JWT-based authentication stored in HTTP cookies and localStorage with bcrypt password hashing.
- **OTP Verification**: Email verification via Nodemailer with auto-expiring 6-digit OTPs.
- **Password Reset**: Secure tokenized password reset links sent via email.
- **Role-Based Access Control (RBAC)**: Route-level authorization middlewares (`isStudent`, `isInstructor`, `isAdmin`).
- **Cloud Media Storage**: Images and video lectures uploaded directly to **Cloudinary**.

---

## 🛠️ Tech Stack

### Frontend
- **Framework**: React.js 18 (Create React App)
- **State Management**: Redux Toolkit (authSlice, cartSlice, courseSlice, profileSlice, viewCourseSlice)
- **Routing**: React Router v6 (OpenRoute, PrivateRoute, nested Dashboard & ViewCourse routes)
- **Styling**: Tailwind CSS (custom dark theme, responsive utilities)
- **Forms**: React Hook Form
- **Icons**: React Icons (Vsc, Fi, Fa, Io, Hi, Bi)
- **Notifications**: React Hot Toast
- **Payment SDK**: Razorpay Checkout SDK

### Backend
- **Runtime**: Node.js & Express.js
- **Database**: MongoDB with Mongoose ODM
- **Media Hosting**: Cloudinary & express-fileupload
- **Mailing**: Nodemailer (Gmail SMTP integration)
- **Security**: JSON Web Tokens (JWT), bcryptjs, cors, cookie-parser, dotenv

---

## 🏛️ System Architecture

```
                                  ┌────────────────────────┐
                                  │   React Client (SPA)   │
                                  │  Redux / Tailwind CSS  │
                                  └───────────┬────────────┘
                                              │ REST API / JSON
                                              ▼
                                  ┌────────────────────────┐
                                  │  Express / Node Server │
                                  │   (Port 4000 /api/v1)  │
                                  └─────┬────────────┬─────┘
                                        │            │
                   ┌────────────────────┘            └───────────────────┐
                   ▼                                                     ▼
      ┌─────────────────────────┐                           ┌─────────────────────────┐
      │      MongoDB Atlas      │                           │   Third-Party APIs      │
      │  (Users, Courses, Cats) │                           │ Cloudinary / Razorpay   │
      └─────────────────────────┘                           └─────────────────────────┘
```

---

## 📁 Folder Structure

```
edunexa/
├── public/                     # Static HTML, manifest.json, favicon.ico
├── src/
│   ├── assets/                 # Brand logos, illustrations, timeline graphics
│   ├── components/
│   │   ├── common/             # Navbar, Footer, IconBtn, ConfirmationModal, RatingStars
│   │   └── core/
│   │       ├── Auth/           # Login, Signup, PrivateRoute, OpenRoute
│   │       ├── Catalog/        # CourseCard, CourseSlider
│   │       ├── Course/         # CourseDetailsCard, CourseAccordionBar
│   │       ├── Dashboard/      # AdminPanel, AddCourse, EditCourse, MyCourses, Settings, Cart
│   │       └── ViewCourse/     # VideoDetails, VideoDetailsSidebar, CourseReviewModal
│   ├── data/                   # Navbar links, dashboard links, footer data
│   ├── pages/                  # Home, About, Contact, Catalog, CourseDetails, Dashboard, ViewCourse
│   ├── reducer/                # Root Redux reducer
│   ├── services/               # API connectors, endpoints, operation handlers
│   ├── slices/                 # Redux slices (auth, cart, course, profile, viewCourse)
│   └── utils/                  # Constants, avgRating, dateFormatter
└── server/
    ├── config/                 # Cloudinary, database (Mongoose), Razorpay configs
    ├── controllers/            # Auth, Course, Section, Subsection, Category, Profile, Payments
    ├── mail/templates/         # HTML email templates (OTP, reset, enrollment, payment)
    ├── middlewares/            # auth, isStudent, isInstructor, isAdmin
    ├── models/                 # User, Course, Section, SubSection, Category, OTP, RatingAndReview
    ├── routes/                 # Express API routes
    └── utils/                  # mailSender, imageUploader
```

---

## 🔑 Environment Variables

### 1. Server Environment (`server/.env`)
```env
PORT=4000
MONGODB_URL="mongodb+srv://<username>:<password>@cluster.mongodb.net/EdunexaDatabase"
JWT_SECRET="YourSuperSecretJWTKey"
FOLDER_NAME="EdunexaUploads"

# Cloudinary
CLOUD_NAME="your_cloud_name"
API_KEY="your_api_key"
API_SECRET="your_api_secret"

# Razorpay
RAZORPAY_KEY="rzp_test_xxxxxx"
RAZORPAY_SECRET="your_razorpay_secret"

# Mailer (Gmail App Password)
MAIL_HOST="smtp.gmail.com"
MAIL_USER="your_email@gmail.com"
MAIL_PASS="your_16_char_app_password"

# Frontend Origin
FRONTEND_URL="http://localhost:3000"
```

### 2. Frontend Environment (`.env`)
```env
REACT_APP_BASE_URL=http://localhost:4000/api/v1
```

---

## 🚀 Getting Started

### Prerequisites
- [Node.js](https://nodejs.org/) (v16 or higher)
- [MongoDB Atlas](https://www.mongodb.com/atlas) account (or local MongoDB)
- [Cloudinary](https://cloudinary.com/) account for image & video hosting
- [Razorpay](https://razorpay.com/) test account

### 1. Backend Setup
```bash
# Navigate to the server directory
cd server

# Install dependencies
npm install

# Start development server with nodemon
npm run dev
# Or with node directly
npm start
```
The server will start on `http://localhost:4000`.

### 2. Frontend Setup
```bash
# From the root edunexa directory
npm install

# Start the React development server
npm start
```
The web app will open at `http://localhost:3000`.

---

## 📡 API Endpoints Reference

| Module | Method | Endpoint | Description | Auth Required |
|---|---|---|---|---|
| **Auth** | `POST` | `/api/v1/auth/signup` | Register a new user | No |
| **Auth** | `POST` | `/api/v1/auth/login` | Login user & issue JWT | No |
| **Auth** | `POST` | `/api/v1/auth/sendotp` | Dispatch 6-digit email OTP | No |
| **Auth** | `POST` | `/api/v1/auth/reset-password-token` | Generate reset token email | No |
| **Course** | `GET` | `/api/v1/course/showAllCategories` | List all catalog categories | No |
| **Course** | `POST` | `/api/v1/course/createCategory` | Create course category | Yes (Admin) |
| **Course** | `POST` | `/api/v1/course/getCategoryPageDetails` | Category page courses | No |
| **Course** | `POST` | `/api/v1/course/createCourse` | Create a new course draft | Yes (Instructor) |
| **Course** | `POST` | `/api/v1/course/addSection` | Add section to course | Yes (Instructor) |
| **Course** | `POST` | `/api/v1/course/addSubSection` | Add lecture video to section | Yes (Instructor) |
| **Payment** | `POST` | `/api/v1/payment/capturePayment` | Initiate Razorpay order | Yes (Student) |
| **Payment** | `POST` | `/api/v1/payment/verifyPayment` | Verify signature & enroll | Yes (Student) |
| **Profile** | `GET` | `/api/v1/profile/getUserDetails` | Fetch logged-in user profile | Yes |
| **Profile** | `GET` | `/api/v1/profile/getEnrolledCourses` | Fetch user enrolled courses | Yes (Student) |

---
## 📄 License
This project is open-source and available under the [MIT License](LICENSE).

