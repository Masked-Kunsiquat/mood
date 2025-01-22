const dbName = "MoodTrackerDB";
const storeName = "logs";

export const initDB = () => {
    const request = indexedDB.open(dbName, 1);

    request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(storeName)) {
            db.createObjectStore(storeName, { keyPath: "id", autoIncrement: true });
        }
    };

    request.onerror = (event) => {
        console.error("Database error:", event.target.errorCode);
    };
};

export const addLog = (log) => {
    const request = indexedDB.open(dbName, 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.add(log);
    };

    request.onerror = (event) => {
        console.error("Error adding log:", event.target.errorCode);
    };
};

export const getLogs = (callback) => {
    const request = indexedDB.open(dbName, 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readonly");
        const store = transaction.objectStore(storeName);
        const logs = [];
        store.openCursor().onsuccess = (event) => {
            const cursor = event.target.result;
            if (cursor) {
                logs.push(cursor.value);
                cursor.continue();
            } else {
                callback(logs);
            }
        };
    };

    request.onerror = (event) => {
        console.error("Error retrieving logs:", event.target.errorCode);
    };
};

// Update an existing log
export const updateLog = (id, updatedLog) => {
    const request = indexedDB.open(dbName, 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);

        // Get the existing log, then update it
        const getRequest = store.get(id);
        getRequest.onsuccess = (event) => {
            const log = event.target.result;
            if (log) {
                const updatedData = { ...log, ...updatedLog }; // Merge updated fields
                store.put(updatedData);
            }
        };
    };

    request.onerror = (event) => {
        console.error("Error updating log:", event.target.errorCode);
    };
};

// Delete a log by ID
export const deleteLog = (id) => {
    const request = indexedDB.open(dbName, 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.delete(id);
    };

    request.onerror = (event) => {
        console.error("Error deleting log:", event.target.errorCode);
    };
};
