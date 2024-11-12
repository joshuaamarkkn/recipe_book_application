// Sample recipe data
const recipes = [
    {
        id: 1,
        title: "Classic Pancakes",
        category: "breakfast",
        time: "20 mins",
        difficulty: "Easy",
        image: "images/pancakes.jpeg",
        servings: 4,
        ingredients: [
            { item: "flour", amount: 240, unit: "g" },
            { item: "milk", amount: 350, unit: "ml" },
            { item: "eggs", amount: 2, unit: "pieces" },
            { item: "sugar", amount: 30, unit: "g" },
            { item: "baking powder", amount: 10, unit: "g" }
        ],
        instructions: [
            "Mix dry ingredients in a bowl",
            "Whisk milk and eggs in another bowl",
            "Combine wet and dry ingredients",
            "Cook on a hot griddle until bubbles form",
            "Flip and cook other side until golden"
        ]
    },
    {
        id: 2,
        title: "Spaghetti Carbonara",
        category: "dinner",
        time: "30 mins",
        difficulty: "Medium",
        image: "images/spaghetti_carbonara.jpeg",
        servings: 4,
        ingredients: [
            { item: "spaghetti", amount: 450, unit: "g" },
            { item: "eggs", amount: 4, unit: "pieces" },
            { item: "parmesan cheese", amount: 100, unit: "g" },
            { item: "bacon", amount: 200, unit: "g" },
            { item: "black pepper", amount: 5, unit: "g" }
        ],
        instructions: [
            "Cook pasta according to package directions",
            "Cook bacon until crispy",
            "Whisk eggs and cheese",
            "Combine hot pasta with egg mixture",
            "Add bacon and pepper"
        ]
    },
    {
        id: 3,
        title: "Chocolate Chip Cookies",
        category: "dessert",
        time: "25 mins",
        difficulty: "Easy",
        image: "images/chocolate_chip_cookies.jpeg",
        servings: 24,
        ingredients: [
            { item: "butter", amount: 230, unit: "g" },
            { item: "brown sugar", amount: 150, unit: "g" },
            { item: "white sugar", amount: 150, unit: "g" },
            { item: "eggs", amount: 2, unit: "pieces" },
            { item: "vanilla extract", amount: 5, unit: "ml" },
            { item: "flour", amount: 280, unit: "g" },
            { item: "chocolate chips", amount: 340, unit: "g" }
        ],
        instructions: [
            "Cream butter and sugars until fluffy",
            "Beat in eggs and vanilla",
            "Mix in dry ingredients",
            "Stir in chocolate chips",
            "Bake at 190°C for 10-12 minutes"
        ]
    },
    {
        id: 4,
        title: "Greek Salad",
        category: "lunch",
        time: "15 mins",
        difficulty: "Easy",
        image: "images/greek_salad.jpeg",
        servings: 4,
        ingredients: [
            { item: "cucumber", amount: 1, unit: "large" },
            { item: "tomatoes", amount: 400, unit: "g" },
            { item: "red onion", amount: 100, unit: "g" },
            { item: "feta cheese", amount: 200, unit: "g" },
            { item: "kalamata olives", amount: 100, unit: "g" },
            { item: "olive oil", amount: 60, unit: "ml" },
            { item: "lemon juice", amount: 30, unit: "ml" }
        ],
        instructions: [
            "Chop cucumbers and tomatoes into chunks",
            "Slice red onion thinly",
            "Combine vegetables in a bowl",
            "Add crumbled feta and olives",
            "Dress with olive oil and lemon juice",
            "Season with salt and pepper to taste"
        ]
    },
    {
        id: 5,
        title: "Breakfast Smoothie Bowl",
        category: "breakfast",
        time: "10 mins",
        difficulty: "Easy",
        image: "images/breakfast_smoothie_bowl.jpeg",
        servings: 2,
        ingredients: [
            { item: "frozen berries", amount: 300, unit: "g" },
            { item: "banana", amount: 1, unit: "piece" },
            { item: "yogurt", amount: 240, unit: "ml" },
            { item: "honey", amount: 30, unit: "ml" },
            { item: "granola", amount: 60, unit: "g" },
            { item: "chia seeds", amount: 20, unit: "g" }
        ],
        instructions: [
            "Blend frozen berries, banana, and yogurt",
            "Pour into bowls",
            "Top with granola and chia seeds",
            "Drizzle with honey",
            "Serve immediately"
        ]
    },
    {
        id: 6,
        title: "Chicken Stir Fry",
        category: "dinner",
        time: "35 mins",
        difficulty: "Medium",
        image: "images/chicken_stir_fry.jpeg",
        servings: 4,
        ingredients: [
            { item: "chicken breast", amount: 700, unit: "g" },
            { item: "broccoli", amount: 300, unit: "g" },
            { item: "carrots", amount: 200, unit: "g" },
            { item: "soy sauce", amount: 60, unit: "ml" },
            { item: "ginger", amount: 15, unit: "g" },
            { item: "garlic", amount: 3, unit: "cloves" },
            { item: "vegetable oil", amount: 30, unit: "ml" }
        ],
        instructions: [
            "Cut chicken into bite-sized pieces",
            "Chop vegetables into similar sizes",
            "Heat oil in a wok or large pan",
            "Cook chicken until golden",
            "Add vegetables and stir-fry",
            "Add sauce and simmer until thickened"
        ]
    },
    {
        id: 7,
        title: "Tiramisu",
        category: "dessert",
        time: "4 hours",
        difficulty: "Hard",
        image: "images/tiramisu.jpeg",
        servings: 8,
        ingredients: [
            { item: "mascarpone cheese", amount: 450, unit: "g" },
            { item: "heavy cream", amount: 240, unit: "ml" },
            { item: "coffee", amount: 350, unit: "ml" },
            { item: "ladyfingers", amount: 24, unit: "pieces" },
            { item: "cocoa powder", amount: 30, unit: "g" }
        ],
        instructions: [
            "Brew coffee and let cool",
            "Whip mascarpone and cream until fluffy",
            "Dip ladyfingers in coffee",
            "Layer soaked ladyfingers and cream mixture",
            "Dust with cocoa powder",
            "Refrigerate for at least 4 hours"
        ]
    },
    {
        id: 8,
        title: "Quinoa Buddha Bowl",
        category: "lunch",
        time: "30 mins",
        difficulty: "Medium",
        image: "images/quinoa_bowl.jpeg",
        servings: 2,
        ingredients: [
            { item: "quinoa", amount: 200, unit: "g" },
            { item: "sweet potato", amount: 300, unit: "g" },
            { item: "chickpeas", amount: 400, unit: "g" },
            { item: "kale", amount: 100, unit: "g" },
            { item: "avocado", amount: 1, unit: "piece" },
            { item: "tahini", amount: 30, unit: "ml" }
        ],
        instructions: [
            "Cook quinoa according to package instructions",
            "Roast sweet potato chunks and chickpeas",
            "Massage kale with olive oil",
            "Assemble bowls with quinoa base",
            "Top with roasted vegetables and avocado",
            "Drizzle with tahini dressing"
        ]
    }
];

