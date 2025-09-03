# Simple E-commerce Site with React, TypeScript, and Supabase

This is a simple, modern e-commerce application built to demonstrate core concepts of front-end development using a powerful and popular technology stack.

## 🚀 Key Technologies Used

* **React:** A JavaScript library for building user interfaces.
* **TypeScript:** A typed superset of JavaScript that adds type safety to the application, making the code more robust and easier to debug.
* **Supabase:** An open-source Firebase alternative used for the back-end. It provides a real-time database to manage product data.
* **React Router:** A standard library for routing in React, enabling navigation between different pages of the application.
* **React Context API:** Used for simple state management of the shopping cart, avoiding "prop drilling."


## ✨ Features

* **Product Listing:** Fetches and displays a list of products from a Supabase database.
* **Shopping Cart:** Allows users to add and remove items from a cart.
* **Checkout Form:** A basic form for users to place an order.
* **Dynamic Routing:** Navigates between the product list, cart, and checkout pages.

## 🛠️ Installation and Setup

1.  **Clone the repository:**
    ```bash
    git clone [your-repo-url]
    cd [your-repo-name]
    ```

2.  **Install dependencies:**
    ```bash
    npm install
    ```

3.  **Set up Supabase:**
    * Create a new project on [Supabase](https://supabase.com/).
    * Create a `products` table with `id`, `name`, `description`, `price`, and `image_url` columns.
    * Get your Project URL and `anon` public key from **Project Settings > API**.
    * Create a file named `.env.local` in the root of your project and add your keys:
    ```
    VITE_SUPABASE_URL="YOUR_SUPABASE_URL"
    VITE_SUPABASE_ANON_KEY="YOUR_SUPABASE_ANON_KEY"
    ```

4.  **Run the application:**
    ```bash
    npm run dev
    ```

    The application will be available at `http://localhost:5173` (or the port specified by Vite).

## 📂 Project Structure

├── public/
├── src/
│   ├── components/
│   │   ├── Cart.tsx
│   │   ├── OrderForm.tsx
│   │   └── ProductList.tsx
│   ├── context/
│   │   └── CartContext.tsx
│   ├── hooks/
│   │   └── useCartLogic.ts
│   ├── supabaseClient.ts
│   ├── App.tsx
│   ├── index.css
│   └── main.tsx
├── .env.local
├── package.json
├── tsconfig.json
└── vite.config.ts


## 🤝 Contributing

Feel free to open issues or submit pull requests to improve the project.
