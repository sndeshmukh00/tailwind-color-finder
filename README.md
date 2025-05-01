# Tailwind Color Matcher

A web application that helps developers find the closest matching Tailwind CSS color class for any given hex color input. Built with Next.js, React, and Tailwind CSS.

## Features

- 🎨 Input any hex color code and get the closest Tailwind color class
- 📋 Automatic clipboard detection for hex colors
- 👀 Side-by-side color comparison
- 🔄 Real-time color matching
- 📱 Fully responsive design
- 💻 Client-side only (no backend required)

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm 9.x or later

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/tailwind-color-matcher.git
cd tailwind-color-matcher
```

2. Install dependencies:
```bash
npm install
```

3. Run the development server:
```bash
npm run dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## How It Works

The application uses Euclidean distance in RGB color space to find the closest matching Tailwind color. When you input a hex color:

1. The color is converted from hex to RGB format
2. The RGB values are compared against all Tailwind colors in the palette
3. The color with the smallest Euclidean distance is selected as the match
4. The corresponding Tailwind class name is generated

## Usage

1. Enter a hex color code (e.g., #f97316) in the input field
2. The app will automatically find the closest Tailwind color
3. View the side-by-side comparison of your input color and the matched Tailwind color
4. Click "Copy Class" to copy the Tailwind class name to your clipboard

Pro tip: Copy any hex color to your clipboard, and when you focus the app window, it will automatically detect and input the color!

## Upcoming Features

- Support for RGB and HSL color formats
- Display multiple closest matches
- Toggle between different prefix types (bg-, text-, border-)
- Color palette exploration tool

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m '[Add]: Adding some amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request
[Note]: Please use the following format for your commit messages:
- [Add]: Adding some amazing feature
- [Fix]: Fixing some amazing feature
- [Remove]: Removing some amazing feature
- [Update]: Updating some amazing feature
- [Refactor]: Refactoring some amazing feature
- [Style]: Styling some amazing feature
- [Test]: Testing some amazing feature
- [Docs]: Documenting some amazing feature
- [Chore]: Choring some amazing feature

[Note]: Please dont create PR for any small changes, typos, readme updates, etc. just create an issue and let me know.

[!["Buy Me A Coffee"](https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png)](https://buymeacoffee.com/sheshnarayan)

[!["Connect with me on LinkedIn"](https://drive.google.com/file/d/1LSVvMz6zsXzyvxFJjU1HDkmNaONOoSTO/view?usp=sharing)](https://www.linkedin.com/in/sndeshmukh)

