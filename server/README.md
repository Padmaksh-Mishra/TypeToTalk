# TypeToTalk Server

This is the backend part of the TypeToTalk project, built with Node.js and Express. It handles the server-side logic, including user authentication, chat management, and real-time communication.

## Tech Stack

- **Node.js**
- **Express**
- **MongoDB** with Mongoose
- **Socket.io** for real-time communication
- **Multer** for file handling
- **JWT** for authentication

## Flow and Working

1. **Entry Point**: The server starts from [`index.js`](server/index.js), which sets up the Express app and connects to MongoDB.

2. **Middleware**: Common middlewares like `cors`, `cookie-parser`, and `express.json` are used for handling CORS, cookies, and JSON payloads.

3. **Routing**: Routes are defined in the [`routes`](server/routes) directory and are used in [`index.js`](server/index.js) to handle different API endpoints.

4. **Controllers**: Business logic for different routes is handled in the [`controllers`](server/controllers) directory.

5. **Real-Time Communication**: The [`socket.js`](server/socket.js) file sets up Socket.io for real-time messaging.

6. **Database**: Mongoose is used for MongoDB interactions, with models defined in the [`models`](server/models) directory.

## Running the Server

1. Install dependencies:
    ```sh
    npm install
    ```

2. Set up environment variables:
    - Create a `.env` file based on the provided `.env.example` file.

3. Start the development server:
    ```sh
    npm run dev
    ```

4. The server will be running at `http://localhost:3000`.
