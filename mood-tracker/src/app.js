import { initDB } from "./db.js";
import { displayLogs } from "./ui.js";
import { setupEventListeners } from "./events.js";
import { setupResetEnvironment } from "./events.js";

setupResetEnvironment();

// Initialize the database
initDB();

// Set up event listeners
setupEventListeners();

// Display logs on page load
displayLogs();

// Register Service Worker
if ("serviceWorker" in navigator) {
    window.addEventListener("load", () => {
        navigator.serviceWorker
            .register("/service-worker.js")
            .then(() => console.log("Service Worker Registered"))
            .catch((error) => console.error("Service Worker Registration Failed:", error));
    });
}
