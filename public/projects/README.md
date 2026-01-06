# Project Screenshots

Place your project screenshots in this directory.

## Recommended Format

- **File names**: Use kebab-case (e.g., `playbyturn-landing.png`)
- **Resolution**: 1200x630px or 1920x1080px
- **Format**: PNG, JPG, or WebP
- **Size**: Keep under 500KB per image (compress if needed)

## Example Structure

```
/public/projects/
├── playbyturn-landing.png
├── playbyturn-app.png
├── playbyturn-api.png
├── bpv-storage.png
├── bali-premium-trip.png
└── wordpress-themes.png
```

## Usage in Code

After adding screenshots here, update `data/portfolio.ts`:

```typescript
{
  name: "PlayByTurn - Main Website",
  image: "/projects/playbyturn-landing.png",
  // ... rest of project config
}
```

## Quick Screenshot Tips

1. **Browser**: Use Chrome/Firefox dev tools (F12) → Device toolbar → Set to 1200x630
2. **Take Screenshot**: Use browser's built-in screenshot or extensions
3. **Optimize**: Use tools like TinyPNG, Squoosh, or ImageOptim
4. **Test**: Refresh your portfolio to see the screenshots

For more details, see [SCREENSHOTS.md](../../SCREENSHOTS.md) in the root directory.
