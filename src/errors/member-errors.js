class MemberNotFoundError extends Error {

   

    constructor( id = null ){
        super()
        this.name = this.constructor.name
        this.message = `El miembro con id: ${id} no existe!!!`
        

        this.code = 400
    }
  
}

module.exports = {
    MemberNotFoundError
 
}
