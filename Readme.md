# Chat Application

   this is a  full-stack chat application built with **React**, **Node.js**, **Express**, **MongoDB**, and **Socket.IO**. The application allows users to register, log in, and engage in real-time messaging with other users. It also supports features like profile management, image uploads, and theme customization.

## Features

### Frontend
- **User Authentication**: Sign up, log in, and log out functionality.
- **Real-Time Messaging**: Send and receive messages instantly using **Socket.IO**.
- **Image Uploads**: Attach images to messages and upload profile pictures.
- **Responsive Design**: Fully responsive UI built with **TailwindCSS** and **DaisyUI**.
- **Theme Customization**: Choose from multiple themes for a personalized experience.
- **User Status**: View online/offline status of users in real-time.

### Backend
- **RESTful API**: Built with **Express.js** to handle authentication, messaging, and user management.
- **Database**: **MongoDB** for storing user and message data.
- **Authentication**: Secure user authentication using **JWT** and cookies.
- **Cloudinary Integration**: Store and retrieve images using **Cloudinary**.
- **WebSocket Support**: Real-time communication powered by **Socket.IO**.

## Tech Stack

### Frontend
- **React**: For building the user interface.
- **Vite**: For fast development and build processes.
- **Zustand**: For state management.
- **TailwindCSS** and **DaisyUI**: For styling.

### Backend
- **Node.js**: For server-side JavaScript.
- **Express.js**: For building the RESTful API.
- **MongoDB**: For database storage.
- **Socket.IO**: For real-time communication.
- **Cloudinary**: For image storage and management.

## Installation

### Prerequisites
- **Node.js** and **npm** installed on your system.
- **MongoDB** database connection string.
- **Cloudinary** account for image uploads.

### Backend Setup
1. Navigate to the `backend` directory:
   ```bash
   cd backend
2. npm install
3. Create a .env file in the backend directory and add the following:
    MONGO_URI=<your-mongodb-connection-string>
    PORT=5001
    CLOUDINARY_CLOUD_NAME=<your-cloudinary-cloud-name>
    CLOUDINARY_API_KEY=<your-cloudinary-api-key>
    CLOUDINARY_API_SECRET=<your-cloudinary-api-secret>
    JWT_SECRET=<your-jwt-secret>
4. npm run dev


### Frontend Setup
1. cd frontend
2. npm install
3. npm run dev



### Usage
1. Sign Up: Create a new account by providing your full name, email, and password.
2. Log In: Access your account using your email and password.
3. Start Chatting: Select a user from the sidebar to start a conversation.
4. Send Messages: Type a message or upload an image to send.
5. Profile Management: Update your profile picture and view account details.
6. Theme Customization: Choose a theme from the settings page.


Folder Structure

backend/
├── .env
├── .gitignore
├── 
├── src/
│   ├── 
│   ├── controllers/
│   ├── lib/
│   ├── middleware/
│   ├── models/
│   ├── routes/
│   └── seeds/
frontend/
├── .gitignore
├── 
├── 
├── src/
│   ├── 
│   ├── 
│   ├── components/
│   ├── constants/
│   ├── lib/
│   ├── pages/
│   ├── store/
│   └── [index.css](http://_vscodecontentref_/7)



API Endpoints

Authentication
POST /api/auth/register: Register a new user.
POST /api/auth/login: Log in a user.
POST /api/auth/logout: Log out a user.
PUT /api/auth/update-profile: Update user profile.
GET /api/auth/check: Check authentication status.

Messaging
GET /api/msg/users: Get all users except the logged-in user.
GET /api/msg/:id: Get messages between the logged-in user and another user.
POST /api/msg/send/:id: Send a message to another user.


License
This project is licensed under the MIT License. See the LICENSE file for details.

Acknowledgments
React for the frontend framework.
Node.js and Express for the backend.
MongoDB for the database.
Cloudinary for image storage.
Socket.IO for real-time communication.
TailwindCSS and DaisyUI for styling.