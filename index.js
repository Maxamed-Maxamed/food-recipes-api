require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const axios = require('axios');
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());
app.use(express.static('public')); // Serve static files from the 'public' folder

// Mount the route handlers
app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.get('/recipe/:id', async (req, res) => {
    const recipeId = req.params.id;
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${recipeId}/information`, {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
