const express = require('express');
const axios = require('axios');
const router = express.Router();

router.get('/search', async (req, res) => {
    const { query, cuisine, diet, intolerances, number } = req.query;

    try {
        const response = await axios.get('https://api.spoonacular.com/recipes/complexSearch', {
            params: {
                apiKey: process.env.SPOONACULAR_API_KEY,
                query,
                cuisine,
                diet,
                intolerances,
                number
            }
        });
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
});

module.exports = router;