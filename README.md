# MERN Stack Real-Time Chat Application

## Overview
This project is a full-stack real-time chat application built using the MERN (MongoDB, Express, React, Node.js) stack. It supports secure user authentication, password hashing, real-time communication, and a modern, responsive user interface.

---

## Features
- **User Authentication**: Secure login and signup functionality implemented using JWT for token-based authentication and bcrypt for password hashing.
- **Real-Time Communication**: Powered by Socket.IO, enabling instant messaging between users.
- **State Management**:
  - Context API: To store and manage user authentication data.
  - Zustand: To handle the application's messages and conversations efficiently.
- **Frontend Design**: Built using Tailwind CSS and DaisyUI for a clean and responsive user interface.
- **Scalability**: The application is designed to handle multiple users and conversations simultaneously.
- **Responsive UI**: Ensures a seamless experience across desktop and mobile devices.

---

## Tech Stack

### Frontend:
- **React**: For building the user interface.
- **Tailwind CSS** & **DaisyUI**: For styling and responsive design.
- **Zustand**: For managing messages and conversations.

### Backend:
- **Node.js** & **Express**: For creating API endpoints.
- **MongoDB**: Database to store user data, conversations, and messages.
- **Socket.IO**: For real-time bi-directional communication.

### Security:
- **JWT**: For secure authentication.
- **bcrypt**: For hashing passwords.

---

## Installation

### Prerequisites:
1. [Node.js](https://nodejs.org/)
2. [MongoDB](https://www.mongodb.com/)

### Steps:

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/mern-chat-app.git
   cd mern-chat-app
   ```

2. Install dependencies for both client and server:
   ```bash
   cd client
   npm install

   cd ../server
   npm install
   ```

3. Configure environment variables:
   - Create a `.env` file in the `server` folder with the following:
     ```env
     PORT=5000
     MONGO_URI=your_mongodb_connection_string
     JWT_SECRET=your_jwt_secret
     ```

4. Start the development server:
   ```bash
   # Start the server
   cd server
   npm start

   # Start the client
   cd ../client
   npm start
   ```

5. Open the app in your browser:
   ```
http://localhost:3000
```

---

## Folder Structure

```
mern-chat-app/
├── client/                # React frontend
│   ├── public/            # Static assets
│   └── src/               # Application source code
│       ├── components/    # Reusable components
│       ├── pages/         # Application pages
│       ├── context/       # Context API for user auth
│       ├── state/         # Zustand store for messages
│       └── App.js         # Main app component
├── server/                # Express backend
│   ├── controllers/       # API controllers
│   ├── models/            # Mongoose models
│   ├── routes/            # Express routes
│   └── server.js          # Entry point for backend
└── README.md              # Documentation
```

---

## Key Endpoints

### User Authentication:
- `POST /api/auth/register`: Register a new user
- `POST /api/auth/login`: Login an existing user

### Conversations:
- `GET /api/conversations`: Fetch all conversations for the logged-in user
- `POST /api/conversations`: Create a new conversation

### Messages:
- `GET /api/messages/:conversationId`: Fetch messages for a specific conversation
- `POST /api/messages`: Send a new message

---

## Screenshots


![chat](https://github.com/user-attachments/assets/460407e6-0781-4d8a-84ba-64e76599df72)

![chatapp](https://github.com/user-attachments/assets/e5eabe74-9b07-4d5d-92d8-460fe05517d1)


## Future Improvements
- Add group chat functionality.
- Enhance message delivery confirmation and read receipts.
- Improve performance for large-scale usage.
- Implement end-to-end encryption for better security.

---

## Contribution
Feel free to fork the project and submit pull requests. Contributions are welcome!

---

## License
This project is licensed under the MIT License. See the LICENSE file for more details.

---

## Contact
For any questions or suggestions, feel free to contact me:
- **Email**: neerajnero9066@gmail.com
- **GitHub**: [[yourusername](https://github.com/yourusername)](https://github.com/NeerajNero)

---


