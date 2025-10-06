// main.tsx
import React from "react";
import ReactDOM from "react-dom/client"; // Importe de react-dom/client
import App from "./App";



// Crie a raiz da aplicação com createRoot
const root = ReactDOM.createRoot(document.getElementById("root")!);

// Renderize o App dentro da raiz
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
