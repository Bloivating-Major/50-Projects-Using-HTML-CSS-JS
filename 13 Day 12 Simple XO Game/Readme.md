
---

# 🎮 Day #12 - Simple XO Game  🎮

Welcome to **Simple XO Game**! This project is a classic Tic-Tac-Toe game built with HTML, CSS, and JavaScript. Test your strategy and play against a friend in this fun and interactive game! 🕹️

---

## 📌 Features

- **Interactive Gameplay:** Click on the cells to make your move.
- **Player Turns:** Alternates between Player X and Player O automatically. ✖️⭕
- **Win Detection:** Highlights the winning combination with a cool animation. 🏆
- **Draw Check:** Declares a draw if the grid is full without a winner. 🤝
- **Play Again Option:** Reset the game anytime to start fresh. 🔄
- **Responsive UI:** Styled using CSS for a clean and simple interface. ✨

---

## 🛠️ Tech Stack

- **HTML:** For structuring the game layout.  
- **CSS:** For styling the game grid and animations.  
- **JavaScript:** For handling the game logic and interactivity.  

---

## 🎨 Design Overview

### 🗂️ **HTML Structure:**
- **Game Board:** A 3x3 grid using div elements with unique IDs (`box1` to `box9`).
- **Interactive Cells:** Each cell contains a span to capture player clicks and display their moves.

### 🎨 **CSS Styling:**
- **Grid Layout:** Flexible design with clear borders for game cells.
- **Animations:** Smooth transitions for alerts like "Game Over" or "Draw".
- **Highlight Winning Cells:** Adds a special `activeBox` class to highlight the winning sequence.

### 🧠 **JavaScript Logic:**
- **Player Moves:** Tracks each player's turn and updates the grid.
- **Win Conditions:** Checks for 8 possible winning combinations.
- **Game Alerts:** Dynamic alerts for wins or draws using DOM manipulation.
- **Reset Functionality:** Clears the board and restarts the game.

---

## 🚀 How to Play

1. Open the game in your browser. 🌐
2. Player X always starts. Click on an empty cell to place your mark. ✖️
3. Player O takes the next turn. ⭕
4. The first player to align 3 marks in a row, column, or diagonal wins! 🥳
5. If the board is full with no winner, the game declares a draw. 🤷‍♂️
6. Click the **🔄 Restart** button to play again. 

---

## 🔧 Code Snippets

### HTML (Game Board)
```html
<div id="container">
    <div class="block">
        <div id="box1" class="box top left">
            <span data-player="none" onclick="play(this)">&nbsp;</span>
        </div>
        <!-- Other boxes... -->
    </div>
</div>
```

### CSS (Styling)
```css
.box {
    display: inline-block;
    border: 1px solid gray;
    width: 100px;
    height: 100px;
    text-align: center;
    box-sizing: border-box;
}
.activeBox {
    background: silver;
}
```

### JavaScript (Game Logic)
```javascript
function play(y) {
    if (y.dataset.player == "none" && !isGameOver) {
        y.innerHTML = playerTurn;
        y.dataset.player = playerTurn;
        playerTurn = playerTurn === "x" ? "o" : "x";
        moves++;
    }
    checkWinner(1, 2, 3); // Example check
}
```

---

## 🌟 What's Next?

- **Enhancements:** Add AI for single-player mode. 🤖  
- **Custom Themes:** Let players choose different board styles. 🎨  
- **Leaderboard:** Keep track of scores for multiple rounds. 🏅  

---

## 🧑‍💻 Author

**Bloivating Major**  
Follow for more creative projects and coding tutorials! 🚀  

---

> "Coding is fun, and games make it even better! Keep learning and creating." ✨