// DOM Elements
const searchInput = document.getElementById('searchInput');
const categoryFilter = document.getElementById('categoryFilter');
const recipesContainer = document.getElementById('recipesContainer');
const favoritesList = document.getElementById('favoritesList');
const timerModal = document.getElementById('timerModal');
const timerDisplay = document.querySelector('.timer-display');
const startTimerBtn = document.getElementById('startTimer');
const stopTimerBtn = document.getElementById('stopTimer');
const timerMinutesInput = document.getElementById('timerMinutes');

// State management
let favorites = JSON.parse(localStorage.getItem('favorites')) || [];
let timerInterval = null;

// Initialize the application
function init() {
    renderRecipes(recipes);
    renderFavorites();
    setupEventListeners();
}

// Event Listeners
function setupEventListeners() {
    searchInput.addEventListener('input', handleSearch);
    categoryFilter.addEventListener('change', handleSearch);
    startTimerBtn.addEventListener('click', startTimer);
    stopTimerBtn.addEventListener('click', stopTimer);
}

// Recipe rendering
function renderRecipes(recipesToRender) {
    recipesContainer.innerHTML = recipesToRender.map(recipe => `
        <article class="recipe-card">
            <img src="${recipe.image}" alt="${recipe.title}" class="recipe-image">
            <div class="recipe-content">
                <h2 class="recipe-title">${recipe.title}</h2>
                <div class="recipe-info">
                    <span class="cooking-time">${recipe.time}</span>
                    <span class="difficulty">${recipe.difficulty}</span>
                    <span class="category">${recipe.category}</span>
                </div>
                <div class="serving-adjuster">
                    <label for="servings-${recipe.id}">Servings:</label>
                    <select id="servings-${recipe.id}" onchange="adjustServings(${recipe.id}, this.value)">
                        ${[2, 4, 6, 8].map(num => 
                            `<option value="${num}" ${recipe.servings === num ? 'selected' : ''}>
                                ${num}
                            </option>`
                        ).join('')}
                    </select>
                </div>
                <div class="ingredients">
                    <h3>Ingredients</h3>
                    <ul class="ingredients-list" id="ingredients-${recipe.id}">
                        ${renderIngredients(recipe.ingredients, recipe.servings)}
                    </ul>
                </div>
                <div class="instructions">
                    <h3>Instructions</h3>
                    <ol class="instructions-list">
                        ${recipe.instructions.map(instruction => 
                            `<li>${instruction}</li>`
                        ).join('')}
                    </ol>
                </div>
                <button class="favorite-btn" onclick="toggleFavorite(${recipe.id})">
                    ${favorites.includes(recipe.id) ? 'Remove from Favorites' : 'Add to Favorites'}
                </button>
            </div>
        </article>
    `).join('');
}

