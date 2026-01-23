# Portfolio Showcase

A modern, responsive portfolio website showcasing professional experience, skills, and projects. Built with React, TypeScript, and Vite.

## 🚀 Features

- **Modern UI/UX**: Beautiful, responsive design with smooth animations
- **Professional Sections**:
  - Hero section with introduction
  - About me section
  - Skills showcase
  - Experience timeline
  - Featured projects
  - Contact form
- **Dark Theme**: Elegant dark theme with gradient accents
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Fast Performance**: Optimized build with Vite

## 📋 Prerequisites

- Node.js (v18 or higher)
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone https://github.com/your-username/Portfolio-Showcase.git
cd Portfolio-Showcase
```

2. Install dependencies:
```bash
npm install
```

## 🏃 Development

To run the development server:

```bash
npm run dev
```

The application will be available at `http://localhost:5173` (or the port shown in your terminal).

## 🏗️ Building

### For Production (Full Stack)

To build both client and server:

```bash
npm run build
```

This will create:
- Client build in `dist/public/`
- Server build in `dist/index.cjs`

### For Static Deployment (GitHub Pages)

To build only the static client for GitHub Pages:

```bash
npm run build:static
```

This will create a static build in `dist/public/` that can be deployed to GitHub Pages.

## 📦 Deployment

### GitHub Pages

This project is configured for automatic deployment to GitHub Pages using GitHub Actions.

#### Setup Instructions:

1. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Select "GitHub Actions"

2. **Configure Base Path** (if needed):
   - If your repository name is `Portfolio-Showcase`, the site will be available at `https://yourusername.github.io/Portfolio-Showcase/`
   - To change the base path, update the `base` property in `vite.config.ts`

3. **Automatic Deployment**:
   - Push to the `main` branch
   - The GitHub Actions workflow will automatically build and deploy your site

#### Manual Deployment:

If you prefer to deploy manually:

```bash
npm run build:static
```

Then push the `dist/public` folder contents to the `gh-pages` branch or use GitHub Pages to serve from the `dist/public` directory.

### Other Static Hosting Services

The static build can also be deployed to:
- **Netlify**: Drag and drop the `dist/public` folder
- **Vercel**: Connect your GitHub repository
- **Cloudflare Pages**: Connect your GitHub repository
- Any other static hosting service

## ⚠️ Important Notes

### Contact Form Limitation

**The "Send me a message" contact form will NOT work in static deployments** (like GitHub Pages) because it requires a backend server to process the form submissions.

The contact form makes POST requests to `/api/contact`, which needs:
- A running Express server
- Database connection (PostgreSQL)
- Server-side validation

**Alternatives for static deployment:**
- Use a third-party service like [Formspree](https://formspree.io/), [Netlify Forms](https://www.netlify.com/products/forms/), or [EmailJS](https://www.emailjs.com/)
- Replace the form with a direct email link (`mailto:`)
- Use a serverless function (Vercel Functions, Netlify Functions, AWS Lambda)

### Other Features

All other features work perfectly in static deployment:
- ✅ Navigation
- ✅ Smooth scrolling
- ✅ Project cards
- ✅ Experience timeline
- ✅ Skills showcase
- ✅ Resume download
- ✅ Social media links

## 📁 Project Structure

```
Portfolio-Showcase/
├── client/                 # Frontend React application
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── pages/          # Page components
│   │   ├── hooks/          # Custom React hooks
│   │   └── lib/            # Utilities and configurations
│   └── index.html          # HTML entry point
├── server/                 # Backend Express server (not needed for static)
├── shared/                 # Shared types and schemas
├── script/                 # Build scripts
└── dist/                   # Build output
```

## 🛠️ Tech Stack

- **Frontend**:
  - React 18
  - TypeScript
  - Vite
  - Tailwind CSS
  - Framer Motion (animations)
  - Radix UI (components)
  - React Query
  - Wouter (routing)

- **Backend** (for full-stack deployment):
  - Express.js
  - PostgreSQL
  - Drizzle ORM
  - Zod (validation)

## 📝 License

MIT License - feel free to use this project for your own portfolio!

## 👤 Author

**Sanjay Sodha**
- Email: sodhasanjay14@gmail.com
- LinkedIn: [Sanjay Sodha](https://www.linkedin.com/in/sanjay-sinh-sodha/)
- GitHub: [Sanjay-Sinh-Sodha](https://github.com/Sanjay-Sinh-Sodha)

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/your-username/Portfolio-Showcase/issues).

---

⭐ If you found this project helpful, please consider giving it a star!
