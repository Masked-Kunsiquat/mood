import { initDB, addLog, getLogs } from "./db.js";

// Initialize the database
initDB();

const form = document.getElementById("log-form");
const logList = document.getElementById("log-list");

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

const displayLogs = () => {
    getLogs((logs) => {
        logList.innerHTML = logs
            .map(
                (log) =>
                    `<li class="p-2 bg-gray-200 rounded">${log.date}: ${log.mood} - ${log.activity} (${log.journal || "No note"})</li>`
            )
            .join("");
    });
};

// Load logs on page load
displayLogs();
