# Project 8: Crystal Cards Animation

## Description
This project showcases a beautiful "Crystal Collection" of animated cards with an ethereal design, smooth scrolling animations, and a glowing effect. Each card displays a unique crystal, its description, collection details, and price in ETH.

The animation leverages JavaScript and CSS transitions for a dynamic reveal of the cards as the user scrolls down.

## Features
- **Scroll-based Animation**: Cards smoothly animate into view as the user scrolls down the page.
- **Hover Effects**: Interactive hover effect on cards to scale and highlight them.
- **Glassmorphism Design**: A stunning glassy appearance with blur and gradient effects.
- **Responsiveness**: Optimized layout for various screen sizes.
- **NFT Theme**: Display NFT-inspired information such as price and collection details.

## Technologies Used
- **HTML5**: For the structure and content.
- **CSS3**: For styling and animations.
- **JavaScript**: To implement scroll-triggered animations.
- **Font Awesome**: For additional icons (if needed).

## How It Works
1. **HTML Structure**:
   - Each crystal card is enclosed within a `.box` div, which includes elements like the card number, image, title, description, collection name, and price.
   - The page is structured with multiple `.box` elements.

2. **CSS Styling**:
   - **Glassmorphism**: Used `backdrop-filter: blur(10px);` and gradient borders to create a frosted glass effect.
   - **Transitions**: Cards use `transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1);` for smooth animations.
   - **Custom Fonts**: Integrated `Poppins` font for modern and clean typography.

3. **JavaScript Animation**:
   - The `checkBoxes()` function determines the position of each card relative to the viewport and adds the `.show` class when the card enters the visible area.
   - The `window.addEventListener('scroll', checkBoxes)` continuously monitors the scroll position.

## Usage
- Scroll down the page to observe the smooth reveal animations.
- Hover over any card to highlight it and view additional details.

## File Structure
```
project-8-crystal-cards/
|-- index.html   # HTML structure
|-- style.css    # CSS for styling and animations
|-- script.js    # JavaScript for scroll animations
```

## Customization
- Replace the placeholder crystal images (`src=""`) in the `.crystal-img` tags with your desired images.
- Update text content in `.description`, `.collection`, and `.price` to match your use case.

## Acknowledgments
- Font Awesome for icons.
- Google Fonts for the "Poppins" font.

## License
This project is licensed under the MIT License. Feel free to use and modify it for your own projects.

---
Enjoy creating and customizing your Crystal Cards Animation!

