import { ReactNode } from "react";
import { createRoot } from "react-dom/client";
import { PhotoProvider } from "react-photo-view";
import App from "./App.tsx";
import { AnchorProvider } from "./lib/reactAnchorNavigation";

createRoot(document.getElementById("root")!).render(
    (
        <AnchorProvider>
            <PhotoProvider>
                <App />
            </PhotoProvider>
        </AnchorProvider>
    ) as ReactNode
);
