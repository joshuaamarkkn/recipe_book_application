Recipe Book Application

A modern, responsive recipe management application built with vanilla JavaScript. Features dynamic serving size calculations, recipe filtering, favorites management, and a built-in cooking timer.

Features

Core Functionality
- 🔍 Real-time recipe search
- 📑 Category-based filtering
- ⚖️ Dynamic serving size calculator
- ⏲️ Built-in cooking timer
- ❤️ Favorites system with local storage
- 📱 Responsive design

Recipe Management
- View detailed recipe cards with:
  - Ingredients list with measurements
  - Step-by-step instructions
  - Cooking time
  - Difficulty level
  - Serving size adjuster
- Filter recipes by categories:
  - Breakfast
  - Lunch
  - Dinner
  - Dessert
- Search recipes by name or ingredients

Recipe Collection
- 8 Pre-loaded recipes including:
  - Classic Pancakes
  - Spaghetti Carbonara
  - Chocolate Chip Cookies
  - Greek Salad
  - Breakfast Smoothie Bowl
  - Chicken Stir Fry
  - Tiramisu
  - Quinoa Buddha Bowl

Technologies Used

- HTML5
- CSS3
- Vanilla JavaScript
- Local Storage API

Screenshots

[Add screenshots here]

Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/recipe-book.git
```

2. Navigate to the project directory:
```bash
cd recipe-book
```

3. Open `index.html` in your web browser or use a local server.

Usage

Searching Recipes
- Use the search bar to find recipes by name or ingredients
- Filter recipes by category using the dropdown menu

Recipe Functions
1. Adjust Serving Sizes:
   - Select desired servings (2, 4, 6, or 8)
   - Ingredient quantities automatically recalculate

2. Timer Feature:
   - Click timer button
   - Set cooking duration
   - Start/stop functionality
   - Alerts when time is up

3. Favorites Management:
   - Add/remove recipes from favorites
   - View favorites in sidebar
   - Favorites persist across sessions

Code Structure

```javascript
// Core Functions
init()                 // Initialize application
renderRecipes()        // Display recipe cards
handleSearch()         // Filter recipes
adjustServings()       // Calculate ingredients
toggleFavorite()       // Manage favorites
startTimer()          // Cooking timer control
```

Data Structure

Each recipe includes:
```javascript
{
    id: number,
    title: string,
    category: string,
    time: string,
    difficulty: string,
    image: string,
    servings: number,
    ingredients: Array<{
        item: string,
        amount: number,
        unit: string
    }>,
    instructions: Array<string>
}
```

Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

Future Enhancements

- [ ] Add recipe creation/editing
- [ ] Implement recipe rating system
- [ ] Add print functionality
- [ ] Include nutritional information
- [ ] Add meal planning feature
- [ ] Implement shopping list generation
- [ ] Add recipe sharing capabilities
- [ ] Include cooking tips and variations

License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

Acknowledgments

- Recipe photos: [Add source]
- Font awesome icons
- Metric conversion calculations

Author

joshuaamarkkn
itsmejoshua10@gmail.com

 Project Status

This project is actively maintained and open for contributions.