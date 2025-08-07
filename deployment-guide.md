# MIT Domain Deployment Guide

## Prerequisites
- MIT Athena account (your MIT username and password)
- Access to an Athena workstation or MIT server

## Method 1: scripts.mit.edu (Recommended)

### Step 1: Prepare Your Website
```bash
# Build your Next.js site for static export
npm run build

# This creates an 'out' folder with your static site
```

### Step 2: Access Athena
You can access Athena in several ways:
- **SSH**: `ssh yourname@athena.dialup.mit.edu`
- **Web interface**: Use MIT's web-based terminal
- **On-campus**: Use any Athena workstation

### Step 3: Set Up scripts.mit.edu
```bash
# Once logged into Athena, run:
add scripts
scripts

# Follow the prompts to set up your scripts account
```

### Step 4: Upload Your Website
```bash
# Your website files go in: ~/web_scripts/
# Create the directory if it doesn't exist
mkdir -p ~/web_scripts

# Upload your 'out' folder contents to ~/web_scripts/
# You can use scp, sftp, or file transfer methods
```

### Step 5: Access Your Site
Your website will be available at: `https://yourname.scripts.mit.edu`

## Method 2: web.mit.edu (Alternative)

### Step 1: Prepare Static Files
```bash
npm run build
# Use the 'out' folder contents
```

### Step 2: Upload to MIT Web Space
```bash
# SSH to Athena
ssh yourname@athena.dialup.mit.edu

# Create www directory in your home folder
mkdir -p ~/www

# Upload your files to ~/www/
```

### Step 3: Access Your Site
Your website will be available at: `https://web.mit.edu/yourname/www/`

## File Transfer Methods

### Using SCP (from your local machine):
```bash
# Upload the entire 'out' directory
scp -r ./out/* yourname@athena.dialup.mit.edu:~/web_scripts/
```

### Using SFTP:
```bash
sftp yourname@athena.dialup.mit.edu
put -r out/* web_scripts/
```

### Using rsync:
```bash
rsync -avz ./out/ yourname@athena.dialup.mit.edu:~/web_scripts/
```

## Important Notes

1. **File Permissions**: Make sure your files have the correct permissions:
   ```bash
   chmod 755 ~/web_scripts
   chmod 644 ~/web_scripts/*
   ```

2. **Index File**: Ensure you have an `index.html` file in your root directory

3. **SSL**: Both scripts.mit.edu and web.mit.edu support HTTPS automatically

4. **Updates**: To update your site, simply replace the files in your web directory

5. **Debugging**: If your site doesn't load, check:
   - File permissions
   - Directory structure
   - Console errors in browser

## Troubleshooting

- **Site not loading**: Check file permissions and ensure index.html exists
- **Scripts account issues**: Contact scripts@mit.edu
- **General MIT IT issues**: Contact MIT IS&T help desk

## Additional Resources
- scripts.mit.edu documentation: https://scripts.mit.edu/
- MIT IS&T web hosting: https://ist.mit.edu/
- Athena documentation: https://ist.mit.edu/athena