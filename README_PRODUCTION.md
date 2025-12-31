# Jaydeep Balde - Portfolio

A modern, production-ready portfolio website built with React, Tailwind CSS, and Framer Motion.

## Features

- 🎨 Beautiful gradient design with smooth animations
- 📱 Fully responsive and mobile-optimized
- ⚡ High-performance with optimized bundle size
- 🎯 SEO-friendly with proper meta tags
- 🌙 Dark theme with accessibility support
- 🚀 Production-ready and deployment-ready
- 📊 Showcases projects, skills, and experience

## Tech Stack

- **Framework**: React 19.2.3
- **Styling**: Tailwind CSS 3.4.17 + PostCSS
- **Animation**: Framer Motion 12.23.26
- **Icons**: Lucide React 0.562.0
- **Build**: React Scripts 5.0.1
- **Testing**: Jest + React Testing Library

## Getting Started

### Prerequisites

- Node.js 18+ and npm/yarn installed

### Installation

```bash
# Clone the repository
git clone <repository-url>
cd jaydeep-portfolio

# Install dependencies
npm install

# Start development server
npm start
```

The application will open at [http://localhost:3000](http://localhost:3000)

## Development

### Available Scripts

```bash
# Start development server
npm start

# Build for production
npm run build

# Run tests
npm test

# Eject configuration (one-way operation)
npm run eject
```

## Production Build

Build the optimized production version:

```bash
npm run build
```

The build folder will contain:
- Minified JavaScript and CSS
- Optimized images
- Source maps (disabled in production)
- Service worker for PWA support

## Deployment

### Vercel (Recommended)

```bash
npm i -g vercel
vercel
```

### Netlify

Connect your GitHub repository to Netlify for automatic deployments.

### Traditional Hosting (Nginx/Apache)

1. Build the project: `npm run build`
2. Upload the `build` folder contents to your server
3. Configure your server to serve `index.html` for all routes

#### Nginx Configuration

```nginx
server {
  listen 80;
  server_name yourdomain.com;
  
  root /var/www/build;
  index index.html;
  
  location / {
    try_files $uri $uri/ /index.html;
  }
  
  # Cache static assets
  location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg)$ {
    expires 1y;
    add_header Cache-Control "public, immutable";
  }
}
```

## Project Structure

```
src/
├── App.js              # Main component with all sections
├── App.css             # Global styles
├── index.js            # React entry point
├── index.css           # Base styles with Tailwind imports
└── reportWebVitals.js  # Performance metrics

public/
├── index.html          # HTML template
├── favicon.ico         # Site favicon
├── manifest.json       # PWA manifest
└── robots.txt          # SEO robots configuration
```

## Key Sections

- **Home**: Hero section with introduction and CTA buttons
- **About**: Professional background and statistics
- **Skills**: Technical skills with progress indicators
- **Experience**: Work history with achievements
- **Projects**: Featured projects with metrics
- **Achievements**: Certifications and recognition
- **Articles**: Blog posts and insights
- **Contact**: Multiple contact methods
- **Footer**: Social links and copyright

## Customization

### Update Personal Information

Edit `src/App.js` to update:
- Name and title
- Bio and description
- Skills and technologies
- Experience and projects
- Contact information
- Social media links

### Modify Styling

- Color scheme: Edit Tailwind theme in `tailwind.config.js`
- Global styles: Modify `src/index.css`
- Component styles: Use Tailwind classes in `src/App.js`

### Add Resume

Place your `resume.pdf` in the `public` folder. The download links will automatically work.

## Performance Optimizations

- ✅ Lazy loading with Framer Motion
- ✅ Smooth scroll behavior
- ✅ Optimized images and assets
- ✅ Production-ready build configuration
- ✅ Mobile-first responsive design
- ✅ Accessibility support (WCAG)

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

© 2024 Jaydeep Balde. All rights reserved.

## Contact

- **Email**: jaydeepbalade15@gmail.com
- **GitHub**: [@JaideepBalde](https://github.com/JaideepBalde)
- **LinkedIn**: [Jaydeep Balde](https://www.linkedin.com/in/jaydeep-balde-220a43204/)
