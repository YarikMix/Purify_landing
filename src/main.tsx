import { AnchorProvider } from "react-anchor-navigation";
import { createRoot } from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
    <AnchorProvider>
        <PhotoProvider>
            <App />
        </PhotoProvider>
    </AnchorProvider>
);
