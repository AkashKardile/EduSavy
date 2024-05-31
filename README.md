EduSavy (Learning Management System)

## Overview

EduSavy is a comprehensive learning management system (LMS) built using modern web technologies to deliver an immersive learning experience. Leveraging React.js for dynamic user interfaces, React Router DOM for seamless navigation, Axios for efficient API communication, and EmailJS for client-side email functionalities, the platform ensures an engaging and interactive frontend. On the backend, Node.js and Express.js provide robust server-side logic, while MongoDB offers a scalable database solution for storing diverse LMS data. Security and data integrity are prioritized with bcrypt for password hashing and JWT for authentication and authorization.EduSavy empowers educators and learners with tools for efficient management of courses, user profiles, and learning resources, ensuring a secure and engaging educational environment.

## Features

- **Dynamic User Interfaces**: Interactive and responsive UI using React.js.
- **Seamless Navigatio**n: Smooth page transitions with React Router DOM.
- **Efficient API Communication**: Robust API handling with Axios.
- **Email Functionalities**: Client-side email features with EmailJS.
- **Robust Backend**: Secure server-side logic with Node.js and Express.js.
- **Scalable Database**: Flexible and scalable data storage with MongoDB.
- **Security**: Password hashing with bcrypt and authentication with JWT.

## Tech Stack

- **Frontend**: React.js, React Router DOM, Axios, EmailJS

- **Backend**: Node.js, Express.js, MongoDB, bcrypt, JWT

## Getting Started

Follow these instructions to set up and run the project locally.

### Prerequisites

Ensure you have the following installed:

- Node.js (v14 or later)
- npm (v6 or later) or yarn (v1.22 or later)
- MongoDB

### Installation

1.  **Clone the repository:**

    git clone https://github.com/AkashKardile/EduSavy.git

2.  **Install dependencies**:

    Using npm: npm install

    Using yarn: yarn install

    ###### Running the Application

    **Backend**
    To start the backend server:

        Using npm: npm run start:backend

        Using yarn: yarn start:backend

    **Frontend**
    To start the frontend development server:

        Using npm:npm start

        Using yarn: yarn start

    The application will be available at http://localhost:3000

**Project Structure**

    backend/

    ├── .env                  # Environment variables

    ├── adminsignup.js        # Admin signup logic

    ├── app.js                # Express.js application setup

    ├── connection.js         # Database connection setup

    ├── courses.js            # Course-related logic

    ├── mail.js               # Email handling

    ├── Payment.js            # Payment processing logic

    ├── routes.js             # API routes

    ├── Usersignup.js         # User signup logic




    frontend/

    ├── src/

    │   ├── components/

    │   │   ├── Admin/        # Admin components

    │   │   ├── Courses/      # Course components

    │   │   ├── Modal/        # Modal components

    │   │   ├── user/         # User components

    │   ├── assets/           # Static assets

    │   ├── routes/           # Route components

    │   ├── App.js            # Main application component

    │   └── index.js          # Entry point for React

## Contributing

Contributions are welcome! If you'd like to contribute to this project, please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and ensure they are properly tested.
4. Commit your changes with descriptive commit messages.
5. Push your changes to your fork.
6. Submit a pull request to the `main` branch of the original repository.

Please ensure your code follows the project's coding standards and includes tests where applicable. Your pull request will be reviewed by the maintainers, and once approved, it will be merged into the main branch.

Thank you for contributing to the project!

**License**
This project is licensed under the MIT License. See the [LISENSE](LISENSE) file for more details.

**Acknowledgements**

- [React.js](https://react.dev/)
- [Node.js](https://nodejs.org/en)
- [Exprees.js](https://expressjs.com/)
- [MongoDB](https://www.mongodb.com/)
- [bcrypt](https://www.npmjs.com/package/bcrypt)
- [JWT](https://jwt.io/)
- [Axios](https://axios-http.com/)
- [Emailjs](https://www.emailjs.com/)
- [React Router Dom](https://reactrouter.com/en/main)
