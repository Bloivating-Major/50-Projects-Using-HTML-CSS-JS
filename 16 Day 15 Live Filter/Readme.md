# 🎯 Day #15 - Live Filter Project 🎯  

A dynamic **Live Filter** project using JavaScript, showcasing real-time user filtering with data fetched from the **Random User API**. This interactive project demonstrates smooth filtering functionality based on user input. 🕵️‍♂️  

---  

## ✨ Features  

- **Live User Filtering**:  
  - Filters users in real-time as you type in the search bar.  
- **Dynamic User Data**:  
  - Fetches user information (name, picture, and location) from the **Random User API**.  
- **Interactive UI**:  
  - Displays a beautifully styled list of users with names, pictures, and locations.  
- **Smooth Search Experience**:  
  - Instant results with case-insensitive matching for user-friendly interaction.  

---  

## 🛠️ Technologies Used  

- **HTML5**: For structuring the user interface.  
- **CSS3**: For styling and responsive design.  
- **JavaScript (ES6)**:  
  - Fetch API for retrieving data.  
  - DOM manipulation to dynamically create and display content.  
  - Event listeners for real-time input handling.  

---  

## 🗂️ File Structure  

```
Live Filter/
├── index.html       # Main HTML file
├── style.css        # CSS for styling the project
├── script.js        # JavaScript logic for live filtering
```  

---  

## 🚀 How to Run  

1. **Clone the Repository**:  
   ```bash  
   git clone <repository_url>  
   ```  

2. **Navigate to the Project Directory**:  
   ```bash  
   cd Live-Filter  
   ```  

3. **Open the HTML File**:  
   Open `index.html` in your web browser to view the project.  

---  

## 🌟 Key Functionalities  

1. **Fetching Data**:  
   - Uses the `fetch` API to retrieve 50 random users from the [Random User API](https://randomuser.me/).  
   - Dynamically creates and displays user profiles with images, names, and locations.  

2. **Real-Time Filtering**:  
   - Monitors user input and instantly filters the displayed list based on the search term.  
   - Supports **case-insensitive matching** for better usability.  

3. **Dynamic DOM Manipulation**:  
   - JavaScript dynamically creates `li` elements for each user and appends them to the `ul`.  
   - Adds/removes the `.hide` class to control visibility during filtering.  

---  


## 🎯 Future Enhancements  

- Add **pagination** for better user experience with large datasets.  
- Include **loading indicators** while fetching data.  
- Enhance accessibility with **ARIA roles** and **keyboard navigation**.  
- Implement a **"clear search"** button to reset filters.  

---  

## 📜 License  

This project is licensed under the **MIT License**. Feel free to use, modify, and distribute it!  

---  

## 🙌 Acknowledgments  

- **Random User API** for providing dynamic user data.  
- **Google Fonts & Modern CSS** for the elegant and responsive UI.  

---  

Feel free to fork, contribute, and provide feedback to improve this project further! 🌟  