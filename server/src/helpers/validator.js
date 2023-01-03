const validateObjectProperties = (launch, res) => {

    requiredNonNullObject(launch, res);

    const keys = Object.keys(launch)
    keys.forEach(key => {
        if (!launch[key] || !isEmptyString(launch[key])) {
            return res.status(406).json({
                error: `The ${key} is required`
            })
        }
    })
}

const validateDate = (date, res) => {
    const launchDate = new Date(date)

    if(launchDate.toDateString()==='Invalid Date' || !launchDate){
        return res.status(406).json({
            error: `${date} is not a valid date format. Format 01/09/2030`
        })
    }

    return launchDate
}


const isEmptyString=(str='')=>{
    return str.trim().length>0
}

const requiredNonNullObject = (object, res) => {
    if (!object) return res.status(204).json({
        error: 'Required non null object'
    })
}


module.exports = {
    validateObjectProperties,
    validateDate
}