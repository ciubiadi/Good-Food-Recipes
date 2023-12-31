# Good Food Recipes App
<img width="1495" alt="MealsTable" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/dc2f0a02-e2d6-4360-a9cf-5ad0cbac94c0">

## Introduction

Welcome to **GoodFoodRecipes**, your go-to app for exploring delicious meals and connecting with experienced cooking coaches. Whether you're a food enthusiast looking for new recipes or a budding chef eager to enhance your skills, GoodFoodRecipes has you covered. The app can be cheked at https://vuemealsandcooks.web.app/ .

## Features

### Home

- **Random Recipes:** Explore 10 random meal recipes to discover new and exciting dishes.

### Search Meals

- **Dynamic Search:** Find meals by entering keywords, letters, or ingredients in the search bar.

### Meals By Letter

- **Alphabetical Search:** Browse meals by clicking on the letter corresponding to the recipe's initial letter.

### Search By Ingredients

- **Ingredient Search:** Explore a list of ingredients and find meals based on your preferred ingredients.

### Meals Table

- **Table View:** Access a paginated table showcasing a variety of meals.
- **Pin and Unpin:** Pin your favorite meals to easily access them later.
- **Pin Limit:** Users can pin a maximum of 5 meals.

### Find a Cooking Professor

- **Coaches List:** Explore a list of cooking coaches available for mentorship.
- **View Coach Details:** Get detailed information about a cooking coach's expertise and experience.
- **Register as a Cook:** Users can register as a cooking coach by logging in.
- **Contact Coach:** Connect with a coach for personalized guidance.
- **View Incoming Requests:** Logged-in users can view incoming requests from aspiring cooking enthusiasts.

## What Did I Use

