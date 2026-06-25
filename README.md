# Food Recipes

A responsive recipe browsing app built with React, Vite, and Tailwind CSS. The project focuses on clean food-card UI, category-based browsing, search, saved favorites, and simple recipe detail pages.

<p>
  <a href="https://food-recipes-phi-sepia.vercel.app"><strong>Live Demo</strong></a>
  &nbsp;|&nbsp;
  <a href="https://github.com/OmKhandale05/food-recipes"><strong>Repository</strong></a>
</p>

## Overview

Food Recipes is a frontend-focused recipe discovery experience. It gives users a simple way to browse meals, filter by category, search by recipe name, save favorite recipes, and open individual recipe detail pages.

This project is part of my UI/UX and frontend portfolio, showing how I structure a small product-style React app with reusable components, custom hooks, client-side routing, and responsive layouts.

## Features

- Recipe listing with responsive card layout
- Search recipes by title
- Filter recipes by Breakfast, Lunch, Dinner, and Dessert
- Favorite/unfavorite recipes with localStorage persistence
- Toast feedback when recipes are added or removed from favorites
- Recipe details route using dynamic URL params
- Separate pages for Home, Recipes, Favorites, Contact, and Recipe Details
- Vercel-ready routing configuration for client-side routes

## UI/UX Focus

- Clean recipe-card layout with image-first browsing
- Simple category controls for quick filtering
- Clear visual hierarchy for title, rating, time, and actions
- Lightweight interaction feedback through hover states and toast messages
- Responsive grid layout for mobile, tablet, and desktop screens

## Tech Stack

| Area | Tools |
| --- | --- |
| Frontend | React, JavaScript, Vite |
| Styling | Tailwind CSS |
| Routing | React Router |
| UI Icons | Heroicons |
| Feedback | React Toastify |
| Deployment | Vercel |

## Project Structure

```txt
src/
  components/
    Footer.jsx
    Navbar.jsx
    RecipeCard.jsx
  data/
    recipes.js
  hooks/
    useCategoryFilter.js
    useFavorites.js
    useRecipeSearch.js
  pages/
    Contact.jsx
    Favorites.jsx
    Home.jsx
    RecipeDetails.jsx
    Recipes.jsx
  router/
    AppRouter.jsx
```

## Getting Started

Clone the project:

```bash
git clone https://github.com/OmKhandale05/food-recipes.git
cd food-recipes
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Build for production:

```bash
npm run build
```

Run lint checks:

```bash
npm run lint
```

## Portfolio Note

This is a frontend practice project focused on UI composition, routing, filtering logic, and small app interactions. A future version could include real recipe API integration, ingredients, cooking steps, nutrition details, and user accounts.

## Author

Built by [Omprakash Khandale](https://github.com/OmKhandale05), UI/UX Designer + Frontend Developer.
