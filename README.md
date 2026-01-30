# PrimQ - Portfolio Management App

A modern, feature-rich portfolio management application built with React Native and Expo. Track stocks, manage multiple portfolios, and access premium trading features.

## 🚀 Features

### Portfolio Management
- **Multiple Portfolios**: Create and manage unlimited portfolios
- **Portfolio Switching**: Easily switch between different portfolios
- **Stock Tracking**: Add stocks with quantity tracking
- **Real-time Quotes**: View live market data and price changes

### Stock Management
- **Add Stocks**: Search and add stocks to your portfolios
- **Crypto Support**: Automatic detection and tagging of cryptocurrency assets
- **Stock Details**: View comprehensive stock information including price, change, and percentage

### Premium Features
- **Premium Plans**: Access to Basic, Pro, and Elite subscription tiers
- **Flexible Billing**: Choose between daily, monthly, or yearly billing periods
- **Exclusive Features**: AI-powered insights, real-time alerts, and advanced analytics

### User Interface
- **Dark Theme**: Beautiful dark mode design throughout the app
- **Custom Splash Screen**: Branded splash screen with smooth animations
- **Side Menu**: Easy navigation with portfolio list and settings
- **Responsive Design**: Optimized for various screen sizes

## 📱 Screenshots

- Markets screen with quote cards
- Portfolio dropdown selector
- Add stock screen with search
- Premium plans with billing options
- Side menu with portfolio list

## 🛠️ Tech Stack

- **Framework**: React Native with Expo
- **Navigation**: Expo Router (file-based routing)
- **Styling**: NativeWind (Tailwind CSS for React Native)
- **Language**: TypeScript
- **State Management**: React Context API
- **Animations**: React Native Animated API

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd DemoPortfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npx expo start
```

4. Run on your device:
   - Scan the QR code with Expo Go app (Android/iOS)
   - Press `a` for Android emulator
   - Press `i` for iOS simulator

## 🏗️ Project Structure

```
DemoPortfolio/
├── app/                          # App screens and navigation
│   ├── (tabs)/                   # Tab-based navigation
│   │   ├── markets/              # Markets screen
│   │   ├── academy/              # Academy screen
│   │   └── profile/              # Profile screen
│   ├── screens/                  # Modal screens
│   │   ├── add-stock.tsx         # Add stock screen
│   │   └── premium-plans.tsx     # Premium plans screen
│   ├── index.tsx                 # Entry point with splash
│   ├── SplashScreen.tsx          # Custom splash screen
│   └── _layout.tsx               # Root layout
├── components/                   # Reusable components
│   ├── AddPortfolioModal.tsx     # Add portfolio modal
│   ├── MarketsTopBar.tsx         # Markets top bar
│   ├── PortfolioDropdown.tsx     # Portfolio selector
│   ├── QuoteCard.tsx             # Stock quote card
│   ├── SideMenu.tsx              # Navigation drawer
│   └── ScreenBackground.tsx      # Background wrapper
├── contexts/                     # React Context providers
│   └── StocksContext.tsx         # Stocks state management
├── constants/                    # App constants
│   └── icons.ts                  # Icon exports
└── assets/                       # Images and fonts
    └── icons/                    # App icons

```

## 🎨 Color Palette

- **Background**: `#0F0D23` (Dark)
- **Accent**: `#AB8BFF` (Purple)
- **Text Primary**: `#FFFFFF` (White)
- **Text Secondary**: `#A8B5DB` (Light Gray)
- **Success**: `#2EE5A2` (Green)
- **Error**: `#FF6B8B` (Red)

## 📝 Key Components

### StocksContext
Global state management for stocks across portfolios. Provides:
- `addStock()`: Add a stock to a portfolio
- `getStocksByPortfolio()`: Get stocks for a specific portfolio

### Portfolio Management
- Create unlimited portfolios
- Switch between portfolios
- Each portfolio maintains its own stock list

### Quote Display
- Real-time price updates
- Change indicators (positive/negative)
- Crypto asset tagging
- Sortable by symbol, price, or change

## 🔧 Configuration

### App Configuration (`app.json`)
- App name: DemoPortfolio
- Bundle ID: `com.jay1401.DemoPortfolio`
- Splash screen: Dark theme background
- Orientation: Portrait only

### TypeScript
- Strict mode enabled
- Path aliases configured (`@/`)
- Synthetic default imports enabled

## 📱 Screens

### Markets Screen
- View all stocks in the selected portfolio
- Sort by symbol, price, or change
- Access portfolio dropdown
- Navigate to add stock screen

### Add Stock Screen
- Search stocks by symbol or name
- Select stock and enter quantity
- Automatic portfolio association
- Crypto detection

### Premium Plans Screen
- Three plan tiers: Basic, Pro, Elite
- Billing period toggle (daily/monthly/yearly)
- Feature comparison
- Pricing display

## 🚀 Deployment

### Build for Production

**Android:**
```bash
eas build --platform android
```

**iOS:**
```bash
eas build --platform ios
```

### Update OTA
```bash
eas update --branch production
```

## 👤 Author

**Jay Pratap Singh**
- Portfolio: PrimQ
- Tagline: Smart Trading Simplified

## 📄 License

This project is private and proprietary.

## 🤝 Contributing

This is a personal project. Contributions are not currently accepted.

## 📞 Support

For issues or questions, please contact the development team.

---

**Built with ❤️ using React Native and Expo**
