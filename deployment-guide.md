# GitHub Pages Deployment Guide

## Quick Start (5 minutes)

### Step 1: Upload Files to GitHub
1. Go to [GitHub.com](https://github.com) and sign in
2. Click the "+" icon in the top right corner
3. Select "New repository"
4. Name it: `jithin-varghese-pm` (or your preferred name)
5. Make it **Public** (required for free GitHub Pages)
6. Click "Create repository"

### Step 2: Upload Your Files
1. In your new repository, click "uploading an existing file"
2. Drag and drop these files:
   - `index.html`
   - `styles.css`
   - `script.js`
   - `README.md`
3. Add a commit message: "Initial portfolio upload"
4. Click "Commit changes"

### Step 3: Enable GitHub Pages
1. Go to your repository **Settings** tab
2. Scroll down to **Pages** section (left sidebar)
3. Under **Source**, select "Deploy from a branch"
4. Select **main** branch
5. Select **/ (root)** folder
6. Click **Save**

### Step 4: Access Your Portfolio
- Your portfolio will be live at: `https://yourusername.github.io/jithin-varghese-pm/`
- Wait 5-10 minutes for deployment to complete
- You'll see a green checkmark when it's ready

## Detailed Setup (Alternative Method)

### Using Git Command Line

```bash
# Clone your repository
git clone https://github.com/yourusername/jithin-varghese-pm.git
cd jithin-varghese-pm

# Copy your files to the repository folder
# (Copy index.html, styles.css, script.js, README.md here)

# Add files to git
git add .

# Commit changes
git commit -m "Add portfolio files"

# Push to GitHub
git push origin main
```

### Using GitHub Desktop
1. Download [GitHub Desktop](https://desktop.github.com/)
2. Clone your repository
3. Copy files to the local repository folder
4. Commit and push changes

## Custom Domain (Optional)

If you want a custom domain like `jithinvarghese.com`:

1. **Buy a domain** from providers like:
   - Namecheap
   - GoDaddy
   - Google Domains

2. **Configure DNS**:
   - Add a CNAME record pointing to `yourusername.github.io`
   - Or add A records for GitHub Pages IPs

3. **Update GitHub Pages**:
   - Go to repository Settings > Pages
   - Add your custom domain
   - Enable "Enforce HTTPS"

## Troubleshooting

### Common Issues

**Portfolio not loading:**
- Check that all files are in the root directory
- Ensure `index.html` is named exactly (case-sensitive)
- Wait 10-15 minutes for GitHub Pages to update

**Styling not working:**
- Verify `styles.css` is uploaded correctly
- Check browser console for errors
- Ensure file paths are correct

**PDF export not working:**
- Check that `script.js` is properly linked
- Test in different browsers
- Ensure popup blockers are disabled

### GitHub Pages Status
- Check deployment status in repository Actions tab
- Look for green checkmarks indicating successful deployment
- Check the Pages tab for any error messages

## Performance Optimization

### Image Optimization
- Compress images before uploading
- Use WebP format when possible
- Add lazy loading for better performance

### Code Optimization
- Minify CSS and JavaScript for production
- Remove unused code
- Optimize font loading

## Security Considerations

- Keep sensitive information out of public repositories
- Use environment variables for API keys
- Regularly update dependencies

## Analytics (Optional)

Add Google Analytics:
1. Get tracking ID from Google Analytics
2. Add tracking code to `index.html` before closing `</head>` tag
3. Monitor visitor behavior and engagement

## Backup Strategy

- Keep local copies of all files
- Use Git to track changes
- Consider backing up to cloud storage
- Document any customizations made

## Maintenance

### Regular Updates
- Update content regularly
- Keep contact information current
- Add new projects and achievements
- Update skills and technologies

### Performance Monitoring
- Use Google PageSpeed Insights
- Monitor Core Web Vitals
- Check mobile responsiveness
- Test across different browsers

## Support

If you encounter issues:
1. Check GitHub Pages documentation
2. Search GitHub Community forums
3. Review browser console for errors
4. Test in incognito/private mode

---

**Your portfolio is now live and ready to impress recruiters! 🚀**
