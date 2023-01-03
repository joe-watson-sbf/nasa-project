const express = require('express')
const {httGetAllLunches, httAddNewLaunch} = require("./launches.controller");

const launchesRouter = express.Router()

launchesRouter.get('/', httGetAllLunches);
launchesRouter.post('/', httAddNewLaunch);

module.exports = launchesRouter