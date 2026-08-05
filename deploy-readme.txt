============================================================
  HOW TO DEPLOY YOUR ACADEMIC PORTFOLIO ON VERCEL
  Complete Step-by-Step Guide for Beginners
============================================================

This guide will help you deploy your portfolio website to the
internet so anyone can access it. You already have:
  ✅ Vercel account (created with GitHub)
  ✅ Git installed on your computer
  ✅ GitHub account

Follow these steps IN ORDER:

------------------------------------------------------------
STEP 1: CREATE A GITHUB REPOSITORY
------------------------------------------------------------
1. Open your web browser and go to: https://github.com
2. Sign in with your GitHub account
3. Click the "+" icon in the top-right corner of the page
4. Select "New repository" from the dropdown menu
5. In the "Repository name" field, type:  academic-portfolio
6. Make sure "Public" is selected (this is required for the
   free Vercel plan)
7. DO NOT check the box that says "Add a README file"
   (we already have one in the project)
8. Click the green "Create repository" button at the bottom

After this, GitHub will show you a page with instructions.
Keep this page open - you will need the URL shown there.

------------------------------------------------------------
STEP 2: CONNECT YOUR PROJECT TO GITHUB
------------------------------------------------------------
1. Open a terminal/command prompt in your project folder.
   The project folder is:  D:\VS Code\VibeCoding

   To open a terminal in this folder:
   - Open File Explorer
   - Go to D:\VS Code\VibeCoding
   - Right-click in the folder (empty area)
   - Select "Open in Terminal" (or "Git Bash Here")

2. Type this command and press Enter (replace YOUR_USERNAME
   with your actual GitHub username):

   git remote add origin https://github.com/YOUR_USERNAME/academic-portfolio.git

   Example: If your GitHub username is "waqar2193", type:
   git remote add origin https://github.com/waqar2193/academic-portfolio.git

3. Type this command and press Enter:

   git branch -M main

4. Type this command and press Enter:

   git push -u origin main

   - If it asks for your GitHub username, type it and press Enter
   - If it asks for a password, use your GitHub Personal Access
     Token (not your regular password). If you don't have one:
     a. Go to github.com → Settings → Developer settings
     b. Click "Personal access tokens" → "Tokens (classic)"
     c. Click "Generate new token"
     d. Give it a name, check "repo" box, click "Generate"
     e. Copy the token and use it as your password

5. After the push completes, refresh your GitHub repository
   page - you should see all your project files there.

------------------------------------------------------------
STEP 3: DEPLOY ON VERCEL
------------------------------------------------------------
1. Open your web browser and go to: https://vercel.com
2. Sign in with your GitHub account (you already did this)
3. On the dashboard, click the "Add New" button
   (usually top-right corner)
4. Select "Project" from the dropdown
5. Vercel will show a list of your GitHub repositories.
   Find "academic-portfolio" and click the "Import" button
   next to it
6. Vercel will automatically detect that this is a Next.js
   project. You don't need to change any settings.
7. Click the "Deploy" button
8. Wait for 2-3 minutes while Vercel builds your website.
   You'll see a progress log.
9. When the build is complete, you'll see a success message
   with a green checkmark
10. Your website is now LIVE at:
    https://academic-portfolio.vercel.app

    Click the link to see your portfolio online!

------------------------------------------------------------
STEP 4: CUSTOM DOMAIN (OPTIONAL)
------------------------------------------------------------
If you have your own domain (like muhammadwaqar.com):

1. Go to your Vercel dashboard
2. Click on your "academic-portfolio" project
3. Go to "Settings" tab
4. Click "Domains" in the left menu
5. Type your domain name and click "Add"
6. Follow the DNS instructions shown by Vercel
   (usually you add a CNAME record at your domain provider)

------------------------------------------------------------
STEP 5: HOW TO UPDATE YOUR WEBSITE IN THE FUTURE
------------------------------------------------------------
Whenever you make changes to your portfolio:

1. Open a terminal in D:\VS Code\VibeCoding
2. Type these three commands one by one:

   git add .
   git commit -m "Describe your changes here"
   git push

3. Vercel will automatically detect the new changes and
   redeploy your website (takes 1-2 minutes)
4. Your updated website will be live automatically!

------------------------------------------------------------
TROUBLESHOOTING
------------------------------------------------------------

Q: I get "fatal: not a git repository" error
A: Run this first:  git init
   Then repeat Step 2 from the beginning.

Q: I get "Author identity unknown" error
A: Run these two commands:
   git config --global user.name "Your Name"
   git config --global user.email "your@email.com"

Q: Vercel shows a build error
A: Check the error log. Most common issues:
   - Missing files: Make sure you pushed all files
   - Node version: Vercel uses Node 18+ by default, which is fine

Q: I want to delete the deployment
A: Go to Vercel dashboard → project → Settings → Danger Zone
   → Delete Project

Q: How much does this cost?
A: Nothing! Vercel's free tier includes:
   - 100GB bandwidth per month
   - Unlimited static pages
   - Automatic SSL certificate
   - Global CDN

------------------------------------------------------------
YOUR WEBSITE URL
------------------------------------------------------------
After deployment, your website will be at:
https://academic-portfolio.vercel.app

You can share this link with anyone!

============================================================
  END OF GUIDE
============================================================