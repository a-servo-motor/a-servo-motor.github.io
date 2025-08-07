# Deploy Your Portfolio to GitHub Pages

## Step 1: Create a GitHub Repository

1. Go to [GitHub.com](https://github.com)
2. Click the "+" button in the top right, then "New repository"
3. Name it something like `my-mit-portfolio` or `portfolio-website`
4. Make sure it's **Public** (required for free GitHub Pages)
5. **Don't** initialize with README, .gitignore, or license (we already have these files)
6. Click "Create repository"

## Step 2: Push Your Code to GitHub

In your computer's terminal (not the MIT web terminal), navigate to your project folder and run:

```bash
# If you haven't initialized git yet
git init

# Add all files
git add .

# Commit your changes
git commit -m "Initial commit - MIT portfolio website"

# Add your GitHub repository as remote (replace YOUR_USERNAME and YOUR_REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/YOUR_REPO_NAME.git

# Push to GitHub
git push -u origin main
```

**Note**: Replace `YOUR_USERNAME` with your GitHub username and `YOUR_REPO_NAME` with the repository name you created.

## Step 3: Enable GitHub Pages

1. Go to your repository on GitHub
2. Click on "Settings" tab
3. Scroll down to "Pages" in the left sidebar
4. Under "Source", select "GitHub Actions"
5. GitHub will automatically detect the workflow file I created

## Step 4: Wait for Deployment

1. Go to the "Actions" tab in your repository
2. You should see a workflow running called "Deploy to GitHub Pages"
3. Wait for it to complete (usually takes 2-5 minutes)
4. Once complete, your website will be live!

## Step 5: Access Your Website

Your website will be available at:
```
https://YOUR_USERNAME.github.io/YOUR_REPO_NAME
```

## Alternative: Custom Domain with MIT

If you want to use a custom domain that includes "mit.edu", you have a few options:

### Option 1: MIT GitHub Organization
- Join MIT's GitHub organization (if available to students)
- This would give you URLs like: `https://mit-username.github.io`

### Option 2: Custom Domain
- If you have access to an MIT subdomain, you can configure it in GitHub Pages
- Go to Settings > Pages > Custom domain
- Enter your domain (like `yourname.mit.edu`)
- Note: You'll need to coordinate with MIT IT for DNS settings

## Updating Your Website

To update your website in the future:
1. Make changes to your code
2. Run: `git add .`
3. Run: `git commit -m "Description of your changes"`
4. Run: `git push`
5. GitHub will automatically rebuild and redeploy your site!

## Troubleshooting

**Build fails**: Check the Actions tab for error details
**Site not loading**: Make sure repository is public
**Images not showing**: Verify image paths are correct in the `public` folder
**Still having issues**: Check that the workflow file is in `.github/workflows/deploy.yml`

---

**Need help with any of these steps?** Let me know which step you're on and what's happening!