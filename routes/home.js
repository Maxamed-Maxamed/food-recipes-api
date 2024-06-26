const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Home</title>
            <link rel="stylesheet" href="/styles.css">
        </head>
        <body>
            <div class="container">
                <header class="header">
                    <h1>Food Recipes API</h1>
                </header>
                <nav class="navbar">
                    <a href="/">Home</a>
                    <a href="/about">About</a>
                    <a href="/search">Search</a>
                </nav>
                <main>
                    <h2>Welcome to the Food Recipes API</h2>
                    <p>This API provides access to a wide range of delicious recipes.</p>
                    <p>Start exploring now!</p>
                </main>
            </div>
        </body>
        </html>
    `);
});

module.exports = router;
