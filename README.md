# NEET 2027 Chemistry Quiz Web Application

## Overview
A complete, fully functional, and offline-capable Progressive Web App (PWA) designed specifically for NEET 2027 aspirants. It strictly follows the NTA pattern, providing line-by-line NCERT extraction for Class 11 Chemistry: *Some Basic Concepts of Chemistry* (Focusing only on Development & Importance of Chemistry).

## Features
- **PWA Ready**: Installable as a standalone app on Mobile/Desktop.
- **Works Offline**: Caches all assets utilizing a Service Worker.
- **NEET Interface Replica**: Features a dynamic Question Palette, Mark for Review, and strict +4/-1 scoring system.
- **Two Modes**: Practice Mode (immediate explanations) and Mock Test (timed).
- **Advanced Analytics**: Chart.js integration for Accuracy and Topic-wise bar/pie charts.
- **Export Options**: 1-click Export to PDF and CSV functionalities.
- **Deep Explanations**: Includes NCERT line references, memory tricks, common mistakes, and PYQ probability.

## Setup Instructions
1. Save all provided files (`index.html`, `style.css`, `script.js`, `questions.js`, `manifest.json`, `service-worker.js`) in a single folder.
2. For testing Service Workers/PWA capabilities, serve the folder via a local web server (e.g., VS Code Live Server, or Python `python -m http.server`).
3. Open the localhost URL in any modern browser (Chrome, Edge, Safari).
4. For instant non-PWA use, simply double-click `index.html`.

## Architecture
- Plain HTML5/CSS3/Vanilla JS (No heavy frameworks required).
- `Chart.js` via CDN (caches on first load for offline capability).