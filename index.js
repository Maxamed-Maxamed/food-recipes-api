const express = require('express');
const bodyParser = require('body-parser');
const homeRouter = require('./routes/home');
const aboutRouter = require('./routes/about');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(bodyParser.json());

// Mount the route handlers
app.use('/', homeRouter);
app.use('/about', aboutRouter);

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
