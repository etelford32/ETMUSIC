# the E.T. - Music Distribution Platform

A futuristic digital distribution and marketing platform showcasing the musical works of Elliot Telford (the E.T.).

## Features

- **Futuristic Design**: Cyberpunk-inspired aesthetics with neon colors and smooth animations
- **Sound Design Showcase**: Highlighting cinematic, game audio, and experimental sound work
- **ETU 2175 OST**: Dedicated section for the Explore the Universe 2175 original soundtrack
- **Eros Trilogy**: Complete showcase of Eros albums I, II, and III
- **Interactive Audio Player**: Built-in player with modern controls
- **Responsive Design**: Optimized for all devices
- **Smooth Animations**: Powered by Framer Motion for engaging interactions

## Tech Stack

- **Framework**: Next.js 15 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Font**: Orbitron (display), Inter (body)

## Getting Started

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000) in your browser

## Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
/app
  - layout.tsx      # Root layout with metadata
  - page.tsx        # Main page
  - globals.css     # Global styles and Tailwind

/components
  - Navigation.tsx  # Main navigation bar
  - Hero.tsx        # Hero section with animated background
  - SoundDesign.tsx # Sound design portfolio section
  - ETU2175.tsx     # Explore the Universe 2175 OST section
  - ErosSeries.tsx  # Eros trilogy showcase
  - Contact.tsx     # Contact and streaming links
  - AudioPlayer.tsx # Floating audio player
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- Neon Blue: #00f0ff
- Neon Purple: #b000ff
- Neon Pink: #ff00e5
- Dark Background: #0a0a0f
- Dark Surface: #151520

### Content
Update the content in each component to match your:
- Track listings
- Album descriptions
- Streaming links
- Social media links

## License

© 2026 the E.T. | Elliot Telford. All rights reserved.
