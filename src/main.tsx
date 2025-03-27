import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ProfileProvider } from "./context/ProfileContext.tsx";
import { ProjectProvider } from "./context/ProjectContext.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ProfileProvider>
      <ProjectProvider>
        <App />
      </ProjectProvider>
    </ProfileProvider>
  </StrictMode>
);
