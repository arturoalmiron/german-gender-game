# Image Replacement Guide

## Problematic Emojis to Replace

Here are the words that need better images from https://www.thiings.co/things:

### Home Category:
1. **Fenster** (window) - Currently: 🔲
   - Search on thiings.co: "window"
   - Save as: `images/fenster.png`

2. **Tisch** (table) - Currently: 🔳  
   - Search on thiings.co: "table"
   - Save as: `images/tisch.png`

3. **Spiegel** (mirror) - Currently: 🔍
   - Search on thiings.co: "mirror"
   - Save as: `images/spiegel.png`

4. **Kühlschrank** (refrigerator) - Currently: ❄️
   - Search on thiings.co: "refrigerator" or "fridge"
   - Save as: `images/kuehlschrank.png`

### Additional Suggestions:
5. **Ofen** (oven) - Currently: 🔥
   - Search: "oven"
   - Save as: `images/ofen.png`

6. **Lampe** (lamp) - Currently: 💡
   - Search: "lamp"
   - Save as: `images/lampe.png`

## Instructions:

1. Go to https://www.thiings.co/things
2. Search for each item above
3. Download the PNG files (they're free to use)
4. Create an `images/` folder in your project
5. Save each image with the German name (as listed above)
6. Images should be around 128x128px for best performance

## Code Changes Needed:

Once you have the images, I'll update the JavaScript to use `<img>` tags instead of emojis for these specific items.

Example structure:
```
GermanWebsite/
├── images/
│   ├── fenster.png
│   ├── tisch.png
│   ├── spiegel.png
│   ├── kuehlschrank.png
│   ├── ofen.png
│   └── lampe.png
├── index.html
├── style.css
└── script.js
``` 