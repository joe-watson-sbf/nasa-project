const {getAllLunches, addNewLaunch} = require('../../models/launches.model')
const {validateObjectProperties, validateDate} = require("../../helpers/validator");

function httGetAllLunches(req, res) {
    return res.json(getAllLunches());
}

function httAddNewLaunch(req, res) {
    const launch = req.body;

    validateObjectProperties(launch, res)



    launch.launchDate =  validateDate(launch.launchDate, res)

    const data = addNewLaunch(launch)

    return res.status(201).json(data);
}


module.exports = {
    httGetAllLunches,
    httAddNewLaunch
}