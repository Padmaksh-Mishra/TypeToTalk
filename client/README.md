# TypeToTalk Client

This is the frontend part of the TypeToTalk project, built with React and Vite. It handles the user interface and client-side logic for the chat application.

## Tech Stack

- **React**
- **Vite**
- **Zustand** for state management
- **TailwindCSS** for styling
- **ShadCN** for UI components
- **Socket.io-client** for real-time communication


## Flow and Working

1. **Entry Point**: The application starts from [`src/main.jsx`](client/src/main.jsx), which renders the `App` component wrapped in `SocketProvider`.

2. **Routing**: The `App` component in [`src/App.jsx`](client/src/App.jsx) uses `react-router-dom` for routing. It defines routes for authentication, chat, and profile pages.

3. **State Management**: Zustand is used for state management. The global state is managed in [`src/store`](client/src/store).

4. **Authentication**: The `PrivateRoute` and `AuthRoute` components in [`src/App.jsx`](client/src/App.jsx) handle route protection based on user authentication status.

5. **Real-Time Communication**: The `SocketProvider` in [`src/context/SocketContext.jsx`](client/src/context/SocketContext.jsx) sets up the Socket.io client for real-time messaging.

6. **Styling**: TailwindCSS is used for styling, with custom configurations in [`src/index.css`](client/src/index.css).

## Running the Client

1. Install dependencies:
    ```sh
    npm install
    ```

2. Start the development server:
    ```sh
    npm run dev
    ```

3. Open your browser and navigate to `http://localhost:3000`.
