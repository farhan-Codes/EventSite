# InterCollege Competition 2K25

A full-stack web application for managing registrations, event details, and communications for the InterCollege Competition 2025.

## Features

- **Event Registration:**  
  Users can register for events with a user-friendly form and upload payment screenshots.

- **Event Listings:**  
  All available events are displayed with details and images.

- **Admin & Email Integration:**  
  Registration triggers confirmation emails using Nodemailer and Gmail.

- **Cloudinary Integration:**  
  Uploaded images are stored securely in Cloudinary.

- **Animated Toasts & Popups:**  
  User feedback is provided via animated toast notifications.

- **Responsive UI:**  
  Built with React and Next.js, styled for desktop and mobile.

## Tech Stack

- **Frontend:** React, Next.js
- **Backend:** Next.js API routes, Node.js
- **Database:** MySQL (via `db.query`)
- **Cloud Storage:** Cloudinary
- **Email:** Nodemailer (Gmail)
- **Styling:** CSS Modules, Tailwind CSS (utility classes)
- **State Management:** React Context API

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/yourusername/intercollege-competition.git
cd intercollege-competition
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure Environment Variables

Create a `.env.local` file in the root directory:

```env
DB_USER=your_db_user
DB_PASSWORD=your_db_password
DB_DATABASE=your_db_name
DB_SERVER=your_db_host

CLOUD_NAME=your_cloudinary_cloud_name
CLOUD_API=your_cloudinary_api_key
CLOUD_API_SECRET=your_cloudinary_api_secret

EMAIL_USER=your_gmail_address
EMAIL_SECRET=your_gmail_app_password
```

### 4. Run the development server

```bash
npm run dev
```

Visit [http://localhost:3000](http://localhost:3000) to view the app.

## Project Structure

```
/components      # React components (forms, popups, UI)
/lib             # Utility libraries (cloudinary, email, db)
/pages           # Next.js pages and API routes
/public          # Static assets
/styles          # CSS modules and global styles
.env.local       # Environment variables
```

## Key Files

- `pages/index.js` — Main landing page
- `components/Registerform.jsx` — Registration form
- `components/Tools.jsx` — Toasts, popups, and UI helpers
- `lib/cloud.js` — Cloudinary integration
- `lib/email.js` — Nodemailer integration
- `pages/api/register.js` — Registration API endpoint

## Notes

- **Environment variables** must be set and the dev server restarted after changes.
- **Cloudinary** and **Gmail App Password** are required for image upload and email features.
- **MySQL** database must be accessible and pre-configured.

## License

MIT

---

**Made for InterCollege