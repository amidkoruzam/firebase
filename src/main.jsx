import React from "react";
import ReactDOM from "react-dom/client";
import { AuthProvider } from "./shared/auth";
import App from "./App";
import { AppQueryClientProvider } from "./shared/query-client";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppQueryClientProvider>
      <AuthProvider>
        <App />
      </AuthProvider>
    </AppQueryClientProvider>
  </React.StrictMode>
);
