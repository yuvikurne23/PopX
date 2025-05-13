# PopX User Registration and Login App

This is a simple React application that allows users to:
- Register with their full name, phone, email, password, and company.
- Login using registered credentials.
- View their account settings after successful login.
- Store and fetch user data using `localStorage`.
- Automatically generate profile avatars using the user's name.
- Logout from the account.

## Features

- 🔐 Passwords stored in encoded (Base64) format to avoid plain-text visibility.
- ✅ User validation on login.
- 🧠 State management using React hooks.
- 💾 Persistent storage using browser `localStorage`.
- 👤 Avatar auto-generation using [UI Avatars](https://ui-avatars.com/).
- 🚪 Logout functionality.

## Technologies Used

- React
- React Router
- Tailwind CSS
- JavaScript (ES6)

## Getting Started

### Prerequisites

- Node.js and npm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yuvikurne23/PopX.git
   cd popx-user-auth


## Project Structure
PopX/
├── public/               # Static assets
├── src/
│   ├── components/       # Reusable UI components
│   ├── pages/            # Page components (e.g., Home, Login, Profile)
│   ├── App.jsx           # Root component
│   ├── main.jsx          # Entry point
│   └── index.css         # Global styles
├── .gitignore
├── index.html
├── package.json
├── README.md
└── vite.config.js
              
