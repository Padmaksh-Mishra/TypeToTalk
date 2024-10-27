# TypeToTalk

TypeToTalk is a fully responsive web chat application built with the MERN stack. It offers a seamless user login/signup system with JWT for secure user authentication. The app supports personal and group chats, file sharing, and emoji support. Real-time messaging is enabled through Socket.io, and file handling is managed with Multer. Zustand is used for state management, and ShadCN is utilized for UI components.

## Features

- User Authentication (JWT)
- Personal and Group Chats
- Real-Time Messaging (Socket.io)
- File Sharing
- Emoji Support
- Responsive Design

## Tech Stack

- **Frontend**: React, Vite, Zustand, TailwindCSS, ShadCN
- **Backend**: Node.js, Express, MongoDB, Mongoose
- **Real-Time**: Socket.io
- **File Handling**: Multer
- **State Management**: Zustand

## Getting Started

### Prerequisites

- Node.js
- MongoDB

### Installation

1. Clone the repository:
    ```sh
    git clone https://github.com/yourusername/typetotalk.git
    cd typetotalk
    ```

2. Install dependencies for both client and server:
    ```sh
    cd client
    npm install
    cd ../server
    npm install
    ```

3. Set up environment variables:
    - Create a `.env` file in both `client` and `server` directories based on the provided `.env.example` files.

4. Start the development servers:
    ```sh
    cd client
    npm run dev
    cd ../server
    npm run dev
    ```
