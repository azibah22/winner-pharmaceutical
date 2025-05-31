# This is Pharmacy - Wholesale Pharmaceutical Website

A professional website for "This is Pharmacy", a wholesale pharmaceutical distributor based in Liberia that imports drugs from India and supplies them to local pharmacies.

## Features

- Responsive design that works on all devices
- Modern and clean user interface
- Product catalog with search and filter functionality
- Contact form for inquiries
- Information about services and company
- Mobile-friendly navigation

## Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- Font Awesome Icons
- Google Fonts

## Setup Instructions

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Navigate to the project directory:
```bash
cd this-is-pharmacy
```

3. Open `index.html` in your web browser to view the website.

## Project Structure

```
this-is-pharmacy/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── images/
│   └── pharmacy-bg.jpg
└── README.md
```

## Customization

### Adding Products

To add or modify products, edit the `products` array in `js/main.js`:

```javascript
const products = [
    {
        id: 1,
        name: 'Product Name',
        category: 'category-name',
        origin: 'India',
        price: '$XX.XX'
    },
    // Add more products...
];
```

### Modifying Styles

The website uses CSS variables for easy customization. Edit the following variables in `css/styles.css`:

```css
:root {
    --primary-color: #0066cc;
    --secondary-color: #00a859;
    --text-color: #333;
    --light-gray: #f5f5f5;
    --white: #ffffff;
    --shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
```

## Contact Form

The contact form is currently set up to log form submissions to the console. To enable actual form submission:

1. Set up a backend server to handle form submissions
2. Modify the form submission handler in `js/main.js` to send data to your server

## Browser Support

The website is compatible with:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

For any questions or support, please contact:
- Email: info@thisispharmacy.com
- Phone: +231 123 456 789 