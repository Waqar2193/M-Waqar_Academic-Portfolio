# Muhammad Waqar — Academic Portfolio

A modern, responsive, and professional academic portfolio website for a PhD researcher, built with **Next.js 16, React 19, TypeScript, Tailwind CSS v4, and Framer Motion**.

## ✨ Features

- **Dark/Light mode** with seamless theme switching
- **Sticky navigation** with smooth scrolling and active section highlighting
- **Modern animations** using Framer Motion
- **Beautiful animated background** with gradient mesh blobs and grid pattern
- **Clickable certificates** for awards (lightbox viewer)
- **Clickable presentation photos** for talks (lightbox viewer)
- **Professional typography** (Inter + Lora via next/font)
- **SEO-friendly** with metadata and Open Graph tags
- **Accessible and responsive** (ARIA labels, keyboard navigation, reduced-motion support)
- **Reusable React components** with clean folder structure

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router
│   ├── layout.tsx          # Root layout with metadata, fonts, theme
│   ├── page.tsx            # Main page composing all sections
│   └── globals.css         # Tailwind + custom styles + background theme
├── components/
│   ├── layout/             # Navbar, Footer, ThemeToggle
│   ├── sections/           # Hero, About, Research, Publications, etc.
│   └── ui/                 # Reusable UI (Card, Badge, Lightbox, etc.)
├── data/                   # ← ALL personal data lives here
│   ├── profile.ts          # Name, title, bio, photo, social links
│   ├── publications.ts      # Your papers
│   ├── projects.ts         # Research projects
│   ├── skills.ts           # Technical skills
│   ├── education.ts        # Education & experience
│   ├── awards.ts           # Awards & certificates
│   ├── news.ts             # News & updates with photos
│   └── contact.ts          # Contact details
└── lib/
    └── utils.ts            # Helper functions
```

## 🚀 Getting Started (Local Development)

### Prerequisites
- **Node.js** 18.17 or later
- **npm** (comes with Node.js)

### Run locally

```bash
# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Production build

```bash
npm run build
npm start
```

## 📝 Editing Your Information

All personal data is centralized in **`src/data/`** — one file per section. You never need to touch component code to update content.

| File | What to edit |
|---|---|
| `src/data/profile.ts` | Name, title, bio, photo, social links |
| `src/data/publications.ts` | Your papers (title, authors, venue, year, DOI) |
| `src/data/projects.ts` | Research projects |
| `src/data/skills.ts` | Technical skills |
| `src/data/education.ts` | Education & experience |
| `src/data/awards.ts` | Awards & certificates (add `certificate` image paths) |
| `src/data/news.ts` | News & updates (add `images` photo paths) |
| `src/data/contact.ts` | Contact details |

### Adding certificates & photos
- **Certificates**: Place in `public/images/certificates/` and add paths to `awards.ts`
- **Presentation photos**: Place in `public/images/presentations/` and add paths to `news.ts`

## 🌐 Deploying to Vercel (Step-by-Step Guide)

### Step 1: Create a GitHub Repository

1. Go to **github.com** and sign in
2. Click the **"+"** icon (top-right corner) → **"New repository"**
3. Repository name: `academic-portfolio` (or any name you prefer)
4. Set visibility to **Public** (required for Vercel free tier)
5. **Do NOT** check "Add a README file" (we already have one)
6. Click **"Create repository"**

### Step 2: Push Your Code to GitHub

Open a terminal in your project folder and run:

```bash
# Add your GitHub repository as the remote
git remote add origin https://github.com/YOUR_USERNAME/academic-portfolio.git

# Set the main branch name
git branch -M main

# Push your code to GitHub
git push -u origin main
```

> **Replace `YOUR_USERNAME`** with your actual GitHub username.

### Step 3: Deploy on Vercel

1. Go to **vercel.com** and sign in with GitHub (you already did this ✅)
2. Click **"Add New"** → **"Project"**
3. You'll see a list of your GitHub repositories
4. Find `academic-portfolio` → click **"Import"**
5. Vercel **auto-detects Next.js** — no configuration needed
6. Click **"Deploy"**
7. Wait ~2-3 minutes for the build to complete
8. 🎉 Your site is live at `https://academic-portfolio.vercel.app`

### Step 4: Custom Domain (Optional)

1. Go to Vercel dashboard → your project → **Settings** → **Domains**
2. Add a custom domain (e.g., `muhammadwaqar.com`) if you have one
3. Follow the DNS configuration instructions

### Step 5: Future Updates

Every time you make changes and push to GitHub:

```bash
git add .
git commit -m "Your update message"
git push
```

Vercel **automatically redeploys** your site — no manual steps needed!

## 🛠️ Tech Stack

- **Next.js 16** — React framework with App Router
- **React 19** — UI library
- **TypeScript** — Type safety
- **Tailwind CSS v4** — Utility-first styling
- **Framer Motion** — Animations
- **next-themes** — Dark/light mode

## 📄 License

© Muhammad Waqar. All rights reserved.