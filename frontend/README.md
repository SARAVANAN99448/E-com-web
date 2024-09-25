# One Piece E-commerce Website

This is a **One Piece E-commerce Website** built using **React.js** for the frontend and **Express.js** with **MongoDB** for the backend. Users can browse One Piece-themed products, search for them, add items to the cart, and view cart details. Firebase is used for user authentication.

## Table of Contents
- [Project Overview](#project-overview)
- [Features](#features)
- [Technologies Used](#technologies-used)
- [Setup and Installation](#setup-and-installation)
- [API Endpoints](#api-endpoints)
- [Firebase Authentication Setup](#firebase-authentication-setup)
- [Usage](#usage)
- [Future Improvements](#future-improvements)


## Project Overview
The One Piece E-commerce Website allows users to explore products, view images, search through the product catalog, manage their shopping cart, and authenticate via Firebase. The frontend is built using **React** and communicates with a backend server to handle product data, cart operations, and database interactions.

## Features
- **Product Listing**: View and search through a variety of One Piece products.
- **Search Functionality**: Filter products by name.
- **Add to Cart**: Users can add products to their shopping cart.
- **Remove from Cart**: Users can remove items from their shopping cart.
- **Product Popups**: View detailed images of products in a popup modal.
- **Firebase Authentication**: Users can sign up, log in, and log out using Firebase.
- **Cart Management**: Backend handles adding/removing items from the cart.

## Technologies Used
- **Frontend**: React.js, Tailwind CSS, Axios
- **Backend**: Node.js, Express.js, MongoDB, Mongoose, CORS
- **Database**: MongoDB (with Mongoose ODM)
- **Authentication**: Firebase Authentication
- **Other**: Dotenv for environment variables

## Setup and Installation

### Prerequisites
- **Node.js** and **npm** installed on your machine.
- **MongoDB** database (either local or hosted).
- **Firebase** account for user authentication.

### Installation Steps

1. **Clone the repository**:
   ```bash
   git clone https://github.com/your-username/onepiece-ecommerce.git
   ```

2. **Navigate to the project directory**:
   ```bash
   cd onepiece-ecommerce
   ```

3. **Install dependencies** for both frontend and backend:
   - Navigate to the `frontend` folder and run:
     ```bash
     npm install
     ```
   - Navigate to the `backend` folder and run:
     ```bash
     npm install
     ```

4. **Set up environment variables**:
   - Create a `.env` file in the backend directory and set the following:
     ```
     VITE_API_URL=mongodb+srv://<your-database-url>
     ```

5. **Set up Firebase**:
   - In your Firebase console, create a new project and enable **Firebase Authentication**.
   - Copy your Firebase configuration and replace it in your frontend code.

6. **Start the backend server**:
   ```bash
   npm run start
   ```

7. **Start the frontend development server**:
   - In the `frontend` folder, run:
     ```bash
     npm run dev
     ```

8. **Open your browser**:
   - Frontend: `http://localhost:5173`
   - Backend API: `http://localhost:5000`

## API Endpoints

- **GET /products**: Retrieve the list of products.
- **POST /add-to-cart**: Add an item to the cart (expects `id`, `image`, `text`, and `price` in the request body).
- **POST /remove-from-cart**: Remove an item from the cart (expects `productId` in the request body).
- **GET /cart**: Retrieve the items in the cart.

## Firebase Authentication Setup

To integrate Firebase authentication, the following Firebase configuration is required in your React app:

```javascript
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Firebase configuration
const firebaseConfig = {
  apiKey: "your-api-key",
  authDomain: "your-auth-domain",
  projectId: "your-project-id",
  storageBucket: "your-storage-bucket",
  messagingSenderId: "your-messaging-sender-id",
  appId: "your-app-id",
  measurementId: "your-measurement-id"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
```

1. **Firebase Authentication**: The Firebase SDK is initialized in the app, and authentication features can be used to log in, sign up, and manage user sessions.
2. To access Firebase authentication services, use `auth` in your components and functions where authentication is needed.

## Usage

1. **Browse Products**: Users can browse the products listed on the website.
2. **Search Products**: Use the search bar to filter products by name.
3. **Add to Cart**: Click the "Add to Cart" button to add items to the cart.
4. **Remove from Cart**: Use the "Remove from Cart" functionality (via API).
5. **View Cart**: Users can view the items in their cart.
6. **Firebase Authentication**: Sign up or log in using Firebase Authentication.

## Future Improvements
- **Checkout System**: Implement payment and checkout functionality.
- **Wishlist**: Allow users to add items to a wishlist.
- **Product Reviews**: Enable users to leave reviews and rate products.
- **Order Tracking**: Enable order tracking for users.



Feel free to modify the authentication section based on your project’s specific needs.