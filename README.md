# 🎯 Interview Conductor - MERN Stack

<div align="center">

![Interview Conductor Banner](https://img.shields.io/badge/Interview-Conductor-blue?style=for-the-badge&logo=react)

A comprehensive, interactive interview preparation platform built with **Next.js 15** and modern web technologies. Master MERN Stack concepts through an engaging, gamified learning experience.

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat-square&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.0.0-blue?style=flat-square&logo=react)](https://reactjs.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-4.0-38B2AC?style=flat-square&logo=tailwind-css)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-12.23.12-pink?style=flat-square&logo=framer)](https://www.framer.com/motion/)

[🚀 Live Demo](interview-conductor-mern-stack.vercel.app)

</div>

## ✨ Features

### 🎓 **Interactive Learning Experience**
- **50+ Curated Questions** across MongoDB, Express.js, React.js, and Node.js
- **Real-time Progress Tracking** with visual progress indicators
- **Category-wise Performance Analytics** to identify strengths and weaknesses
- **Responsive Design** optimized for all devices

### 🎨 **Modern UI/UX**
- **Smooth Animations** powered by Framer Motion
- **Dark Theme** with beautiful gradient backgrounds
- **Intuitive Navigation** with seamless user flow
- **Professional Design** using TailwindCSS

### 📊 **Advanced Analytics**
- **Detailed Results Dashboard** with comprehensive scoring
- **Category Breakdown** showing performance in each MERN technology
- **Visual Progress Indicators** for better user engagement
- **Restart & Practice Options** for continuous learning

## 🛠️ Tech Stack

| Frontend | Styling | Animations | Icons |
|----------|---------|------------|-------|
| Next.js 15 | TailwindCSS 4.0 | Framer Motion | Lucide React |
| React 19 | PostCSS | - | React Icons |

## 🚀 Quick Start

### Prerequisites

- **Node.js** (v18.0.0 or higher)
- **npm** / **yarn** / **pnpm** / **bun**

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/Zohaib-Karamat/Interview-Conductor-MERN-Stack.git
   cd Interview-Conductor-MERN-Stack
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   # or
   bun install
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
   
   Navigate to [http://localhost:3000](http://localhost:3000) to see the application.

### 🔧 Available Scripts

```bash
npm run dev      # Start development server with Turbopack
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

## 📁 Project Structure

```
Interview-Conductor-MERN-Stack/
├── 📂 app/                    # Next.js App Router
│   ├── 📄 globals.css        # Global styles
│   ├── 📄 layout.js          # Root layout
│   └── 📄 page.js            # Home page
├── 📂 components/             # Reusable React components
│   ├── 📄 MCQCard.js         # Multiple choice question card
│   ├── 📄 Navbar.js          # Navigation component
│   ├── 📄 ProfileModal.js    # User profile modal
│   ├── 📄 Progressbar.js     # Progress indicator
│   ├── 📄 ResultsDashboard.js # Results and analytics
│   ├── 📄 Themetoggle.js     # Theme switcher
│   └── 📂 ui/                # UI components
│       ├── 📄 Button.js      # Custom button component
│       └── 📄 Dropdown.js    # Dropdown component
├── 📂 data/                   # Application data
│   └── 📄 questions.js       # MERN Stack questions database
├── 📂 lib/                    # Utility libraries
│   ├── 📄 animations.js      # Animation configurations
│   └── 📄 themes.js          # Theme configurations
├── 📂 public/                 # Static assets
├── 📂 styles/                 # Additional stylesheets
│   ├── 📄 globals.css        # Global CSS rules
│   └── 📄 gradients.css      # Gradient definitions
└── 📄 package.json           # Project dependencies
```

## 🎯 Core Features Breakdown

### 🔥 Question Bank
- **MongoDB**: 12 comprehensive questions covering basics to advanced concepts
- **Express.js**: 13 questions on routing, middleware, and API development
- **React.js**: 12 questions on hooks, components, and state management
- **Node.js**: 13 questions on runtime, modules, and asynchronous programming

### 📈 Analytics Dashboard
```javascript
// Example of category scoring system
const calculateCategoryScores = () => {
  const categories = {};
  
  mernQuestions.forEach(question => {
    if (!categories[question.category]) {
      categories[question.category] = { correct: 0, total: 0 };
    }
    categories[question.category].total++;
    
    if (selectedAnswers[question.id] === question.correct) {
      categories[question.category].correct++;
    }
  });
  
  return categories;
};
```

## 🎨 Design System

### Color Palette
- **Primary**: Dark gradients (gray-900 to gray-800)
- **Accent**: Blue tones for interactive elements
- **Success**: Green for correct answers
- **Warning**: Yellow for pending states

### Typography
- **Primary Font**: Geist Sans (optimized web font)
- **Hierarchy**: Clear heading and body text distinction
- **Responsive**: Scales appropriately across devices

## 🔧 Customization

### Adding New Questions

1. Navigate to `data/questions.js`
2. Add your question following this structure:

```javascript
{
  id: 51, // Unique identifier
  category: "YourCategory", // Technology category
  question: "Your question here?",
  options: {
    a: "Option A",
    b: "Option B", 
    c: "Option C",
    d: "Option D"
  },
  correct: "b" // Correct answer key
}
```

### Styling Customization

The project uses **TailwindCSS 4.0** with custom configurations in:
- `tailwind.config.js` - Main configuration
- `styles/globals.css` - Global styles
- `styles/gradients.css` - Custom gradients

## 📊 Performance Features

- ⚡ **Next.js 15** with App Router for optimal performance
- 🚀 **Turbopack** for lightning-fast development builds
- 🎨 **CSS-in-JS** with TailwindCSS for minimal bundle size
- 🔄 **Client-side State Management** for smooth interactions
- 📱 **Responsive Design** with mobile-first approach

## 🤝 Contributing

We welcome contributions! Please follow these steps:

1. **Fork the repository**
2. **Create a feature branch**
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit your changes**
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push to the branch**
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Open a Pull Request**

### 📋 Development Guidelines

- Follow **ESLint** configuration for code consistency
- Use **conventional commits** for clear git history
- Add **JSDoc comments** for complex functions
- Ensure **responsive design** for new components
- Test on **multiple browsers** before submitting


## 🙏 Acknowledgments

- **Next.js Team** for the amazing framework
- **Vercel** for deployment platform
- **TailwindCSS** for the utility-first CSS framework
- **Framer Motion** for smooth animations
- **Open Source Community** for inspiration and resources

## Contact

- **Author**: [Zohaib Karamat](https://github.com/Zohaib-Karamat)
- **LinkedIn**: [Zohaib Karamat](https://linkedin.com/in/zohaibkaramat)

---

<div align="center">

**⭐ Star this repo if it helped you prepare for your MERN Stack interviews!**

Made with ❤️ by [Zohaib Karamat](https://github.com/Zohaib-Karamat)

</div>
