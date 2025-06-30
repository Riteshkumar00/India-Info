# State Info – District-Level Information Viewer

This project is a web application developed to help users explore detailed information about various districts in India. It is designed for general public use—especially for those who want to understand the ground-level details of any district, such as administration, public services, and key highlights.

Each district has its own dedicated page with structured information, making it easier for users to access accurate data in one place.

## Features

- Separate, structured pages for each district
- Data sections include:
  - About District
  - Administrative Setup
  - Public Utilities
  - Tourism Information
  - District at a Glance
- Responsive design with a clean layout
- MySQL database connection for dynamic content

## Technologies Used

- HTML, CSS, JavaScript (Frontend)
- Node.js and Express (Backend)
- MySQL (Database)
- Render (Hosting Platform)
- Railway (Database Hosting)
- GitHub (Version Control and CI for Render)

## Hosting Flow

1. Code changes are pushed to GitHub
2. GitHub is connected to Render, which deploys the live website
3. The MySQL database is hosted on Railway
4. The backend fetches data from Railway and serves it through Render

## Project Structure

state-info/
│
├── Pages/ # Contains HTML pages for each district
├── css/ # Stylesheets
├── db.js # Database connection setup (Railway MySQL)
├── server.js # Express server


## How to Run Locally

1. Clone the repository:
git clone https://github.com/Riteshkumar00/state-info.git

2. Navigate into the project folder:
cd state-info

3. Install dependencies:
npm install

4. Set up MySQL:
- Create a MySQL database (or use Railway)
- Update your database credentials in `db.js`

5. Run the application:
node server.js

6. Open in browser:
http://localhost:3000

## Status

This project is actively in development. New district pages and enhancements are being added regularly.
