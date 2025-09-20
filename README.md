# 🌿 GDSC Health & Wellness Platform

A modern, responsive React application showcasing health and wellness content with beautiful animations and mobile-first design. Built with TypeScript and enhanced with scroll-triggered animations and professional mobile navigation.

## ✨ Features

### 🎨 **Modern UI/UX**

- **Responsive Design**: Mobile-first approach with seamless desktop adaptation
- **Smooth Animations**: Scroll-triggered animations using Intersection Observer
- **Interactive Elements**: Hover effects and touch-friendly interfaces
- **Professional Typography**: Scalable text that adapts to all screen sizes

### 📱 **Mobile Experience**

- **Offcanvas Navigation**: Professional slide-in menu with backdrop overlay
- **Touch Optimization**: All elements meet 44px minimum touch target requirements
- **Responsive Images**: Flexible layouts that stack beautifully on mobile
- **Gesture Support**: Swipe-friendly navigation and interactions

### 🎭 **Animation System**

- **Scroll-Triggered Animations**: Elements animate as they come into view
- **Staggered Effects**: Sequential animations for enhanced visual appeal
- **Performance Optimized**: Uses Intersection Observer for efficient rendering
- **Custom Hook**: Reusable `useInViewAnimation` for consistent behavior

### 🧩 **Component Architecture**

- **Modular Design**: Clean separation of concerns with reusable components
- **TypeScript Support**: Full type safety throughout the application
- **CSS Modules**: Organized styling with component-specific CSS files
- **Asset Management**: Structured organization of images and resources

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**

   ```bash
   git clone <repository-url>
   cd gdsc
   ```

2. **Install dependencies**

   ```bash
   npm install
   ```

3. **Start the development server**

   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

## 🏗️ Project Structure

```
src/
├── Assets/                 # Images and static assets
│   ├── Extra/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Little/
│   ├── Organic/
│   └── Wellbeing/
├── Components/             # React components
│   ├── Extra/
│   ├── Footer/
│   ├── Header/
│   ├── Hero/
│   ├── Little/
│   ├── Organic/
│   └── Wellbeing/
├── hooks/                  # Custom React hooks
│   └── useInViewAnimation.ts
├── App.tsx                 # Main application component
├── App.css                 # Global styles
├── index.tsx               # Application entry point
└── mobile-responsive.css   # Mobile-specific styles
```

## 🛠️ Technologies Used

- **React 18** - Modern React with hooks and functional components
- **TypeScript** - Type-safe JavaScript development
- **Tailwind CSS** - Utility-first CSS framework
- **Framer Motion** - Animation library for React
- **Lucide React** - Beautiful icon library
- **Create React App** - Build tooling and development server

## 🎯 Recent Enhancements

### 📱 **Mobile Responsiveness**

- ✅ All components optimized for mobile devices
- ✅ Touch-friendly button sizes (44px minimum)
- ✅ Responsive typography and spacing
- ✅ Flexible image layouts for all screen sizes

### 🎭 **Scroll-Triggered Animations**

- ✅ Custom `useInViewAnimation` hook with Intersection Observer
- ✅ Staggered entrance animations for all sections
- ✅ Performance-optimized animation system
- ✅ Interactive hover effects for desktop users

### 🍔 **Offcanvas Mobile Menu**

- ✅ Professional slide-in navigation menu
- ✅ Backdrop overlay with click-to-close
- ✅ Body scroll prevention when menu is open
- ✅ Keyboard navigation (Escape to close)
- ✅ Staggered menu item animations
- ✅ Touch-optimized interactions

### 🎨 **Enhanced User Experience**

- ✅ Smooth transitions and micro-interactions
- ✅ Consistent design language across components
- ✅ Accessibility improvements (ARIA labels, focus states)
- ✅ Performance optimizations for mobile devices

## 📱 Mobile Features

- **Responsive Breakpoints**: Consistent design across all device sizes
- **Touch Interactions**: Optimized for finger navigation
- **Performance**: Efficient animations and smooth scrolling
- **Accessibility**: Screen reader friendly and keyboard navigable
- **Professional Navigation**: App-like mobile menu experience

## 🔧 Development

### Code Style

- Uses TypeScript for type safety
- ESLint for code quality
- Prettier for code formatting
- Component-based architecture

### Adding New Components

1. Create component in `src/Components/[ComponentName]/`
2. Add corresponding CSS file
3. Use the `useInViewAnimation` hook for scroll animations
4. Follow mobile-first responsive design principles

## 🚀 Deployment

### Build for Production

```bash
npm run build
```

### Deploy to GitHub Pages

```bash
npm run deploy
```

### Deploy to Netlify/Vercel

The `build` folder can be deployed to any static hosting service.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 🙏 Acknowledgments

- **GDSC Team** for the project vision
- **React Community** for excellent documentation and tools
- **Framer Motion** for smooth animation capabilities
- **Tailwind CSS** for rapid UI development

---

**Built with ❤️ and ReadMe generated with Vibes 😂😂😂**
