# GOMUTION

**Global Student & Inventor Project Stream**

GOMUTION is a lightweight, social-style web platform where students, makers, and inventors around the world can publish their builds, prototypes, ideas, demonstration videos, images, and technical build notes with automatic date and day stamping.

---

## Core Features

- **Social-Style Project Feed:** Chronological and popularity-sorted feed displaying creator names, categories, timestamps (day & date), technical explanations, images, and videos.
- **Pure Text-Encoded Cloud Sync:** Designed for ultra-lightweight performance on Firebase Realtime Database by encoding project metadata, timestamps, compressed images, and validated videos into primitive text payloads.
- **Strict Media & Anti-Movie Guardrails:**
  - **3-to-20 Minute Video Window:** Automatically inspects video metadata off-screen before upload, permitting only project demonstrations between **3 minutes (180s)** and **20 minutes (1200s)**.
  - **Anti-Movie & Piracy Filter:** Blocks commercial movie rips, TV episodes, and unauthorized file patterns at selection time.
  - **Client-Side Image Compression:** Automatically resizes and optimizes uploaded diagrams and prototype photos before text encoding.
- **Memory-Safe Playback:** Uses `IntersectionObserver` to automatically pause off-screen videos while scrolling on mobile and desktop browsers.
- **Cloudflare Environment Ready:** Built to inject Firebase credentials securely at deploy time via Cloudflare Pages/Workers environment variables.

---

## Tech Stack

- **Frontend:** Single-file HTML5, CSS3 (Glassmorphic Dark UI), Vanilla ES6+ JavaScript
- **Authentication:** Firebase Authentication (Email & Password)
- **Database & Sync:** Firebase Realtime Database (Primitive Text-Payload Schema)
- **Hosting & Secrets:** GitHub + Cloudflare Pages / Workers

---

## Environment Variables (Cloudflare Setup)

Configure the following environment variables in your Cloudflare deployment settings to connect your Firebase backend:

| Variable Name | Description |
| :--- | :--- |
| `FIREBASE_API_KEY` | Your Firebase Web API Key |
| `FIREBASE_AUTH_DOMAIN` | Your Firebase Auth Domain (`project-id.firebaseapp.com`) |
| `FIREBASE_DATABASE_URL` | Your Firebase Realtime Database URL |
| `FIREBASE_PROJECT_ID` | Your Firebase Project ID |
| `FIREBASE_STORAGE_BUCKET` | Your Firebase Storage Bucket |
| `FIREBASE_MESSAGING_ID` | Your Firebase Cloud Messaging Sender ID |
| `FIREBASE_APP_ID` | Your Firebase Web App ID |

---

## License

MIT License — Open for students, builders, and innovators worldwide.
