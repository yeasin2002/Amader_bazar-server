const express = require(`express`);
const dashboardRouter = express.Router();

const { getUser } = require(`../controller/dashboardController`);
dashboardRouter.get(`/`, getUser);

module.exports = dashboardRouter;
