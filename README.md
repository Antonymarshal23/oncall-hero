# 📞 OnCall Hero

**AI-Powered Phone Calling Platform built with React, Node.js, Express.js, and CALL-E**

OnCall Hero is a full-stack application that allows users to initiate AI-powered phone calls through a simple React web interface.

The frontend collects the customer's name and phone number, while the Node.js backend securely communicates with the **CALL-E phone calling API** to initiate and manage the call.

---

## 🚀 Features

* 📞 AI-powered outbound phone calls
* 🤖 CALL-E API integration
* ⚛️ React frontend
* 🟢 Node.js + Express.js backend
* 🔐 API key stored securely on the backend
* 🌐 Separate frontend and backend servers
* 🔄 REST API communication
* 📱 Phone number and customer name input
* ⏳ Call loading state
* ✅ Call success/failure handling
* 🆔 Call ID and status display
* ❤️ Backend health-check endpoint
* 🌍 CORS-enabled frontend/backend communication
* 📦 Environment-based configuration

---

## 🏗️ Architecture

```text
┌──────────────────────────────┐
│        React Frontend        │
│                              │
│     localhost:5173           │
│                              │
│  Customer Name               │
│  Phone Number                │
│  Make Call                   │
└──────────────┬───────────────┘
               │
               │ HTTP POST
               │ /call
               ▼
┌──────────────────────────────┐
│       Node.js Backend        │
│                              │
│      localhost:4000          │
│                              │
│       Express.js             │
│       CORS                   │
│       CALL-E SDK             │
└──────────────┬───────────────┘
               │
               │ API
               ▼
┌──────────────────────────────┐
│          CALL-E              │
│                              │
│    AI Phone Calling          │
│         Service              │
└──────────────┬───────────────┘
               │
               ▼
             📞
        Phone Call
```

---

## 🛠️ Tech Stack

### Frontend

* React
* Vite
* JavaScript
* HTML5
* CSS3
* Fetch API

### Backend

* Node.js
* Express.js
* JavaScript ES Modules
* CORS
* dotenv
* CALL-E SDK

### External Service

* CALL-E

---

## 📁 Project Structure

```text
oncall-hero/
│
├── backend/
│   ├── index.js
│   ├── package.json
│   ├── package-lock.json
│   └── .env
│
├── frontend/
│   ├── src/
│   │   ├── App.jsx
│   │   ├── App.css
│   │   └── main.jsx
│   │
│   ├── public/
│   ├── package.json
│   └── package-lock.json
│
└── README.md
```

---

# ⚙️ Backend Setup

## 1. Navigate to backend

```bash
cd backend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Configure environment variables

Create a `.env` file inside the `backend` directory:

```env
CALLE_API_KEY=your_call_e_api_key
PORT=4000
```

Never commit `.env` to GitHub.

Add this to `.gitignore`:

```gitignore
node_modules/
.env
```

## 4. Start backend

```bash
npm start
```

Backend will run at:

```text
http://localhost:4000
```

---

# ⚛️ Frontend Setup

## 1. Navigate to frontend

Open another terminal:

```bash
cd frontend
```

## 2. Install dependencies

```bash
npm install
```

## 3. Start React development server

```bash
npm run dev
```

Frontend will run at:

```text
http://localhost:5173
```

Open the URL in your browser.

---

# 🔌 API Endpoints

## Health Check

```http
GET /health
```

Example:

```text
http://localhost:4000/health
```

Response:

```json
{
  "success": true,
  "message": "CALL-E backend is running",
  "port": 4000
}
```

---

## Make Phone Call

```http
POST /call
```

Request:

```json
{
  "phone": "+919876543210",
  "customerName": "Antony"
}
```

The backend sends the call request to CALL-E.

Example response:

```json
{
  "success": true,
  "message": "Call completed successfully",
  "callId": "call_xxxxx",
  "status": "completed"
}
```

---

# 🔄 Call Flow

```text
1. User opens React application

        ↓

2. User enters customer name

        ↓

3. User enters phone number

        ↓

4. User clicks "Make Call"

        ↓

5. React sends POST /call

        ↓

6. Express receives request

        ↓

7. Node.js creates CALL-E task

        ↓

8. CALL-E handles the AI phone conversation

        ↓

9. Call result is returned to Node.js

        ↓

10. Node.js returns result to React

        ↓

11. React displays call status
```

---

# 🔐 Security

The CALL-E API key is stored only on the backend.

```text
React
  │
  │ phone + customer name
  ▼
Node.js
  │
  │ API key
  ▼
CALL-E
```

The API key should **never** be placed inside React source code.

Use:

```env
CALLE_API_KEY=your_api_key
```

and add `.env` to `.gitignore`.

---

# 🧪 Testing

### Test backend

Open:

```text
http://localhost:4000/health
```

### Test frontend

Open:

```text
http://localhost:5173
```

Enter an authorized test phone number and click:

```text
☎ Make Call
```

The application displays:

* Call status
* Call ID
* Success/failure message
* Backend/CALL-E errors when applicable

---

# 🖥️ Running Both Servers

You need two terminals.

### Terminal 1 — Backend

```bash
cd backend
npm start
```

Runs on:

```text
http://localhost:4000
```

### Terminal 2 — Frontend

```bash
cd frontend
npm run dev
```

Runs on:

```text
http://localhost:5173
```

---

# 📌 Example Use Cases

OnCall Hero can be extended for legitimate automated calling workflows such as:

* Restaurant reservation calls
* Appointment confirmation
* Customer callback automation
* Service appointment reminders
* Business enquiry calls
* Order-related calls
* Availability checking
* Customer support automation
* AI voice assistant integrations

---

# 🔮 Future Improvements

* 📋 Call history
* 👤 Customer management
* 🗄️ PostgreSQL database
* 📊 Call analytics dashboard
* 🔊 Call recording management
* 📝 AI-generated call summaries
* 🔔 Call notifications
* 🔄 Retry failed calls
* 📅 Scheduled calls
* 👥 Multiple users
* 🔐 JWT authentication
* 🐳 Docker deployment
* ☁️ AWS deployment
* 📈 Monitoring and logging

---

# ⚠️ Important

This application can initiate real outbound phone calls through CALL-E.

Only call phone numbers that you own or have explicit authorization to contact. Do not use the application for spam, harassment, impersonation, fraud, or unauthorized automated calling.

---

# 👨‍💻 Author

**Antony Marshal**

Node.js Backend Developer

### Technologies

```text
Node.js
Express.js
React
JavaScript
REST APIs
AI Integrations
CALL-E
```

---

## ⭐ Project Goal

OnCall Hero demonstrates how a modern full-stack application can integrate an external AI voice-calling service with a React user interface and a secure Node.js backend.

The project focuses on **API integration, backend architecture, frontend-to-backend communication, environment-based configuration, and AI-powered automation**.
