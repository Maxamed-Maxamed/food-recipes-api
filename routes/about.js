const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>About</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <h1>About Us</h1>
                </header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                </nav>
                <main>
                    <h2>About the Food Recipes API</h2>
                    <p>We provide access to a wide range of recipes from around the world. Explore and enjoy!</p>
                </main>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;