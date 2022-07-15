const categoryService = require('../services/category-service')
const { validationResult } = require('express-validator')




const createCategory = async (req, res) =>{

    const { body } = req

    const errorsRegister = validationResult(req);
    
    try {
  
        if (!errorsRegister.isEmpty()) {
            res.status(406).json(errorsRegister.mapped()) 
        } else {
            const newCategory =  await categoryService.createCategory( { ...body} )

            res.json({categoryCreated: newCategory})
        }
    

   
    } catch (err) {
        res.status(400)
        res.json({error: err.message})
    }
}





module.exports = {
    createCategory,
}