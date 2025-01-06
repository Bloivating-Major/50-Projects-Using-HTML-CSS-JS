# Split Landing Page

A visually appealing split landing page with a hover effect to emphasize either side of the screen. This project features two sections for PlayStation 5 and Xbox Series X, complete with CSS animations and responsive design.

## Features

- **Hover Effect**: Smooth transition between sections.
- **Responsive Design**: Adapts to different screen sizes.
- **Customizable**: Easily replace content and images.

## Tech Stack

- **HTML**: For structuring the webpage.
- **CSS**: For styling and animations.
- **JavaScript**: For interactivity (hover effect).

## Project Structure

```
project-folder/
|-- index.html      # HTML structure
|-- style.css       # Styling and animations
|-- script.js       # Interactive functionality
|-- ps.jpg          # Background image for PlayStation 5
|-- xbox.jpg        # Background image for Xbox Series X
```

## Code Explanation

### HTML

- The structure contains a container with two split sections:
  ```html
  <div class="container">
    <div class="split left">
      <h1>Playstation 5</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
    <div class="split right">
      <h1>XBox Series X</h1>
      <a href="#" class="btn">Buy Now</a>
    </div>
  </div>
  ```

### CSS

- Styles for layout, hover animations, and responsiveness:
  ```css
  .hover-left .left {
    width: var(--hover-width);
  }

  .hover-left .right {
    width: var(--other-width);
  }
  ```

### JavaScript

- Adds interactivity for the hover effect:
  ```javascript
  left.addEventListener('mouseenter', () => container.classList.add('hover-left'));
  left.addEventListener('mouseleave', () => container.classList.remove('hover-left'));
  ```

## Responsive Design

- Media queries ensure the layout adapts to different screen sizes.
- For smaller devices, sections stack vertically for better usability.

## Customization

- Replace `ps.jpg` and `xbox.jpg` with your own background images.
- Update the text and links in `index.html` to fit your use case.

## Preview

### Desktop View
- Hover over a section to expand it and highlight its content.

### Mobile View
- Sections are stacked vertically with adjusted text and button sizes.

## License

This project is open-source and available under the MIT License.

## Author

- **Your Name**  
  GitHub: [Bloivating Major](https://github.com/Bloivating-Major)

