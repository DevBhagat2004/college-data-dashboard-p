# College Data Dashboard

A responsive web application that allows users to search and explore U.S. college data including retention rates, completion rates, and other key statistics using the U.S. Department of Education's College Scorecard API.

## 🚧 Development Status

**This application is currently in active development.** More features and improvements are continuously being added. Stay tuned for regular updates!

### Upcoming Versions

- **Student Version**: A streamlined interface designed specifically for students researching colleges and universities
- **Professional IR Version**: An advanced version tailored for Institutional Research professionals with enhanced analytics and reporting capabilities

## Features

- **School Search**: Search for colleges and universities by name
- **Smart Data Display**: Automatically detects whether the institution is a 2-year or 4-year school and displays relevant metrics
- **Key Statistics**: 
  - Full-time and part-time retention rates
  - Completion rates (150% of normal time)
  - School name confirmation
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI**: Clean, card-based interface with hover effects and smooth transitions

## Screenshots

The dashboard displays college information in organized cards showing:
- Institution name confirmation
- Retention rates for full-time and part-time students
- Completion rates within 150% of normal time

## Getting Started

### Prerequisites

- A modern web browser
- An API key from the U.S. Department of Education's College Scorecard API

### Installation

1. Clone the repository:
```bash
git clone [your-repo-url]
cd college-data-dashboard
```

2. Open `script.js` and replace the API key placeholder:
```javascript
const APIKEY = "YOUR_ACTUAL_API_KEY_HERE";
```

3. Open `index.html` in your web browser or serve it using a local web server.

### Getting an API Key

1. Visit [api.data.gov](https://api.data.gov/signup/)
2. Sign up for a free API key
3. Replace the placeholder in `script.js` with your actual API key

## Usage

1. Enter a college or university name in the search field
2. Click "Submit" to fetch data
3. View the results displayed in organized cards below the search form

The application automatically determines whether the institution is a 2-year or 4-year school and fetches the appropriate completion and retention rate data.

## File Structure

```
college-data-dashboard/
├── index.html          # Main HTML structure
├── script.js           # JavaScript functionality and API calls
├── style.css           # Styling and responsive design
└── README.md           # This file
```

## API Integration

This application uses the [U.S. Department of Education's College Scorecard API](https://collegescorecard.ed.gov/data/documentation/) to fetch:

- School identification and basic information
- Student retention rates (full-time and part-time)
- Completion rates within 150% of normal time
- Institution type (2-year vs 4-year)

## Technical Details

### Supported Institution Types

- **2-Year Colleges**: Displays completion rates for less than 4-year programs
- **4-Year Colleges**: Displays completion rates for 4-year programs
- **Graduate Schools**: Treated as 4-year institutions for data purposes

### Data Fields Retrieved

For 2-year institutions:
- `latest.completion.completion_rate_less_than_4yr_150nt`
- `latest.student.retention_rate.lt_four_year.full_time`
- `latest.student.retention_rate.lt_four_year.part_time`

For 4-year institutions:
- `latest.completion.completion_rate_4yr_150nt`
- `latest.student.retention_rate.four_year.full_time`
- `latest.student.retention_rate.four_year.part_time`

## Browser Compatibility

- Chrome (recommended)
- Firefox
- Safari
- Edge
- Mobile browsers

## Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/new-feature`)
3. Commit your changes (`git commit -am 'Add new feature'`)
4. Push to the branch (`git push origin feature/new-feature`)
5. Create a Pull Request

## Known Issues

- The application requires a valid API key to function
- Some institutions may not have complete data available
- Rate limiting may apply based on API usage

## Future Enhancements

- Add more college statistics (tuition costs, student demographics)
- Implement college comparison functionality
- Add data visualization charts
- Include historical data trends
- Add favorites/bookmarking feature
- **Student Version**: User-friendly interface for college research
- **Professional IR Version**: Advanced analytics for institutional research professionals

## License

This project is open source and available under the [MIT License](LICENSE).

## License

This project is open source and available under the [MIT License](LICENSE).

## Author

**Dev Bhagat**

## Acknowledgments

- U.S. Department of Education for providing the College Scorecard API
- Data.gov for API infrastructure

---

*For questions or support, please open an issue in the repository.*