# SimuPanel — Customer Simulation Platform

A Next.js marketing website for SimuPanel, a customer simulation platform powered by SSR that lets you test campaigns with lifelike digital twins of your buyers before you launch.

## 🚀 Overview

SimuPanel lets you see how your ideal customers would react to your product, ad, or campaign — instantly. Test ideas with digital twins that think — and reason — like your customers. Get human-level purchase intent and qualitative feedback in minutes, powered by the same peer-reviewed AI used by Colgate-Palmolive and PyMC Labs.

## ✨ Features

- **Single-page application** with smooth scrolling sections
- **Responsive design** optimized for all devices
- **Modern UI/UX** inspired by OpenAI's documentation and premium analytics dashboards
- **Framer Motion animations** for enhanced user experience
- **SEO optimized** with comprehensive meta tags and Open Graph support
- **TypeScript** for type safety and better developer experience
- **Tailwind CSS** for utility-first styling

## 🛠️ Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Fonts**: Inter (Google Fonts)
- **Deployment**: Vercel (ready)

## 📁 Project Structure

```
SimuPanel/
├── app/
│   ├── globals.css          # Global styles and Tailwind directives
│   ├── layout.tsx           # Root layout with metadata
│   └── page.tsx             # Main page component
├── components/
│   ├── Navigation.tsx       # Sticky navigation bar
│   ├── Hero.tsx            # Hero section with CTAs
│   ├── Science.tsx         # Science and methodology section
│   ├── HowItWorks.tsx      # Process explanation
│   ├── Results.tsx         # Results visualization
│   ├── UnderTheHood.tsx    # Technical implementation details
│   ├── WhoItsFor.tsx       # Target audience personas
│   ├── Pricing.tsx         # Pricing tiers and plans
│   ├── FAQ.tsx             # Frequently asked questions
│   └── FinalCTA.tsx        # Final call-to-action section
├── lib/
│   └── pricing.ts          # Pricing data and FAQ content
├── public/                 # Static assets
└── tailwind.config.ts      # Tailwind CSS configuration
```

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, pnpm, or bun

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/simupanel.git
   cd simupanel
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   # or
   bun dev
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000) to see the website.

## 🎨 Design System

### Color Palette
- **Primary**: Blue (#2563eb) - Trust and technology
- **Secondary**: Gray scale - Professional and clean
- **Accent**: Gradient text effects for emphasis

### Typography
- **Primary Font**: Inter (Google Fonts)
- **Monospace**: SF Mono for code elements

### Components
- **Cards**: Rounded corners with subtle shadows
- **Buttons**: Gradient backgrounds with hover effects
- **Animations**: Smooth transitions using Framer Motion

## 📱 Sections

1. **Hero** - Main value proposition and primary CTAs
2. **Science** - Peer-reviewed methodology and credibility
3. **How It Works** - 3-step process explanation
4. **Results** - Sample outputs and data visualization
5. **Under the Hood** - Technical implementation details
6. **Who It's For** - Target audience personas
7. **Pricing** - Simple, transparent pricing tiers
8. **FAQ** - Common questions and answers
9. **Final CTA** - Closing call-to-action

## 🔧 Configuration

### Tailwind CSS
The project uses Tailwind CSS v3 with custom configuration in `tailwind.config.ts`:
- Custom color palette
- Extended spacing and animations
- Custom utility classes

### Environment Variables
No environment variables required for basic functionality. For production deployment, consider adding:
- Analytics tracking IDs
- API endpoints
- Third-party service keys

## 🚀 Deployment

### Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically with zero configuration

### Other Platforms
The project can be deployed to any platform that supports Next.js:
- Netlify
- AWS Amplify
- Railway
- DigitalOcean App Platform

## 📈 Performance

- **Lighthouse Score**: Optimized for 90+ across all metrics
- **Core Web Vitals**: Excellent LCP, FID, and CLS scores
- **SEO**: Comprehensive meta tags and structured data
- **Accessibility**: WCAG 2.1 compliant

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Support

For questions or support, please contact:
- Email: hello@simupanel.com
- Website: [simupanel.com](https://simupanel.com)

## 🙏 Acknowledgments

- **PyMC Labs** and **Colgate-Palmolive** for the peer-reviewed SSR methodology
- **OpenAI** for inspiration on documentation design
- **Vercel** for the Next.js framework and deployment platform
- **Tailwind CSS** team for the utility-first CSS framework

---

**SimuPanel** — Make confident, data-backed decisions in minutes, not months.