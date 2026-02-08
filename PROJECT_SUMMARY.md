# PrimQ - Project Technology Summary

## 📱 Project Overview

**PrimQ** is a cross-platform portfolio management application built with React Native and Expo, supporting both **mobile (iOS/Android)** and **web** platforms.

---

## 🛠️ Technology Stack

### Core Framework
- **React Native** (v0.81.5) - Cross-platform mobile framework
- **React** (v19.1.0) - UI library
- **Expo** (~54.0.32) - Development platform and build tools
- **TypeScript** (~5.9.2) - Type-safe development

### Navigation
- **Expo Router** (~6.0.22) - File-based routing system
- **React Navigation** (v7.x) - Navigation library
  - Bottom Tabs Navigator
  - Native Stack Navigator

---

## 🎨 Styling Approach

### Primary Styling Solution
**NativeWind** (v4.2.1) + **Tailwind CSS** (v3.4.19)

NativeWind allows you to use Tailwind CSS utility classes directly in React Native components, providing:
- Utility-first CSS approach
- Responsive design capabilities
- Consistent styling across mobile and web
- Custom color palette and theme extensions

### Custom Theme Configuration
```javascript
// tailwind.config.js
colors: {
  primary: "#030014",
  secondary: "#151312",
  light: {
    100: "#D6C7FF",
    200: "#A8B5DB",
    300: "#9CA4AB",
  },
  dark: {
    100: "#221F3D",
    200: "#0F0D23",
  },
  accent: "#AB8BFF",
}
```

### Styling Features
- Dark theme throughout the app
- Custom color palette with purple accents
- Responsive layouts for different screen sizes
- Glassmorphism and modern UI effects

---

## 📊 State Management

### React Context API

The project uses **React Context API** for global state management (NOT Zustand).

#### StocksContext
Located at: `contexts/StocksContext.tsx`

**Purpose**: Manages stock data across multiple portfolios

**State Structure**:
```typescript
type Stock = {
  symbol: string;
  name: string;
  price: number;
  quantity: number;
  portfolioId: string;
};
```

**Provided Methods**:
- `addStock(stock: Stock)` - Add a stock to the portfolio
- `getStocksByPortfolio(portfolioId: string)` - Retrieve stocks for a specific portfolio
- `stocks` - Array of all stocks across portfolios

**Usage Pattern**:
```typescript
// Wrap app with provider
<StocksProvider>
  <App />
</StocksProvider>

// Use in components
const { stocks, addStock, getStocksByPortfolio } = useStocks();
```

### Local State Management
- **useState** - Component-level state (modals, forms, UI toggles)
- **React Animated API** - Animation state and transitions

---

## 📱 Platform Support

### Mobile (iOS & Android)
- **Primary Target**: Native mobile applications
- **Build Tool**: EAS Build (Expo Application Services)
- **Features**:
  - Native gestures and animations
  - Platform-specific UI adaptations
  - Edge-to-edge display (Android)
  - Safe area handling (iOS)

### Web
- **Web Support**: Enabled via Expo Web
- **Bundler**: Metro bundler
- **Output**: Static web application
- **DOM Rendering**: React DOM (v19.1.0) + React Native Web (~0.21.0)

### Running the App

**Mobile Development**:
```bash
# iOS
npm run ios

# Android
npm run android

# Expo Go
npm start
```

**Web Development**:
```bash
npm run web
```

---

## 🎯 UI Differentiation Strategy

### Responsive Design Approach

The project handles different platforms through:

1. **Platform-Specific Conditionals**
   ```typescript
   import { Platform } from 'react-native';
   
   const styles = Platform.select({
     ios: { /* iOS styles */ },
     android: { /* Android styles */ },
     web: { /* Web styles */ },
   });
   ```

2. **Responsive Utilities (NativeWind)**
   - Tailwind responsive classes work across platforms
   - Screen size breakpoints for tablets and web
   - Adaptive layouts using flexbox

3. **Platform-Specific Components**
   - Native components for mobile (gestures, haptics)
   - Web-optimized components when needed
   - Shared component library with platform variants

4. **Safe Area Handling**
   - `react-native-safe-area-context` for notches and status bars
   - Automatic padding adjustments for iOS/Android

---

## 📦 Key Dependencies

### UI & Interaction
- **expo-image** - Optimized image component
- **expo-haptics** - Tactile feedback (mobile)
- **@expo/vector-icons** - Icon library
- **react-native-gesture-handler** - Advanced gesture system
- **react-native-reanimated** - High-performance animations

### Navigation & Routing
- **expo-router** - File-based routing
- **@react-navigation/bottom-tabs** - Tab navigation
- **react-native-screens** - Native screen optimization

### Platform Features
- **expo-status-bar** - Status bar styling
- **expo-system-ui** - System UI customization
- **expo-web-browser** - In-app browser

---

## 🏗️ Project Structure

```
DemoPortfolio/
├── app/                    # Screens & routing (Expo Router)
│   ├── (tabs)/            # Tab-based screens
│   ├── screens/           # Modal/stack screens
│   └── _layout.tsx        # Root layout
├── components/            # Reusable UI components
├── contexts/              # React Context providers
│   └── StocksContext.tsx  # Global state management
├── constants/             # App constants & theme
├── assets/                # Images, icons, fonts
└── tailwind.config.js     # NativeWind/Tailwind config
```

---

## 🎨 Design System

### Color Palette
- **Background**: `#0F0D23` (Dark Navy)
- **Accent**: `#AB8BFF` (Purple)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A8B5DB` (Light Gray)
- **Success**: `#2EE5A2` (Green)
- **Error**: `#FF6B8B` (Red)

### Typography
- Custom fonts loaded via `expo-font`
- Consistent text sizing across platforms

---

## 🚀 Build & Deployment

### Development
- **Expo Go**: Quick testing on physical devices
- **Dev Client**: Custom native code testing

### Production
- **EAS Build**: Cloud-based builds for iOS/Android
- **Web Build**: Static export for web hosting
- **OTA Updates**: Over-the-air updates via EAS Update

---

## 📝 Summary

| Aspect | Technology |
|--------|-----------|
| **Framework** | React Native + Expo |
| **Language** | TypeScript |
| **Styling** | NativeWind (Tailwind CSS) |
| **State Management** | React Context API |
| **Navigation** | Expo Router |
| **Platforms** | iOS, Android, Web |
| **UI Differentiation** | Responsive design + Platform conditionals |
| **Animations** | React Native Reanimated |
| **Build Tool** | EAS Build |

---

**Note**: The project does **NOT** use Zustand for state management. It uses React's built-in Context API for global state management, which is simpler and sufficient for the current application scope.
