# Sports Facility Booking Backend

This is the backend service for a sports facility booking and activity management application. It allows users to register, log in, and manage sports facilities.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- Node.js and npm installed on your machine.
- MongoDB installed and running on your machine, or have access to a MongoDB Atlas instance.
- Postman (optional) for testing API endpoints.

## Installation

Follow these steps to set up and run the backend on your local machine.

### 1. Clone the Repository

```bash
git clone https://github.com/your-username/sports-app-backend.git
cd sports-app-backend
```
### 2. Install Dependencies
```bash
npm install
```
### 3. Start the Server
```bash
npm run dev
```
The server will start on http://localhost:5001

## Testing the API

You can test the API endpoints using Postman or any other API testing tool. Below are some key endpoints:

- Register a User: 'POST /api/users/register'
- Login a User: 'POST /api/users/login'
- Get User Profile: 'GET /api/users/profile' (protected)
- Create a Facility: 'POST /api/facilities/' (protected)
- Get All Facilities: 'GET /api/facilities/'
- Get Facility by ID: 'GET /api/facilities/:id'

## Technologies Used

- Node.js: JavaScript runtime environment.
- Express: Web framework for Node.js.
- MongoDB: NoSQL database.
- Mongoose: ODM for MongoDB.
- JSON Web Tokens (JWT): For secure authentication.
- Bcrypt.js: For hashing passwords.

