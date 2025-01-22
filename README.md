# Mood Tracker PWA

A simple, offline-first progressive web app for tracking daily moods, activities, and journal entries.

## Features
- Add, edit, and delete mood logs.
- Offline support with a service worker.
- Reset environment for testing.
- Data persistence using IndexedDB.

## Getting Started
1. Clone the repository:
   ```
   git clone https://github.com/Masked-Kunsiquat/mood
   cd mood-tracker
   ```
2. Install dependencies:
   ```
   npm install
   ```
3. Run the app:
   ```
   npx live-server src/
   ```

# Roadmap
## v0.0.x – Alpha Stage (Core Functionality)

### v0.0.1

- [X] Implement basic PWA structure:

  - [X] Set up service worker for offline caching.

  - [X] Create responsive UI for desktop and mobile.


- [X] Build core functionality:

  - [X] Log daily moods (predefined list).
    - Status: Added UI elements for mood selection (dropdown).

  - [X] Log daily activities (predefined list).
    - Status: Added UI elements for activity selection (dropdown).

  - [X] Add optional journal entries for each day.
    - Status: Add textarea input for journal entries.

- [X] Set up local storage with IndexedDB:

  - [X] Design database schema for moods, activities, and logs.
    - Status: Schema defined in `db.js`.

  - [X] Implement CRUD operations for logs.
    - [X] Add log functionality (`addLog`).
    - [X] Read/display logs (`getLogs` UI integration).
    - [X] Update logs.
    - [X] Delete logs.




---

### v0.0.2

- [ ] Add JSON export for logs:

 - [ ] Implement a "Download Logs" feature.


- [ ] Improve input validation:

  - [ ] Prevent saving empty or invalid entries.


- [ ] Optimize IndexedDB queries for performance.



---

### v0.0.3

- [ ] Implement JSON import for logs:

  - [ ] Allow users to upload JSON files to restore logs.


- [ ] Set up basic internal API:

  - [ ] Add CRUD endpoints for moods, activities, and logs (used internally by the PWA).




---

## v0.1.x – Beta Stage (Usability Enhancements)

### v0.1.0

- [ ] Add customizable moods:

  - [ ] Create UI for adding/editing/deleting moods.


- [ ] Add customizable activities:

  - [ ] Create UI for adding/editing/deleting activities.


- [ ] Implement calendar view:

  - [ ] Add a calendar UI for navigating daily logs.


- [ ] Initial analytics:

  - [ ] Create mood frequency charts.

  - [ ] Create activity frequency charts.




---

### v0.1.1

- [ ] Refine user experience:

  - [ ] Improve touch gestures for mobile users.

  - [ ] Add tooltips and hints for better usability.


- [ ] Optimize IndexedDB for larger datasets.



---

### v0.1.2

- [ ] Refine data export:

  - [ ] Improve JSON structure for better readability.




---

## v0.2.x – Insights and Analytics

### v0.2.0

- [ ] Advanced analytics:

  - [ ] Weekly and monthly mood summaries.

  - [ ] Correlations between moods and activities.


- [ ] Data visualization:

  - [ ] Line charts for mood trends.

  - [ ] Pie/bar charts for mood and activity distribution.




---

###v0.2.1

- [ ] Add heatmap visualization:

  - [ ] Display mood entries by date in a heatmap.




---

### v0.2.2

- [ ] Add data export to CSV:

  - [ ] Implement "Download as CSV" functionality.


- [ ] Enhance chart interactivity:

  - [ ] Add hover tooltips for more data details.




---

## v0.3.x – Data Security and PWA Polish

### v0.3.0

- [ ] Implement local data encryption:

  - [ ] Encrypt mood/activity data using Web Crypto API.


- [ ] Add password protection for app access.

- [ ] Enhance PWA functionality:

  - [ ] Add "Install as App" feature for Android/iOS/desktop.

  - [ ] Improve service worker caching for offline mode.




---

### v0.3.1

- [ ] Improve accessibility:

  - [ ] Add ARIA roles and labels for screen readers.

  - [ ] Ensure color contrast and font scalability.




---

## v1.0.x – Stable Release

### v1.0.0

- [ ] Deliver polished, stable PWA with:

  - [ ] Comprehensive analytics (e.g., yearly reports, correlations).

  - [ ] Advanced customization (e.g., themes, font adjustments).

  - [ ] Fully responsive, offline-first experience.




---

# Post v1.0.0: Future Features

These will be planned after a stable release:

## v1.1.x – Cloud Sync:

  - [ ] Enable optional cloud sync with user accounts.

  - [ ] Add data synchronization across devices.


## v1.2.x – CRM Integration:

  - [ ] Introduce a "Contacts" section to track individuals.

  - [ ] Associate moods and activities with specific people.

  - [ ] Generate insights into relationships and their impact on mood.


## v1.3.x – Gamification:

  - [ ] Add achievements and badges for logging streaks or milestones.


## v2.x.x – AI and Advanced Features:

  - [ ] Sentiment analysis for journal entries.

  - [ ] Activity recommendations based on mood trends.




---

## How to Handle Bug Fixes

Since we can’t predict specific bugs, here’s how to manage them in the roadmap:

Assume bug fixes will be folded into patch releases (e.g., v0.0.2, v0.1.1).

If critical bugs arise that block progress, they may justify small interim patches (e.g., v0.0.1 -> v0.0.1.1).

Track bugs as issues in your repository (e.g., GitHub Issues), and update the roadmap dynamically.


