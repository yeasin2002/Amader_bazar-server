const express = require(`express`);
const userRouter = express.Router();

const {
    getAllUserInfo,
    getSingleUser,
    deleteSingleUser,
    banUserControl,
} = require(`$controller/UserControllers`);

const { decryptToken, isAdmin } = require(`$middleware`);

//* routes
userRouter.get(`/`, getAllUserInfo);
userRouter.get(`/:id`, getSingleUser);
userRouter.delete(`/:id`, deleteSingleUser);
userRouter.patch(`/ban/:id`, decryptToken, isAdmin, banUserControl);

module.exports = userRouter;
//
