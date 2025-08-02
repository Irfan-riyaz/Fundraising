# 🎯 Fundraising Intern Portal

A full stack web application simulating a donation platform for interns. Built using **Next.js** and **MongoDB**, this portal allows interns to log in, view dashboards, and support various departments.

---

## 🚀 Features

### Frontend:
- 🔐 Dummy Login & Signup (No actual authentication)
- 📊 Intern Dashboard displaying:
  - Intern name
  - Referral code (e.g., irfan2025)
  - Total donations (dummy backend data)
  - Static rewards section
- 📚 Dynamic department listing
- 📝 Individual department detail pages with:
  - Title
  - Long description
  - QR scan for donations
  - Donation confirmation with success image

### Backend:
- 🌐 REST API via `/api/department` and `/api/department/[id]`
- 📦 MongoDB used for storing department data

---

## 💻 Tech Stack

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Node.js API Routes (Next.js)
- **Database:** MongoDB Atlas
- **Images:** Stored in `/public/images`

---

## 🗂 Folder Structure

/pages/
├── index.js
├── login.js
├── signup.js
└── user/
├── dashboard.js
└── department/
└── [id].js

/pages/api/
└── department/
├── index.js
└── [id].js

/public/images/
├── landingpage3.jpg
├── qr.png
├── success.png
└── [department images].jpg

/lib/
└── mongodb.js

/styles/
└── globals.css

###Start the dev server  
