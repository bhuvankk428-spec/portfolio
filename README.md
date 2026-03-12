# 🌐 Bhuvan K K — Interactive Portfolio

A modern, animated, and fully responsive portfolio website built using **HTML, TailwindCSS, JavaScript, and Three.js**, featuring smooth animations, a custom cursor, a mobile-friendly layout, and a dynamic 3D guide orb that reacts to scroll sections.

---



## ✨ Features

### 🎨 Modern UI/UX

* Dark theme with teal accent colors
* Custom cursor (dot + outline) with hover effects
* Smooth fade-up animations using Intersection Observer
* Fully responsive layout for mobile, tablet, and desktop

### 🧭 3D Interactive Guide (Three.js)

* A rotating **3D dodecahedron avatar**
* Color changes dynamically based on scroll section (`home`, `experience`, `projects`, etc.)
* Auto-resizes based on screen
* Disabled on mobile for performance

### 📱 Responsive Navigation

* Sticky navbar on desktop
* Mobile slide-in menu with smooth animation
* Automatic menu close on link click

### 🧑‍💻 Portfolio Sections

* **Hero section** with animated headings
* **Experience section** showing work at INERASoftware
* **Projects section** with feature-rich cards
* **Skills grid** with icons
* **Contact section** with CTA button

### ⚡ Performance Optimizations

* `requestAnimationFrame` animations
* Conditional Three.js loading
* Lightweight Tailwind CDN setup

---

## 🛠️ Technologies Used

| Technology               | Purpose                          |
| ------------------------ | -------------------------------- |
| **HTML5**                | Base structure                   |
| **TailwindCSS (CDN)**    | Styling, responsiveness          |
| **JavaScript (ES6)**     | Cursor, animations, interactions |
| **Three.js**             | 3D rotating avatar               |
| **Font Awesome**         | Icons                            |
| **Google Fonts (Inter)** | Typography                       |

---

## 📂 Project Structure

```
/
│── index.html         # Main portfolio page
│── README.md          # This file
```

> Note: All CSS is included inside `<style>` in the HTML, and JavaScript is included inside `<script>` at the bottom.

---

## ▶️ How to Run the Project

### **Option 1 — Open Locally**

Just open **index.html** in any browser.

```
Right-click → Open with → Chrome/Firefox
```

### **Option 2 — Start a Local Server (Recommended)**

If using VS Code:

```
1. Install extension: Live Server  
2. Right-click index.html  
3. Click “Open with Live Server”
```

This enables hot reload + better performance for Three.js.

---

## ⚙️ Customization Guide

### 🎨 Change Theme Colors

Inside `<style>`:

```css
:root {
  --primary-color: #55E6C1;
  --bg-color: #121212;
  --text-color: #F8F8F8;
  --card-bg: #1F1F1F;
  --secondary-text: #B0B0B0;
}
```

Change these values to update the entire theme.

---

### 🖱️ Disable or Modify Custom Cursor

Inside JavaScript:

```js
// --- Custom Cursor Logic ---
```

You can disable on mobile by checking:

```js
if (window.matchMedia('(pointer: fine)').matches) {
   // enable custom cursor
}
```

---

### 🎲 Edit 3D Avatar Color per Section

```js
const sectionColors = {
  'home': 0x55e6c1,
  'experience': 0xffa07a,
  'projects': 0xad88f5,
  'skills': 0xfac898,
  'contact': 0xffffff
};
```

## 👨‍💻 Author

**Bhuvan K K**
Frontend Developer (React, Next.js, UI/UX)
Portfolio built with passion and attention to detail.

---


