import { addLog, getLogs, updateLog, deleteLog, exportLogsAsJSON } from "./db.js";
import { displayLogs } from "./ui.js";

export const setupEventListeners = () => {
    const form = document.getElementById("log-form");
    const logList = document.getElementById("log-list");

    // Add new log
    form.addEventListener("submit", (event) => {
        event.preventDefault();

        const mood = document.getElementById("mood").value;
        const activity = document.getElementById("activity").value;
        const journal = document.getElementById("journal").value;

        const log = { mood, activity, journal, date: new Date().toISOString() };
        addLog(log);

        form.reset();
        displayLogs();
    });

    // Handle Edit and Delete actions using Event Delegation
    logList.addEventListener("click", (event) => {
        const target = event.target;
        const id = Number(target.dataset.id); // Get log ID from data attribute

        if (target.classList.contains("edit-btn")) {
            // Handle Edit Action
            editLog(id);
        } else if (target.classList.contains("delete-btn")) {
            // Handle Delete Action
            deleteLog(id);
            displayLogs();
        }
    });
};
    document.addEventListener("exportLogs", () => {
        exportLogsAsJSON((json) => {
            const blob = new Blob([json], { type: "application/json" });
            const url = URL.createObjectURL(blob);
            const a = document.createElement("a");
            a.href = url;
            a.download = "mood-logs.json";
            a.click();
            URL.revokeObjectURL(url);
        });
    });

// Function to handle editing logs
const editLog = (id) => {
    const moodInput = document.getElementById("mood");
    const activityInput = document.getElementById("activity");
    const journalInput = document.getElementById("journal");
    const form = document.getElementById("log-form");

    // Fetch the log to edit (retrieved by ID from IndexedDB)
    getLogs((logs) => {
        const log = logs.find((log) => log.id === id);
        if (log) {
            // Populate the form with the log details
            moodInput.value = log.mood;
            activityInput.value = log.activity;
            journalInput.value = log.journal;

            // Replace Add button with Update button
            const updateBtn = document.createElement("button");
            updateBtn.textContent = "Update Log";
            updateBtn.classList.add("bg-green-500", "text-white", "py-2", "rounded");

            // Add an event listener for updating the log
            updateBtn.addEventListener("click", (event) => {
                event.preventDefault();

                const updatedLog = {
                    mood: moodInput.value,
                    activity: activityInput.value,
                    journal: journalInput.value,
                    date: log.date, // Retain original date
                };

                updateLog(id, updatedLog); // Update the log in the database
                form.reset();
                updateBtn.remove(); // Remove the Update button
                displayLogs();
            });

            // Add the Update button to the form
            form.appendChild(updateBtn);
        }
    });
};

export const setupResetEnvironment = () => {
    const resetButton = document.getElementById("reset-env");

    resetButton.addEventListener("click", async () => {
        // Clear IndexedDB
        const dbRequest = indexedDB.deleteDatabase("MoodTrackerDB");
        dbRequest.onsuccess = () => console.log("IndexedDB cleared successfully.");
        dbRequest.onerror = (event) =>
            console.error("Error clearing IndexedDB:", event.target.errorCode);

        // Unregister Service Worker
        if ("serviceWorker" in navigator) {
            const registrations = await navigator.serviceWorker.getRegistrations();
            for (const registration of registrations) {
                await registration.unregister();
                console.log("Service Worker unregistered.");
            }
        }

        // Reload the page to apply changes
        window.location.reload();
    });
}
};
