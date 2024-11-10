// app.js
document.addEventListener('DOMContentLoaded', () => {
    const searchForm = document.getElementById('search-form');
    const propertyList = document.getElementById('property-list');

    searchForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const location = document.getElementById('location').value;
        const propertyType = document.getElementById('property-type').value;
        const minPrice = document.getElementById('min-price').value;
        const maxPrice = document.getElementById('max-price').value;

        fetchProperties(location, propertyType, minPrice, maxPrice);
    });

    function fetchProperties(location, propertyType, minPrice, maxPrice) {
        // In a real application, this would be an API call to your backend
        // For this example, we'll use mock data
        const mockData = [
            { id: 1, address: '123 Main St', price: 300000, type: 'house', image: 'https://example.com/house1.jpg' },
            { id: 2, address: '456 Elm St', price: 250000, type: 'apartment', image: 'https://example.com/apartment1.jpg' },
            { id: 3, address: '789 Oak St', price: 400000, type: 'condo', image: 'https://example.com/condo1.jpg' },
        ];

        displayProperties(mockData);
    }

    function displayProperties(properties) {
        propertyList.innerHTML = '';
        properties.forEach(property => {
            const propertyCard = document.createElement('div');
            propertyCard.className = 'property-card';
            propertyCard.innerHTML = `
                <img src="${property.image}" alt="${property.address}">
                <h3>${property.address}</h3>
                <p>Price: $${property.price.toLocaleString()}</p>
                <p>Type: ${property.type}</p>
            `;
            propertyList.appendChild(propertyCard);
        });
    }
});