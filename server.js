// server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.json());

// Mock database (in a real application, you'd use a proper database like MongoDB or PostgreSQL)
const properties = [
    { id: 1, address: '123 Main St', price: 300000, type: 'house', image: 'https://example.com/house1.jpg' },
    { id: 2, address: '456 Elm St', price: 250000, type: 'apartment', image: 'https://example.com/apartment1.jpg' },
    { id: 3, address: '789 Oak St', price: 400000, type: 'condo', image: 'https://example.com/condo1.jpg' },
];

app.get('/api/properties', (req, res) => {
    const { location, type, minPrice, maxPrice } = req.query;
    let filteredProperties = properties;

    if (location) {
        filteredProperties = filteredProperties.filter(p => p.address.toLowerCase().includes(location.toLowerCase()));
    }
    if (type) {
        filteredProperties = filteredProperties.filter(p => p.type === type);
    }
    if (minPrice) {
        filteredProperties = filteredProperties.filter(p => p.price >= parseInt(minPrice));
    }
    if (maxPrice) {
        filteredProperties = filteredProperties.filter(p => p.price <= parseInt(maxPrice));
    }

    res.json(filteredProperties);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});