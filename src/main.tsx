import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./index.css";
import { ChakraProvider, defaultSystem } from "@chakra-ui/react";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider value={defaultSystem}>
        <App />
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
