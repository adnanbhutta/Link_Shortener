# Link_Shortener

![Link_Shortener Banner](banner.png)

**Link_Shortener** is a premium, powerful, and modern URL shortener built for professionals. Create customized short links, manage advanced routing features, track link view statistics in real-time, and control your brand—all packed in a sleek, stunning UI. Created by **Adnan Ali**.

## 🚀 Production Deployment (Vercel + Neon)

To deploy this project for free without a credit card:
1. **Database**: Create a free PostgreSQL database at [Neon.tech](https://neon.tech).
2. **Environment Variables**: In your Vercel project settings, add:
   - `DATABASE_URL`: Your Neon connection string.
   - `DB_CLIENT`: `pg`
   - `JWT_SECRET`: A long random string.
3. **Deploy**: Push to GitHub and Vercel will handle the rest.

---

## 🚀 Key Features

*   **Modern SaaS Interface:** Beautifully designed UI with built-in dark/light mode toggling, seamless Glassmorphism cards, and professional typography.
*   **Custom Domains:** Configure your own short domains to establish trust and maintain branding control.
*   **Advanced Link Routing:** 
    *   Set custom alias endings (e.g., `linkspecial.to/my-custom-path`).
    *   Protect sensitive links with password protection.
    *   Set precise URL expiration times.
*   **Real-time Analytics:** Track every click to monitor engagement, traffic sources, and geo-locations dynamically.
*   **Lightning Fast & Secure:** Backed by highly optimized native NodeJS implementations (SQLite/PostgreSQL compatible) to handle high-traffic effortlessly.

## 🛠️ Installation & Setup

Link_Shortener is ready to deploy natively on your local machine or via Docker. The default setup works out-of-the-box with zero database configuration (defaults to SQLite).

### Option A: Quick Start (Node.js)

**Prerequisites:** Node.js (v20+) installed on your machine.

1.  **Clone / Download the project**
2.  **Install dependencies:**
    ```bash
    npm install
    ```
3.  **Configure Environment:**
    Copy `.example.env` and rename it to  `.env`. Add a `JWT_SECRET` string. For development, make sure to add:
    ```bash
    NODE_ENV=development
    ```
4.  **Initialize Database:**
    ```bash
    npm run migrate
    ```
5.  **Start your Link_Shortener Server:**
    ```bash
    npm run dev
    ```
    Your modern shortener is now accessible at `http://localhost:3000`. On your first visit, you will be prompted to create your admin account.

### Option B: Docker Compose

For a one-click isolated environment, start the app and its integrated database immediately via Docker:

```bash
docker compose up
```
Head over to your local network deployment at `http://localhost:3000`.

## ⚙️ Configuration & `.env`

Link_Shortener provides comprehensive options explicitly designed for modern deployment infrastructure.

| Variable | Description |
| -------- | ----------- |
| `JWT_SECRET` | Required. Long securely randomized string. |
| `DEFAULT_DOMAIN` | The primary operational domain (default: `localhost:3000`) |
| `DB_CLIENT` | Choose highly concurrent backends `better-sqlite3`, `pg`, or `mysql2` |
| `CUSTOM_DOMAIN_USE_HTTPS`| Auto-redirect configured domains to HTTPS for maximum security. |
| `MAIL_ENABLED` | Set `true` to authenticate via an external SMTP server. |

## 👨‍💻 Created By

**Adnan Ali**

Thank you for choosing Link_Shortener to optimize your link sharing workflow. If you want a scalable, clean, and advanced link shortened logic without the bloated SaaS subscriptions, this project has you covered.

---
*© 2026 Link_Shortener. All Rights Reserved.*

