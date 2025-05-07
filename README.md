# Personal Portfolio Website

A responsive multi-page portfolio website with a modern dark theme, designed for a Computer Technology student specializing in Data Science and Database Management.

## Features

- Multi-page layout with separate pages for each section
- Responsive design that works on all devices
- Modern dark theme with elegant color scheme
- Interactive AI-powered chatbot for visitor assistance
- Mobile-friendly hamburger menu
- Pages for Home, About, Skills, Projects, Resume, and Contact
- Modern and clean design
- Easy to customize

## Pages

- **Home (index.html)**: Landing page with introduction and call-to-action buttons
- **About (about.html)**: Detailed information about you and your background
- **Skills (skills.html)**: Showcase of your technical skills and expertise
- **Projects (projects.html)**: Portfolio of your projects with descriptions
- **Resume (resume.html)**: Display and download options for your resume
- **Contact (contact.html)**: Contact form and information

## Interactive Chatbot

The website features an AI-powered chatbot that provides:
- Real-time assistance to visitors
- Information about your skills and experience
- Project details and descriptions
- Quick navigation help
- Contact information
- Resume download assistance

To interact with the chatbot:
1. Click the chat icon in the bottom right corner
2. Type your question or request
3. Receive instant AI-powered responses
4. Use the chatbot to navigate through the website

## Customization

### Personal Information
1. Update each HTML file with your personal information:
   - Your name and title in the Home page
   - About Me section with your personal description
   - Skills section with your specific skills
   - Projects section with your actual projects
   - Resume section with your resume files
   - Contact information with your details

### Colors
The color scheme can be modified in `styles.css`:
```css
:root {
    --primary-color: #1a237e; /* Dark Blue */
    --secondary-color: #8d6e63; /* Brown */
    --accent-color: #f5f5dc; /* Vanilla Beige */
    --text-color: #333;
    --light-text: #fff;
    --background-color: #000;
}
```

### Projects
To add or modify projects:
1. Open `projects.html`
2. Copy and paste the project-card div structure
3. Update the project title, description, and links

### Resume
To update your resume:
1. Place your resume PDF file in the `resume` folder
2. Update the file path in `resume.html` to point to your resume file
3. The resume page includes an iframe to preview the resume and a download button

### Contact Information
Update your contact information in `contact.html`:
- Email address
- Phone number
- Location
- Social media links

## Usage

1. Clone or download this repository
2. Open `index.html` in your web browser
3. Customize the content as needed
4. Deploy to your preferred hosting service

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Opera (latest)

## Dependencies

- Font Awesome 6.0.0 (for icons)
- Custom JavaScript for interactive features
- AI-powered chatbot functionality

## License

This project is open source and available under the MIT License. 
