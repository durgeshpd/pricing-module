🚖 Pricing Module

A responsive and animated price calculation dashboard for ride fares, built using the MERN stack with Tailwind UI enhancements and real-time motion effects.

✨ Features
🚗 Calculate dynamic ride fares based on:

Distance (KM)

Trip duration (minutes)

Waiting time (minutes)

Day of the week

⚙️ Admin-defined pricing rules stored in MongoDB

🎨 Styled using Tailwind CSS and DaisyUI

🎞️ Smooth UI animations with Framer Motion

🧩 REST API-first backend with:

POST /api/pricing/calculate – Calculate fare

POST /api/pricing/seed – Seed initial pricing rules

🛠 Tech Stack
Layer	        Tech
Frontend	    React (Vite), Tailwind CSS, DaisyUI, React Icons, Framer Motion
Backend	        Node.js, Express.js, MongoDB (Mongoose)
Utilities	    Axios, Nodemon

📦 Installation & Setup
1. Clone the Repository
```bash
git clone https://github.com/your-username/pricing-module.git
cd pricing-module
```
2. Install Dependencies
Backend
```bash
cd server
npm install
```
Frontend
```bash
cd ../client
npm install
```
🚀 Running the App
1. Start MongoDB
Ensure MongoDB is running locally or use MongoDB Atlas.

2. Start Backend Server
```bash
cd server
npm run dev

3. Start Frontend Client
```bash
cd ../client
npm run dev
```
Visit: http://localhost:5173

📁 Project Structure
```css
pricing-module/
├── client/         # React frontend (Vite)
│   └── App.jsx
├── server/         # Express backend
│   ├── models/         # Mongoose models
│   ├── routes/         # API routes
│   ├── controllers/    # Route handlers
│   └── server.js       # Entry point
```

📬 Contact

Feel free to open an issue or submit a pull request if you have ideas or improvements.