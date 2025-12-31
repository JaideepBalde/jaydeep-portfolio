# Production Deployment Guide

## Pre-Deployment Checklist

- [ ] Update all personal information in `src/App.js`
- [ ] Add `resume.pdf` to `public/` folder
- [ ] Test locally with `npm start`
- [ ] Build production version with `npm run build`
- [ ] Test built version locally
- [ ] Check all links and social media URLs
- [ ] Verify meta tags in `public/index.html`
- [ ] Test on mobile devices
- [ ] Check SEO with Lighthouse

## Building for Production

```bash
npm run build
```

This creates an optimized `build/` folder with:
- Minified HTML, CSS, and JavaScript
- Optimized assets
- Service worker for offline support
- Production-optimized React build

## Environment Variables

Set these before building:

```bash
REACT_APP_VERSION=1.0.0
GENERATE_SOURCEMAP=false
PUBLIC_URL=/
```

## Deployment Options

### 1. Vercel (Easiest)

```bash
npm install -g vercel
vercel login
vercel --prod
```

### 2. Netlify

1. Connect GitHub repo to Netlify
2. Set build command: `npm run build`
3. Set publish directory: `build`
4. Auto-deploys on push to main

### 3. AWS S3 + CloudFront

```bash
# Configure AWS CLI
aws configure

# Build project
npm run build

# Upload to S3
aws s3 sync build/ s3://your-bucket-name/

# Invalidate CloudFront cache
aws cloudfront create-invalidation --distribution-id YOUR_ID --paths "/*"
```

### 4. Traditional Hosting

1. Build: `npm run build`
2. Upload `build/` contents to server root
3. Configure server for SPA routing
4. Enable GZIP compression
5. Add security headers
6. Set up HTTPS certificate

### Nginx Configuration

```nginx
server {
    listen 80;
    server_name yourdomain.com;
    return 301 https://$server_name$request_uri;
}

server {
    listen 443 ssl http2;
    server_name yourdomain.com;

    ssl_certificate /path/to/cert.pem;
    ssl_certificate_key /path/to/key.pem;

    root /var/www/build;
    index index.html;

    # SPA Routing
    location / {
        try_files $uri $uri/ /index.html;
    }

    # Cache busting for static assets
    location ~* \.(js|css)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
    }

    # Cache images
    location ~* \.(png|jpg|jpeg|gif|ico|svg|webp)$ {
        expires 365d;
        add_header Cache-Control "public, immutable";
    }

    # Security headers
    add_header Strict-Transport-Security "max-age=31536000; includeSubDomains" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-Frame-Options "DENY" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Gzip compression
    gzip on;
    gzip_vary on;
    gzip_types text/plain text/css text/xml text/javascript application/javascript application/xml+rss;
    gzip_min_length 1000;
}
```

### Apache Configuration

```apache
<IfModule mod_rewrite.c>
  RewriteEngine On
  RewriteBase /
  RewriteRule ^index\.html$ - [L]
  RewriteCond %{REQUEST_FILENAME} !-f
  RewriteCond %{REQUEST_FILENAME} !-d
  RewriteRule . /index.html [L]
</IfModule>

# Cache busting
<FilesMatch "\.(js|css)$">
  Header set Cache-Control "max-age=31536000, public"
</FilesMatch>

<FilesMatch "\.(png|jpg|jpeg|gif|ico|svg|webp)$">
  Header set Cache-Control "max-age=2592000, public"
</FilesMatch>

# Security headers
Header set Strict-Transport-Security "max-age=31536000; includeSubDomains"
Header set X-Content-Type-Options "nosniff"
Header set X-Frame-Options "DENY"
Header set X-XSS-Protection "1; mode=block"
```

## Post-Deployment

1. **Test Deployed Site**
   - All pages load correctly
   - Links work properly
   - Mobile responsive
   - Forms functional

2. **SEO Verification**
   - Check robots.txt
   - Submit sitemap to Google Search Console
   - Verify meta tags
   - Check page titles and descriptions

3. **Performance Monitoring**
   - Use Google PageSpeed Insights
   - Check Core Web Vitals
   - Monitor with Google Analytics
   - Set up error tracking (Sentry)

4. **Security Checklist**
   - HTTPS enabled
   - Security headers configured
   - No sensitive data in code
   - Dependencies updated
   - No console errors

## Continuous Deployment

Set up automatic deployments on push:

```bash
# GitHub Actions example
# Create .github/workflows/deploy.yml

name: Deploy

on:
  push:
    branches: [main]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - uses: actions/setup-node@v2
        with:
          node-version: '18'
      - run: npm install
      - run: npm run build
      - uses: actions/upload-artifact@v2
        with:
          name: build
          path: build/
```

## Troubleshooting

### Build fails with dependency errors
```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

### White screen after deployment
- Check browser console for errors
- Verify PUBLIC_URL setting
- Ensure index.html is served for all routes
- Check React version compatibility

### Slow loading performance
- Enable gzip compression
- Optimize images
- Use CDN for static assets
- Enable caching headers
- Consider code splitting

## Support

For issues or questions, refer to:
- React Documentation: https://react.dev
- Tailwind CSS: https://tailwindcss.com
- Framer Motion: https://www.framer.com/motion
- React Scripts: https://create-react-app.dev
