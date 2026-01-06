# Adding Project Screenshots

To make your portfolio more engaging with actual screenshots from your websites, follow these steps:

## Quick Method: Use Screenshots from Live Websites

### Option 1: Use OG Images (Recommended)
Most modern websites have Open Graph images. You can use them directly:

1. Check if your websites have OG images by visiting:
   - `https://playbyturn.com` → View source → Look for `<meta property="og:image">`
   - `https://app.playbyturn.com` → Same process
   - `https://api.playbyturn.com` → Same process

2. Update the `image` field in [data/portfolio.ts](data/portfolio.ts) with the actual OG image URLs

### Option 2: Take Screenshots Manually

1. Visit each website in your browser
2. Take a screenshot (usually `Cmd/Ctrl + Shift + 3` or use browser dev tools)
3. Save screenshots to `/public/projects/` folder:
   ```
   /public/projects/playbyturn-landing.png
   /public/projects/playbyturn-app.png
   /public/projects/playbyturn-api.png
   /public/projects/bpv-storage.png
   ```

4. Update [data/portfolio.ts](data/portfolio.ts):
   ```typescript
   image: "/projects/playbyturn-landing.png"
   ```

### Option 3: Use Screenshot Services

Use free screenshot APIs to generate images:

1. **Screenshot Machine**: `https://api.screenshotmachine.com?url=https://playbyturn.com&dimension=1200x630`
2. **Microlink**: `https://api.microlink.io/?url=https://playbyturn.com&screenshot=true&meta=false`
3. **Thumbnail.ws**: `https://api.thumbnail.ws/api/YOUR_API_KEY/thumbnail/get?url=https://playbyturn.com`

## Current Project Images Setup

The portfolio currently references these image URLs:

```typescript
// PlayByTurn Landing
image: "https://playbyturn.com/og-image.png"

// PlayByTurn App
image: "https://app.playbyturn.com/og-image.png"

// PlayByTurn API
image: "https://api.playbyturn.com/og-image.png"

// BPV Storage
image: "https://storage.balipremiumvilla.com/og-image.png"
```

## Fallback Behavior

If an image fails to load, the component will automatically show a beautiful gradient background instead, so your portfolio will always look good even without screenshots.

## Tips for Great Screenshots

1. **Resolution**: Use 1200x630px or 1920x1080px for best quality
2. **Format**: PNG or JPG (WebP for smaller file sizes)
3. **Content**: Capture the hero section or main features
4. **Optimization**: Compress images before adding to reduce load time
5. **Alt Text**: Already handled automatically using project names

## Next Steps

1. Decide which method you prefer
2. Add your actual screenshots
3. Test the portfolio to ensure images load correctly
4. Optimize images for web if needed
