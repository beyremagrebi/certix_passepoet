
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";

import { ThemeProvider } from "./components/providers/ThemeProvider.tsx";
import { BrowserRouter } from "react-router-dom";

import Certix from "./Certix.tsx";


createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
    <ThemeProvider >
     
     <Certix></Certix>
    
    </ThemeProvider>
     </BrowserRouter>
  </StrictMode>
);
