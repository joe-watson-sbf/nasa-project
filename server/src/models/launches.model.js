const launches = new Map();

const launch = {
    flightNumber: 100,
    mission: 'Kepler Exploration X',
    rocket: 'Explorer IS1',
    launchDate: new Date('November 7, 2050'),
    destination: 'Kepler-442 b',
    customer: ['SBF', 'NASA'],
    upcomig: true,
    success: true
}

launches.set(launch.flightNumber, launch);

function getAllLunches() {
    return Array.from(launches.values())
}

function addNewLaunch(launch) {
    const id = 100 + launches.size + 1
    const data = {...launch, flightNumber: id, customer: ['SBF', 'NASA'], upcomig: true, success: true}
    launches.set(id, data)

    return data
}

module.exports = {
    getAllLunches,
    addNewLaunch,
}