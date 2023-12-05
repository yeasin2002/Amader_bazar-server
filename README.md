<div style="display: flex">
<img
      src="./public/amder-bajar-logo.png"
      style="width: 50px; height: 50px"
    />
 <h2> আমাদের বাজার - Server <h2/>
 </div>

#### The project is an online store that sells a variety of products and allows customers to browse, purchase, and track their orders. This repository contains only the code for the dashboard, which provides an interface for store administrators to manage products, view sales data, and track orders.

## Conurbations Guideline

### commit convention


| Commit Type | Description                                                                                                 |
| ----------- | ----------------------------------------------------------------------------------------------------------- |
| build       | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| chore       | Changes to the build process or auxiliary tools and libraries such as documentation generation              |
| ci          | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| docs        | Documentation only changes                                                                                  |
| feat        | A new feature                                                                                               |
| fix         | A bug fix                                                                                                   |
| perf        | A code change that improves performance                                                                     |
| refactor    | A code change that neither fixes a bug nor adds a feature                                                   |
| revert      | Reverts a previous commit                                                                                   |
| style       | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| test        | Adding missing tests or correcting existing tests                                                           |

## OR use Emoji for commit messages

| Emoji | Tag | Description |
|-------|-----|-------------|
| 🔥    | `:fire:` | Remove code or files |
| 🎨    | `:art:` | Improve structure / format of the code |
| 🐛    | `:bug:` | Fix a bug |
| ✨    | `:sparkles:` | Introduce new features |
| 📝    | `:memo:` | Write docs |
| 🚀    | `:rocket:` | Deploy stuff |
| 💄    | `:lipstick:` | Add or update the UI and style files |
| 🎉    | `:tada:` | Begin a project |
| ✅    | `:white_check_mark:` | Add or update tests |
| 🔒    | `:lock:` | Fix security issues |
| 🍎    | `:apple:` | Fix something on macOS |
| 🐧    | `:penguin:` | Fix something on Linux |
| 🏁    | `:checkered_flag:` | Fix something on Windows |
| 🤖    | `:robot:` | Fix or improve Android stuff |
| 🍏    | `:green_apple:` | Fix or improve iOS stuff |
| 🔖    | `:bookmark:` | Release / Version tags |
| 🚧    | `:construction:` | Work in progress |

## Routes

### Auth Routes

| Route Type | Route Name | Route Description | Route Path | Body |
|------------|------------|-------------------|------------|------|
| POST       | login      | For user login    | /login     |      |
| POST       | register   | Register a user   | /register  |      |
| POST       | JWT token  | Generate token    | /token     |      |
| POST       | forgot password | Reset password | /forgot-password | |
| POST       | reset password | Set new password | /reset-password | |

### Product Routes

| Route Type | Route Name | Route Description | Route Path | Body |
|------------|------------|-------------------|------------|------|
| GET        | all product | Get all products | /products | |
| GET        | single product | Get a product | /product/:id | |
| POST       | create product | Create a product | /product | |
| PUT        | update product | Update a product | /product/:id | |
| DELETE     | delete product | Delete a product | /product/:id | |

### User Routes

| Route Type | Route Name | Route Description | Route Path | Body |
|------------|------------|-------------------|------------|------|
| GET        | all user | Get all users | /users | |
| GET        | single user | Get a user | /user/:id | |
| PUT        | update user | Update a user | /user/:id | |
| DELETE     | delete user | Delete a user | /user/:id | |

### Order Routes

| Route Type | Route Name | Route Description | Route Path | Body |
|------------|------------|-------------------|------------|------|
| GET        | all order | Get all orders | /orders | |
| GET        | single order | Get an order | /order/:id | |
| POST       | create order | Create an order | /order | |
| PUT        | update order | Update an order | /order/:id | |
| DELETE     | delete order | Delete an order | /order/:id | |

### Dashboard Routes

| Route Type | Route Name | Route Description | Route Path | Body |
|------------|------------|-------------------|------------|------|
| GET        | all Product | Get all Products | /dashboard/products | |
| GET        | single Product | Get a Product | /dashboard/product/:id | |
| PUT        | update Product | Update a Product | /dashboard/product/:id | |
| DELETE     | delete Product | Delete a Product | /dashboard/product/:id | |


