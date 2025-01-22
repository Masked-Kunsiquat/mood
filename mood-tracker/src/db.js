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
};

export const addLog = (log) => {
    const request = indexedDB.open(dbName, 1);
    request.onsuccess = (event) => {
        const db = event.target.result;
        const transaction = db.transaction(storeName, "readwrite");
        const store = transaction.objectStore(storeName);
        store.add(log);
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
};
