# Bike Store API

Bike Store is a RESTful API for managing bikes and orders. It includes features like CRUD operations for bikes, placing orders, inventory management, and calculating revenue.

## Features

- **Bike Management:**
  - Add new bikes.
  - Update bike details.
  - Delete bikes (soft delete using `isDeleted` flag).
  - Retrieve all bikes or filter by category, name, or brand.

- **Order Management:**
  - Place orders.
  - Reduce bike inventory when an order is placed.
  - Prevent orders if stock is insufficient.

- **Revenue Calculation:**
  - Calculate total revenue from all orders using MongoDB aggregation.

## Live Demo

The application is deployed on Vercel. Visit the live API:
[https://bike-store-snowy.vercel.app/](https://bike-store-snowy.vercel.app/)

## Project Repository

GitHub: [Bike Store Repository](https://github.com/mdalauddin45/web-development-level-2/tree/main/Module%2010/Bike%20Store)

## Getting Started

Follow these steps to set up the project locally.

### Prerequisites

- [Node.js](https://nodejs.org/) installed on your machine.
- [MongoDB](https://www.mongodb.com/) instance or connection string.
- Package manager: npm or yarn.

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/mdalauddin45/web-development-level-2/tree/main/Module%2010/Bike%20Store
   cd Bike Store
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and configure the following environment variables:
   ```env
   PORT=5000
   DATABASE_URL=<your-mongodb-connection-string>
   ```

4. Start the server:
   ```bash
   npm run dev
   ```

5. Access the API at `http://localhost:5000`.

## API Endpoints

### Bike Endpoints

- **Create a Bike**
  ```http
  POST /api/products
  ```

- **Get All Bikes**
  ```http
  GET /api/products
  ```

- **Get a Bike by ID**
  ```http
  GET /api/products/:productId
  ```

- **Update a Bike**
  ```http
  PUT /api/products/:productId
  ```

- **Delete a Bike**
  ```http
  DELETE /api/products/:productId
  ```

- **Calculate Revenue**
  ```http
  GET /api/orders/revenue
  ```

### Order Endpoints

- **Place an Order**
  ```http
  POST /api/orders
  ```

## Technologies Used

- **Backend:** Node.js, Express.js
- **Database:** MongoDB,mongoose
- **Validation:** Zod
- **Deployment:** Vercel


