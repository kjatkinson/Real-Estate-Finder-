function fetchProperties(location, propertyType, minPrice, maxPrice) {
    const url = new URL('http://localhost:3000/api/properties');
    url.searchParams.append('location', location);
    if (propertyType) url.searchParams.append('type', propertyType);
    if (minPrice) url.searchParams.append('minPrice', minPrice);
    if (maxPrice) url.searchParams.append('maxPrice', maxPrice);

    fetch(url)
        .then(response => response.json())
        .then(data => displayProperties(data))
        .catch(error => console.error('Error:', error));
}