// Render ingredients with amounts
function renderIngredients(ingredients, servings) {
    return ingredients.map(ing => `
        <li>
            <span class="amount">${(ing.amount * servings / 4).toFixed(1)}</span> 
            ${ing.unit} ${ing.item}
        </li>
    `).join('');
}

// Search and filter functionality
function handleSearch() {
    const searchTerm = searchInput.value.toLowerCase();
    const categoryTerm = categoryFilter.value.toLowerCase();
    
    const filteredRecipes = recipes.filter(recipe => {
        const matchesSearch = recipe.title.toLowerCase().includes(searchTerm) ||
            recipe.ingredients.some(ing => ing.item.toLowerCase().includes(searchTerm));
        const matchesCategory = !categoryTerm || recipe.category === categoryTerm;
        return matchesSearch && matchesCategory;
    });
    
    renderRecipes(filteredRecipes);
}

// Serving size adjustment
function adjustServings(recipeId, newServings) {
    const recipe = recipes.find(r => r.id === recipeId);
    const ingredientsList = document.getElementById(`ingredients-${recipeId}`);
    ingredientsList.innerHTML = renderIngredients(recipe.ingredients, parseInt(newServings));
}

// Favorites management
function toggleFavorite(recipeId) {
    const index = favorites.indexOf(recipeId);
    if (index === -1) {
        favorites.push(recipeId);
    } else {
        favorites.splice(index, 1);
    }
    localStorage.setItem('favorites', JSON.stringify(favorites));
    renderFavorites();
    renderRecipes(recipes); // Update favorite buttons
}

function renderFavorites() {
    favoritesList.innerHTML = favorites.map(id => {
        const recipe = recipes.find(r => r.id === id);
        return `
            <li>
                ${recipe.title}
                <button onclick="toggleFavorite(${recipe.id})">Remove</button>
            </li>
        `;
    }).join('');
}

// Timer functionality
function startTimer() {
    const minutes = parseInt(timerMinutesInput.value);
    if (minutes <= 0) return;
    
    let timeLeft = minutes * 60;
    timerModal.style.display = 'block';
    
    clearInterval(timerInterval);
    timerInterval = setInterval(() => {
        timeLeft--;
        const minutesLeft = Math.floor(timeLeft / 60);
        const secondsLeft = timeLeft % 60;
        timerDisplay.textContent = 
            `${minutesLeft.toString().padStart(2, '0')}:${secondsLeft.toString().padStart(2, '0')}`;
        
        if (timeLeft <= 0) {
            stopTimer();
            alert('Timer finished!');
        }
    }, 1000);
}

function stopTimer() {
    clearInterval(timerInterval);
    timerModal.style.display = 'none';
    timerDisplay.textContent = '00:00';
    timerMinutesInput.value = '';
}

// Initialize the app when the page loads
document.addEventListener('DOMContentLoaded', init);