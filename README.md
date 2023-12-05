<div style="display: flex">
<img
      src="./public/amder-bajar-logo.png"
      style="width: 50px; height: 50px"
    />
 <h2> আমাদের বাজার - Server <h2/>
 </div>

#### The project is an online store that sells a variety of products and allows customers to browse, purchase, and track their orders. This repository contains only the code for the dashboard, which provides an interface for store administrators to manage products, view sales data, and track orders.

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




<!-- <img src="./public/showcase/design.svg"> -->
<!-- #### [Figma UI](https://www.figma.com/file/Douo9VLnXKBXb6B2cweSQs/Amader-Bazar?type=design&node-id=605%3A344&mode=design&t=Mne6rFKVXNd21MHM-1) -->




