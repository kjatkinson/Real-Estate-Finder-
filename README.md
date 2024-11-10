# 🏠 Real Estate Finder

A modern web application that helps users find their perfect property by fetching real-time listings from a real estate API. Built with vanilla JavaScript and modern CSS, this application provides an intuitive interface for property searching and filtering.

![Real Estate Finder Demo](https://via.placeholder.com/800x400)

## 🌟 Features

- **Real-time Property Search**: Instantly fetch property listings based on user criteria
- **Advanced Filtering**: Filter properties by:
  - Location
  - Property type (House, Apartment, Condo)
  - Price range (Min/Max)
- **Responsive Design**: Fully functional on both desktop and mobile devices
- **Modern UI**: Clean and intuitive user interface with a beautiful hero section
- **Background Styling**: Custom background image for enhanced visual appeal

## 🛠️ Technologies Used

- HTML5
- CSS3 (Flexbox & Grid)
- Vanilla JavaScript
- RESTful API Integration

## 📋 Prerequisites

Before you begin, ensure you have:
- A modern web browser
- API key from your chosen real estate data provider
- Basic understanding of HTML, CSS, and JavaScript

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone https://github.com/yourusername/real-estate-finder.git
cd real-estate-finder
```

2. Create a config.js file in the root directory:
```javascript
const API_KEY = 'your_api_key_here';
```

3. Update the API endpoint in app.js:
```javascript
const API_ENDPOINT = 'https://your-real-estate-api.com/v1/listings';
```

4. Open index.html in your browser or use a local server:
```bash
python -m http.server 8000
# or
php -S localhost:8000
```


## 💻 Usage

1. Enter your desired location in the search bar
2. Select property type from the dropdown
3. Set your minimum and maximum price range
4. Click the search button to fetch matching properties



## 🔒 API Integration

To integrate with a real estate API:

1. Sign up for an API key from your chosen provider
2. Add the API key to config.js
3. Implement error handling for API requests
4. Update the data mapping in the displayProperties function to match your API's response structure

## 📱 Responsive Design

The application is built with a mobile-first approach and includes:
- Flexible grid layout for property listings
- Responsive form elements
- Adaptive hero section
- Mobile-friendly navigation

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request


## 👏 Acknowledgments

- Background image from [Provider Name]
- Icons from [Icon Provider]
- API documentation from [API Provider]

## 📞 Contact

Kayla Atkinson - [(https://www.linkedin.com/in/kayla-joyce-atkinson/)] 

Project Link: [https://github.com/yourusername/real-estate-finder](https://github.com/yourusername/real-estate-finder)
