import React from "react"
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import { App } from "./components/App";

const app = (
    <BrowserRouter>
        <App />
    </BrowserRouter>
)

const root = document.getElementById("root");
createRoot(root).render(app);