To create GoodFoodRecipes, I utilized the following technologies and tools as prerequisites:
- [TailwindCSS](https://tailwindcss.com/docs/guides/vite#vue): TailwindCSS served as the styling framework, providing a visually appealing user interface. The integration details can be found in the [TailwindCSS Vite Guide](https://tailwindcss.com/docs/guides/vite#vue).
- [Vue Router 4](https://router.vuejs.org/): Vue Router 4 was used for navigation, enabling the creation of a seamless single-page application experience. 
- [Vuex 4](https://vuex.vuejs.org/): Vuex 4 played a crucial role in state management, allowing for the efficient handling of application data. The Vuex store was modularized to manage various aspects of the app.
- [TailwindCSS Forms](https://github.com/tailwindlabs/tailwindcss-forms): TailwindCSS Forms enhanced form styling, contributing to an improved user experience. The installation and usage details can be found in the [TailwindCSS Forms GitHub repository](https://github.com/tailwindlabs/tailwindcss-forms).
- [Axios](https://www.npmjs.com/package/axios): Axios, a promise-based HTTP client, was used for making API requests. It facilitated seamless communication with external APIs, such as fetching data from [TheMealDB Recipe API](https://themealdb.com/api.php).
- [Firebase](https://firebase.google.com/): Firebase services, including the database and authentication, were employed for securely storing user data. Firebase Hosting was utilized for deploying and hosting the app.
- [TheMealDB Recipe API](https://themealdb.com/api.php): External API for fetching meal recipes and ingredients.

## Store Logic

In GoodFoodRecipes, the application's logic is efficiently managed through the Vuex store, which is divided into modular sections to handle different aspects of the app:

### Authentication Module

- **State:**
  - `userId`: The unique identifier of the authenticated user.
  - `token`: The authentication token associated with the user.
  - `didAutoLogout`: A flag indicating whether the user has been automatically logged out.

- **Mutations, Actions, Getters:**
  - Manage user authentication, token storage, and auto-logout functionality.

### Coaches Module

- **State:**
  - `coaches`: An array of cooking coaches, each containing details such as `id`, `firstName`, `lastName`, `areas`, `description`, and `hourlyRate`.

- **Mutations, Actions, Getters:**
  - Handle the retrieval and manipulation of coaching information.
  - Allow users to register as coaches.

### Requests Module

- **State:**
  - `requests`: An array containing user requests.

- **Mutations, Actions, Getters:**
  - Manage incoming requests from users seeking coaching.

### Meals Module

- **State:**
  - `searchedMeals`: An array of meals resulting from a user's search query.
  - `mealsByLetter`: An array of meals categorized alphabetically.
  - `mealsByIngredient`: An array of meals based on selected ingredients.
  - `pinnedMeals`: An array to store up to 5 user-pinned favorite meals.
  - `ingredient`: An object representing a selected ingredient.

- **Mutations, Actions, Getters:**
  - Handle the retrieval and display of various meal-related data.
  - Allow users to pin and unpin favorite meals.
  - Manage the storage and retrieval of ingredients.

The modular structure of the Vuex store ensures a clean separation of concerns, making the application scalable and maintainable. Each module focuses on a specific aspect of the app, providing a clear and organized structure for handling state, mutations, actions, and getters.


## Get Started

1. **Clone the Repository:**
   ```bash
   git clone https://github.com/your-username/VueMealsAndCooks.git
   ```

2. **Install Dependencies:**
   ```bash
   cd VueMealsAndCooks
   npm install
   ```
   
3. **Run the App:**
   ```bash
   npm run dev
   ```
   
4. **Explore and Enjoy:**
   Open your browser and navigate to http://localhost:3000 to start using VueMealsAndCooks.

---

# Vue 3 + TypeScript + Vite

This template should help get you started developing with Vue 3 and TypeScript in Vite. The template uses Vue 3 `<script setup>` SFCs, check out the [script setup docs](https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup) to learn more.

## Recommended IDE Setup

- [VS Code](https://code.visualstudio.com/) + [Volar](https://marketplace.visualstudio.com/items?itemName=Vue.volar) (and disable Vetur) + [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin).

## Type Support For `.vue` Imports in TS

TypeScript cannot handle type information for `.vue` imports by default, so we replace the `tsc` CLI with `vue-tsc` for type checking. In editors, we need [TypeScript Vue Plugin (Volar)](https://marketplace.visualstudio.com/items?itemName=Vue.vscode-typescript-vue-plugin) to make the TypeScript language service aware of `.vue` types.

If the standalone TypeScript plugin doesn't feel fast enough to you, Volar has also implemented a [Take Over Mode](https://github.com/johnsoncodehk/volar/discussions/471#discussioncomment-1361669) that is more performant. You can enable it by the following steps:

1. Disable the built-in TypeScript Extension
   1. Run `Extensions: Show Built-in Extensions` from VSCode's command palette
   2. Find `TypeScript and JavaScript Language Features`, right click and select `Disable (Workspace)`
2. Reload the VSCode window by running `Developer: Reload Window` from the command palette.

## Screenshots
### Home Oage
<img width="1491" alt="Home" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/22b26c2a-82b4-480e-a4b3-8198e5d93fb2">

### Search Meals
<img width="1492" alt="SearchMeals" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/cba5d183-1240-44d8-80bf-91887dc37526">

### Search Meals By Letter
<img width="1493" alt="MealsByLetter" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/c9a1d1f3-febf-430e-af9f-6bb4e333e3e4">

### Search Meals By Ingredients
<img width="1495" alt="MealsByIngredients" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/562aac1e-067f-42aa-8796-542a70a1a4e1">

### Coaches List
<img width="1494" alt="Coaches" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/8978f413-7ca8-4298-a295-386a063a47ce">

### Coach Detail
<img width="1493" alt="CoachDetails" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/0a16fed7-31ed-4dc6-9c6d-1c79aaa022fb">

### Contact Coach
<img width="1495" alt="ContactCoach" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/4bb7c028-2495-420b-81cc-b2eb72f8b868">

### Login Or Signup
<img width="40%" alt="Login" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/a15a5fee-e30c-4653-a414-510c927602ef">
<img width="40%" alt="sign up" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/a544a396-ca6a-44c0-9f58-6a1725d29d49">

### Register as a Coach
<img width="1494" alt="RegisterCoach" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/735fb61b-97e2-47a8-98e0-614b97fef14d">

### Requests List
<img width="1492" alt="Requests" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/3972323e-77af-4662-bdec-155cd23d4970">

### Meals Data Table
<img width="1495" alt="MealsTable" src="https://github.com/ciubiadi/Good-Food-Recipes/assets/46215033/cd134853-9703-4cb9-baa7-be75249716dd">
