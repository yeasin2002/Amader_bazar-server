import express from "express";
import {
    banOrUnbannedUser,
    deleteSingleCategory,
    deleteSingleProduct,
    deleteSingleUser,
    getAllProduct,
    getAllUser,
    getSingleProduct,
    updateSingleCategory,
    updateSingleProduct,
    updatedAdminRole,
} from "../controller/dashboard";
export const dashboardRouter = express.Router();

//? manage Product
dashboardRouter.route("/product").get(getAllProduct);
dashboardRouter
    .route("/product/:id")
    .get(getSingleProduct)
    .delete(deleteSingleProduct)
    .patch(updateSingleProduct);

//? manage User
dashboardRouter.route("/user").get(getAllUser);
dashboardRouter.put("/ban-or-unbanned", banOrUnbannedUser);
dashboardRouter
    .route("/user/:id")
    .get(getAllUser)
    .delete(deleteSingleUser)
    .patch(updatedAdminRole);

//? manage category
dashboardRouter.route("/category").delete(deleteSingleCategory);
dashboardRouter
    .route("/category/:id")
    .delete(deleteSingleCategory)
    .patch(updateSingleCategory);

/*
-   GET: all Product
-   GET: single Product
-   PUT: update Product
-   DELETE: delete Product

-   DELETE: delete Product Category
-   PUT: update Product Category 

-   DELETE: delete User
-   PUT: BAN or UNBANNED User
-   PUT: update role - admin to user or user to admin

*/
