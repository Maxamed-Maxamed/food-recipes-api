const express = require('express');
const axios = require('axios');
const router = express.Router();

const generateHTML = (results) => {
    let htmlContent = `
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Recipe Search</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <h1>Search Recipes</h1>
                </header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/search">Search</a>
                </nav>
                <main>
                    <form action="/search" method="get">
                        <input type="text" name="query" placeholder="Search for a recipe" required>
                        <button type="submit">Search</button>
                    </form>
                    <div class="results">`;

    results.forEach(result => {
        htmlContent += `
            <div class="recipe">
                <h2>${result.title}</h2>
                <img src="${result.image}" alt="${result.title}">
                <p>Ingredients: ${result.missedIngredients.map(ing => ing.name).join(', ')}</p>
            </div>`;
    });

    htmlContent += `
                    </div>
                </main>
            </div>
        </body>
        </html>`;
    return htmlContent;
};

router.get('/', async (req, res) => {
    const query = req.query.query;
    if (!query) {
        return res.status(400).json({ error: "Query parameter 'query' is required" });
    }

    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY,
                query: query,
                addRecipeInformation: true,
                fillIngredients: true
            }
        });
        const htmlContent = generateHTML(response.data.results);
        res.send(htmlContent);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;