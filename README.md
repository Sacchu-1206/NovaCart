# 🛒 NovaCart

A modern and responsive React.js E-Commerce application built with Redux Toolkit and LocalStorage. NovaCart provides a smooth shopping experience where users can browse products, manage their cart and wishlist, place orders, and track their order history.

---

## ✨ Features

### 🏠 Home
- Modern Hero Section
- Flash Sale with Live Countdown
- Product Categories
- Featured Products
- Trending Products
- Why Choose NovaCart Section

### 🛍 Products
- Product Listing
- Search Products
- Category Filter
- Product Details Page
- Product Image Gallery

### ❤️ Wishlist
- Add to Wishlist
- Remove from Wishlist
- Wishlist data stored using LocalStorage

### 🛒 Shopping Cart
- Add to Cart
- Remove from Cart
- Increase / Decrease Quantity
- Cart Summary
- Persistent Cart using LocalStorage

### 📦 Orders
- Checkout Page
- Billing Form
- Place Order
- My Orders
- Order Details
- Order Tracking Timeline
- Orders stored using LocalStorage

### ⚡ User Experience
- Responsive Design
- Skeleton Loader
- Toast Notifications
- Custom 404 Page

---

# 🛠 Tech Stack

### Frontend

- React.js
- React Router DOM
- Redux Toolkit
- Axios
- Tailwind CSS

### State Management

- Redux Toolkit

### API

- DummyJSON API

### Storage

- LocalStorage

---

# 📁 Project Structure

```
src

├── components

│ ├── cart

│ ├── home

│ ├── layout

│ ├── order
 
│ ├── product

│ └── common

├── pages

│ ├── Home

│ ├── Products

│ ├── ProductDetails

│ ├── Cart

│ ├── Wishlist

│ ├── Checkout

│ ├── MyOrders

│ ├── OrderDetails

│ └── NotFound

├── redux

├── services

├── layouts

└── App.jsx
```

---

# 🚀 Getting Started

### Clone Repository

```bash
git clone https://github.com/Sacchu-1206/NovaCart.git
```

### Navigate to Project

```bash
cd NovaCart
```

### Install Dependencies

```bash
npm install
```

### Start Development Server

```bash
npm run dev
```

---

# 🎯 Key Highlights

- Reusable React Components
- Dynamic Routing
- Redux Toolkit State Management
- Persistent Cart, Wishlist and Orders
- API Integration
- Clean Folder Structure
- Responsive UI
- Modular Architecture

---

# 💡 Challenges Faced

While building NovaCart, the biggest challenge was managing application state across multiple pages.

To solve this, Redux Toolkit was used for centralized state management, while LocalStorage was added to persist user data after page refresh.

---

# 📚 What I Learned

- Building reusable React components
- Managing global state with Redux Toolkit
- Working with REST APIs
- Implementing LocalStorage persistence
- Creating scalable folder structures
- Handling dynamic routing
- Improving user experience with loaders and toast notifications

---

# 🔮 Future Improvements

- User Authentication
- Payment Gateway Integration
- Backend Integration (Node.js + Express.js)
- Admin Dashboard
- Product Reviews
- Coupon System

---

# 👨‍💻 Author

**Sachin Yadav**

Built with ❤️ using React.js