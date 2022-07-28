const { InvalidOrganizationIdParamError } = require('../errors/organization-errors')
const organizationService = require('../services/organization-service')

const getPublicData = async (req, res, next) => {
    try {
       if( /^[a-zA-Z]+$/.test(req.params.id) || !req.params.id){
            throw new InvalidOrganizationIdParamError()
       }
        const organization = await organizationService.getOrganizationById(req.params.id)
        res.json({
            organization
        })
    } catch (err) {
        next(err)
    }
}

module.exports={
    getPublicData
}