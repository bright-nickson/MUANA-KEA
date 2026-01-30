# Getting Started Guide - Mauna Kea Consulting Website

---

## Quick Start (5 Minutes)

### 1. Clone & Install

```bash
# Clone repository
git clone <repo-url>
cd windsurf-project

# Install dependencies
npm install

# Install Vercel CLI (optional)
npm i -g vercel
```

### 2. Set Up Environment

Create `.env.local`:
```env
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_key
```

### 3. Start Development

```bash
npm run dev
```

Visit `http://localhost:3000`

---

## Project Overview

**Mauna Kea Consulting Website** is a modern, responsive Next.js application featuring:

- ✅ Beautiful landing page with carousel hero
- ✅ Service offerings showcase
- ✅ Industries served
- ✅ Contact form with email integration
- ✅ Mobile-optimized responsive design
- ✅ Smooth animations and transitions

---

## Key Features to Know

### 1. **Homepage** - `/`
- Auto-rotating hero carousel
- About section
- Core solutions grid
- Partner logos
- Call-to-action sections

### 2. **About** - `/about`
- Company story
- Team information
- Company approach
- Impact metrics

### 3. **Services** - `/services`
- 9 detailed service offerings
- Service tiers
- Case studies
- Benefits breakdown

### 4. **Industries** - `/industries`
- 9 industry-specific solutions
- Client statistics
- Industry outcomes
- Targeted approaches

### 5. **Contact** - `/contact`
- Contact form with validation
- Email integration
- Direct contact information
- Response tracking

### 6. **Calendar** - `/calendar`
- Calendly integration
- Appointment booking
- Availability management

---

## File Structure Explained

```
windsurf-project/
├── app/                    # Next.js app directory
│   ├── (marketing)/        # Marketing pages group
│   │   ├── page.tsx       # Home page
│   │   ├── about/         # About page
│   │   ├── services/      # Services page
│   │   ├── industries/    # Industries page
│   │   ├── contact/       # Contact page
│   │   └── calendar/      # Calendar page
│   ├── api/               # API routes
│   │   └── contact/       # Contact form API
│   ├── globals.css        # Global styles
│   └── layout.tsx         # Root layout
│
├── components/            # Reusable components
│   ├── Navbar.tsx        # Navigation
│   ├── Footer.tsx        # Footer
│   ├── SlidingHero.tsx   # Hero carousel
│   ├── CoreSolutions.tsx # Solutions grid
│   └── ...               # Other components
│
├── hooks/                # Custom React hooks
│   └── useGsapScroll.ts # GSAP animations
│
├── lib/                  # Utility functions
│   ├── mailer.ts        # Email utility
│   └── supabase.ts      # Database config
│
├── public/              # Static files
│   └── [images, etc]
│
└── Configuration files  # Config & build
    ├── package.json
    ├── tailwind.config.ts
    ├── tsconfig.json
    ├── next.config.ts
    └── .env.local
```

---

## Common Tasks

### Adding a New Page

**1. Create page file:**
```bash
mkdir app/(marketing)/new-page
touch app/(marketing)/new-page/page.tsx
```

**2. Add content:**
```tsx
// app/(marketing)/new-page/page.tsx
export default function NewPage() {
  return (
    <main>
      <h1>New Page</h1>
      <p>Page content here</p>
    </main>
  );
}
```

**3. Add navigation link:**
```tsx
// Update Navbar.tsx navItems array
const navItems = [
  // ... existing items
  { href: "/new-page", label: "New Page" },
];
```

---

### Modifying a Component

**Example: Change hero headline**

```tsx
// app/(marketing)/page.tsx
// In SlidingHero component, modify slides array:

const slides = [
  {
    id: 1,
    headline: "Your New Headline",  // Change this
    subheadline: "Your new subheadline",
    // ... rest of slide
  }
];
```

---

### Updating Styles

**Global styles:**
```css
/* app/globals.css */
.custom-class {
  color: #8b0000;
  font-size: 2rem;
}
```

**Component styles:**
```tsx
// Use inline styles or Tailwind classes
<div className="text-crimson-500 text-2xl font-bold">
  Styled text
</div>

<div style={{ color: '#8b0000', fontSize: '2rem' }}>
  Alternative styling
</div>
```

**Tailwind utilities:**
```tsx
// Responsive classes
<div className="text-xl md:text-2xl lg:text-4xl">
  Responsive text
</div>

<div className="hidden md:block">
  Hidden on mobile, visible on tablet+
</div>
```

---

### Adding Animations

**GSAP animations:**
```tsx
import { useGsapScroll } from "@/hooks/useGsapScroll";

export default function MyComponent() {
  const { sectionEntry, textReveal } = useGsapScroll();

  useEffect(() => {
    // Animate section on enter
    sectionEntry(".my-section");
    
    // Animate text on scroll
    textReveal(".my-heading", { stagger: 0.1 });
  }, []);

  return (
    <section className="my-section">
      <h1 className="my-heading">Animated text</h1>
    </section>
  );
}
```

