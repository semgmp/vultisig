# Assets Directory

This directory contains all the static assets used in the Vultisig project.

## Directory Structure

```
assets/
├── images/         # All image assets
│   ├── hero/       # Hero section images
│   ├── features/   # Feature section images
│   ├── security/   # Security section images
│   └── community/  # Community section images
└── fonts/          # Custom font files
```

## Image Guidelines

- Use WebP format for better performance
- Optimize images before adding them
- Recommended sizes:
  - Hero images: 1200x800px
  - Feature icons: 64x64px
  - Security images: 800x600px
  - Community images: 1000x600px

## Font Usage

The project uses the following fonts:
- Space Grotesk (loaded via Google Fonts)
- Any custom fonts should be placed in the `fonts/` directory

## Usage in Code

### Images
```jsx
// Example usage in components
<img src="/assets/images/hero/interface.webp" alt="Vultisig Interface" />
```

### Fonts
```css
/* Example usage in CSS */
@font-face {
  font-family: 'CustomFont';
  src: url('/assets/fonts/CustomFont.woff2') format('woff2');
}
``` 