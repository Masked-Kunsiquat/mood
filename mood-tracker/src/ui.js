import { getLogs } from "./db.js";

const logList = document.getElementById("log-list");

export const displayLogs = () => {
    getLogs((logs) => {
        logList.innerHTML = logs
            .map(
                (log) =>
                    `<li class="p-2 bg-gray-200 rounded flex justify-between items-center">
                        <span>${log.date}: ${log.mood} - ${log.activity} (${log.journal || "No note"})</span>
                        <div class="flex gap-2">
                            <button class="edit-btn bg-blue-500 text-white px-2 py-1 rounded" data-id="${log.id}">Edit</button>
                            <button class="delete-btn bg-red-500 text-white px-2 py-1 rounded" data-id="${log.id}">Delete</button>
                        </div>
                    </li>`
            )
            .join("");
    });

    // Add export button
    const exportButton = document.createElement("button");
    exportButton.textContent = "Export Logs as JSON";
    exportButton.classList.add("bg-yellow-500", "text-white", "px-4", "py-2", "rounded", "mt-4");
    document.body.appendChild(exportButton);
    exportButton.addEventListener("click", () => {
        const event = new CustomEvent("exportLogs");
        document.dispatchEvent(event);
    });
};
