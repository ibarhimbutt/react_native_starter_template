# Professional Expo Template 👋

A high-performance, developer-friendly [Expo](https://expo.dev) starter template pre-configured with **TypeScript**, **NativeWind (Tailwind CSS)**, and a robust component architecture.

## 🚀 Key Features

- **TypeScript**: First-class support for static typing and better developer experience.
- **NativeWind (Tailwind CSS)**: Utility-first styling with full support for light/dark theme switching.
- **Expo Router**: File-based routing for intuitive navigation.
- **Custom Design System**: A set of premium, reusable components for rapid UI development.
- **Theme Hooks**: Custom `useTheme` hook for managing icon colors and theme-specific logic.
- **Lucide Icons**: Integrated with `lucide-react-native` for high-quality, customizable icons.

## 📁 Project Structure

```bash
├── app/               # Expo Router file-based navigation
│   ├── (tabs)/        # Tab-based navigation layout
│   └── index.tsx      # Main entry point (Login/Landing screen)
├── assets/            # Static assets (images, fonts)
├── components/        # Reusable UI components
│   └── CustomComponents/ # Custom components
│   └── MainComponents/ # Main components
├── constants/         # Theme colors, fonts, and layout constants
├── hooks/             # Custom React hooks (e.g., useTheme, useColorScheme)
├── lib/               # Utility functions and type definitions
├── utils/             # Helper functions (e.g., validation logic)
├── global.css         # Global Tailwind CSS styles and CSS variables
└── tailwind.config.js # Tailwind CSS configuration
```

## 🧩 Core Components

Inside `components/CustomComponents/`, you'll find:

- **`CustomButton`**: Highly customizable button with support for icons, images, and variants (`solid`, `outline`).
- **`CustomHeader`**: Flexible header with back navigation and theme-aware styling.
- **`CustomInput`**: Form input component with built-in password visibility toggle and custom styling.
- **`OTPInput`**: Specialized input for verifying One-Time Passwords (OTP) with automatic focus management.
- **`Typography`**: Standardized text components for headings (`h1`-`h4`), labels, body, and captions.
- **`Divider`**: Simple visual separator for layout control.

## 🎨 Theme & Styling

This template supports dynamic light/dark mode switching out of the box.

### CSS Variables
We use CSS variables in `global.css` to define our theme colors. They automatically switch based on the system's `prefers-color-scheme`.

```css
:root {
  --primary: #ff8525;
  --background: #f5f5f5;
  --icon-bg: #000000;
}

@media (prefers-color-scheme: dark) {
  :root {
    --background: #1c1c1c;
    --icon-bg: #ffffff;
  }
}
```

### Tailwind Configuration
In `tailwind.config.js`, these CSS variables are mapped to Tailwind utility classes:

```javascript
colors: {
  primary: 'var(--primary)',
  background: 'var(--background)',
  iconBg: 'var(--icon-bg)',
}
```

### useTheme Hook
Use the `useTheme` hook in your components to access theme-related logic programmaticly:

```typescript
const { isDark, iconBgColor } = useTheme();
```

## 🛠️ Get Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the app**:
   ```bash
   npx expo start
   ```

Edit the files in the `app/` directory to start building your screens. Enjoy!