**Framer Motion:**
```tsx
import { motion } from "framer-motion";

<motion.div
  initial={{ opacity: 0, y: 20 }}
  whileInView={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.5 }}
>
  Animated content
</motion.div>
```

---

### Testing Locally

```bash
# Start dev server
npm run dev

# Open in browser
open http://localhost:3000

# Test mobile view
# Press F12 → Toggle device toolbar (Ctrl+Shift+M)

# Test different devices
# - iPhone 12 (390px)
# - iPad (768px)
# - Desktop (1920px)
```

---

### Building for Production

```bash
# Build the project
npm run build

# Start production server
npm start

# Run linter
npm run lint

# Check for TypeScript errors
npx tsc --noEmit
```

---

## Important Concepts

### Responsive Design

Website uses `clamp()` for fluid sizing:

```css
/* Text scales smoothly between min and max */
font-size: clamp(1rem, 5vw, 2rem);

/* Works on all devices without breakpoints */
padding: clamp(1rem, 4vw, 2rem);
```

### Mobile Optimization

Images are hidden on mobile to save data:

```tsx
{/* Hidden on mobile, shown on tablet+ */}
<div className="hidden md:block">
  <img src="..." alt="..." />
</div>
```

### Component Reusability

Common components are in `/components`:

```tsx
// Can be imported anywhere
import { ServiceCard } from "@/components/ServiceCard";
import { Footer } from "@/components/Footer";
```

---

## Environment Variables

### Required Variables

```env
NEXT_PUBLIC_SUPABASE_URL=https://[id].supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
```

### Optional Variables

```env
# Email configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password
SMTP_FROM=noreply@maunakeaconsulting.com

# Calendar
NEXT_PUBLIC_CALENDAR_ID=maunakea/discovery-call
```

### Getting Supabase Keys

1. Go to [supabase.com](https://supabase.com)
2. Create account and project
3. Go to Project Settings → API
4. Copy `Project URL` and `anon` public key
5. Add to `.env.local`

---

## Deployment

### Deploy to Vercel

**Easiest way:**

```bash
npm i -g vercel
vercel
```

**Or via GitHub:**

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import project
4. Set environment variables
5. Deploy

### Set Environment Variables

1. Go to Vercel dashboard
2. Select project
3. Settings → Environment Variables
4. Add all env variables
5. Redeploy

---

## Troubleshooting

### Issue: "Port 3000 already in use"

```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Or use different port
npm run dev -- -p 3001
```

### Issue: "Module not found"

```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
```

### Issue: "Build fails"

```bash
# Check TypeScript errors
npx tsc --noEmit

# Check for console errors
npm run build

# Review error message and fix
```

### Issue: "Styles not applied"

```bash
# Rebuild CSS
npm run dev

# Clear browser cache
# Hard refresh: Ctrl+Shift+R (Windows) or Cmd+Shift+R (Mac)
```

---

## Performance Tips

### Optimize Images

1. Use Next.js Image component
2. Compress before upload
3. Use WebP format
4. Set proper dimensions

### Monitor Performance

```bash
# Lighthouse audit
npm run build

# Check with Lighthouse in Chrome DevTools
# F12 → Lighthouse tab → Generate report
```

### Key Metrics

- **LCP** (Largest Contentful Paint): < 2.5s
- **FID** (First Input Delay): < 100ms
- **CLS** (Cumulative Layout Shift): < 0.1

---

## Getting Help

### Documentation Files

1. **DOCUMENTATION.md** - Complete reference
2. **API_DOCUMENTATION.md** - API integration
3. **CSS_TECHNIQUES_REFERENCE.md** - CSS techniques
4. **RESPONSIVE_DESIGN_UPDATES.md** - Mobile optimization

### Resources

- [Next.js Docs](https://nextjs.org/docs)
- [React Docs](https://react.dev)
- [Tailwind CSS](https://tailwindcss.com)
- [Framer Motion](https://www.framer.com/motion)

---

## Next Steps

1. ✅ Install and run locally
2. ✅ Explore the website
3. ✅ Update content (text, images)
4. ✅ Customize colors/branding
5. ✅ Test on mobile devices
6. ✅ Deploy to Vercel
7. ✅ Set up analytics
8. ✅ Monitor performance

---

## Cheat Sheet

| Task | Command |
|------|---------|
| Start dev | `npm run dev` |
| Build | `npm run build` |
| Lint | `npm run lint` |
| Type check | `npx tsc --noEmit` |
| Update deps | `npm update` |
| Audit | `npm audit` |

---

**Happy developing! 🚀**

For detailed information, see [DOCUMENTATION.md](./DOCUMENTATION.md)
