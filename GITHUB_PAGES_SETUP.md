# GitHub Pages Setup Instructions

If your site is showing the README instead of your portfolio, follow these steps:

## Step 1: Configure GitHub Pages Source

1. Go to your repository on GitHub: `https://github.com/Sanjay-Sinh-Sodha/dev-portfolio`
2. Click on **Settings** (top menu)
3. Scroll down to **Pages** (left sidebar)
4. Under **Source**, select **"GitHub Actions"** (NOT "Deploy from a branch")
5. Click **Save**

## Step 2: Verify Workflow is Running

1. Go to the **Actions** tab in your repository
2. You should see a workflow called "Deploy to GitHub Pages"
3. Click on it to see if it's running or has completed
4. If it failed, click on the failed run to see the error

## Step 3: Trigger a New Deployment

If the workflow hasn't run yet:

1. Go to the **Actions** tab
2. Click on **"Deploy to GitHub Pages"** workflow
3. Click **"Run workflow"** button (top right)
4. Select the **main** branch
5. Click **"Run workflow"**

## Step 4: Wait for Deployment

- The workflow usually takes 2-3 minutes
- Once it completes, your site should be live at: `https://sanjay-sinh-sodha.github.io/dev-portfolio/`

## Troubleshooting

### Still seeing README?

1. **Clear browser cache** - Press `Ctrl+Shift+R` (Windows/Linux) or `Cmd+Shift+R` (Mac)
2. **Check the Actions tab** - Make sure the workflow completed successfully
3. **Verify Pages settings** - Make sure it's set to "GitHub Actions", not a branch
4. **Wait a few minutes** - Sometimes it takes a few minutes for changes to propagate

### Workflow is failing?

Check the workflow logs in the Actions tab to see what error occurred. Common issues:
- Build errors (check if all dependencies are in package.json)
- Path issues (verify the build output path is correct)

### Need to manually trigger?

You can manually trigger the workflow:
1. Go to Actions tab
2. Select "Deploy to GitHub Pages"
3. Click "Run workflow"
