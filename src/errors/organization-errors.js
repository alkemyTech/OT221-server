

class OrganizationNotFoundError extends Error {

    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'La organizacion no existe'
        this.code = 400
    }
}

class InvalidOrganizationIdParamError extends Error {

    constructor(){
        super()
        this.name = this.constructor.name
        this.message = 'El parámetro id en la url no es un número'
        this.code = 400
    }
}


module.exports = {
    OrganizationNotFoundError,
    InvalidOrganizationIdParamError
}