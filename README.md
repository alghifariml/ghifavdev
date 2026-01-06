# Portfolio Website - M. Luthfi Al Ghifari

A modern, responsive portfolio website built with Next.js, TypeScript, and TailwindCSS showcasing professional experience, projects, and skills.

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15, TypeScript, and TailwindCSS
- **Fully Responsive**: Optimized for all device sizes
- **Smooth Animations**: Powered by Framer Motion
- **SEO Optimized**: Meta tags, Open Graph, and semantic HTML
- **Fast Performance**: Server-side rendering and optimized assets
- **Easy to Update**: Centralized data management in `/data/portfolio.ts`

## 📦 Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Font**: Geist Sans & Geist Mono

## 🛠️ Getting Started

### Prerequisites

- Node.js 18+ installed
- npm or yarn package manager

### Installation

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## 📁 Project Structure

```
├── app/
│   ├── layout.tsx          # Root layout with metadata
│   ├── page.tsx            # Main portfolio page
│   └── globals.css         # Global styles
├── components/
│   ├── Header.tsx          # Navigation header
│   ├── Footer.tsx          # Footer with social links
│   └── sections/           # Page sections
│       ├── Hero.tsx        # Landing section
│       ├── Experience.tsx  # Work experience timeline
│       ├── Projects.tsx    # Project showcase
│       ├── Skills.tsx      # Skills and expertise
│       └── Contact.tsx     # Contact information
├── data/
│   └── portfolio.ts        # All portfolio data
└── public/                 # Static assets
```

## ✏️ Customization

### Update Your Information

Edit `/data/portfolio.ts` to update:
- Personal information
- Work experience
- Projects (with screenshots and categories)
- Skills
- Education
- Languages

### Add Project Screenshots

See [SCREENSHOTS.md](SCREENSHOTS.md) for detailed instructions on adding screenshots to your projects. The portfolio supports:
- Direct image URLs from your websites
- Local images in `/public/projects/`
- Automatic fallback to gradient backgrounds

### Modify Styling

- **Colors**: Update TailwindCSS theme in `tailwind.config.ts`
- **Fonts**: Change fonts in `app/layout.tsx`
- **Components**: Edit individual components in `/components`

## 🚀 Deployment

### Deploy to Vercel (Recommended)

1. Push your code to GitHub
2. Import project to [Vercel](https://vercel.com)
3. Deploy with one click

### Build for Production

```bash
npm run build
npm start
```

## 📄 Sections

1. **Hero/About**: Professional summary and introduction
2. **Experience**: Timeline of work experience with achievements
3. **Projects**: Showcase of key projects with technologies and links
4. **Skills**: Categorized technical skills and expertise
5. **Contact**: Multiple ways to get in touch

## 🎨 Design Features

- Gradient backgrounds
- Smooth scroll behavior
- Hover animations
- Responsive navigation
- Mobile-friendly menu
- Timeline visualizations
- Card-based layouts

## 📝 License

This project is open source and available for personal use.

## 👤 Author

**M. Luthfi Al Ghifari**
- Email: alghifarimuh1@gmail.com
- LinkedIn: [linkedin.com/in/alghifariml](https://linkedin.com/in/alghifariml)
- GitHub: [github.com/alghifariml](https://github.com/alghifariml)

---

Built with ❤️ using Next.js and TailwindCSS
