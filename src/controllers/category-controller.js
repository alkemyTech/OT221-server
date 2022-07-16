const categoryService = require('../services/category-service')
const { validationResult } = require('express-validator')

const createCategory = async (req, res) => {

    const { body } = req

    const errorsRegister = validationResult(req);

    try {

        if (!errorsRegister.isEmpty()) {
            res.status(406).json(errorsRegister.mapped())
        } else {
            const newCategory = await categoryService.createCategory({ ...body })

            res.json({ categoryCreated: newCategory })
        }



    } catch (err) {
        res.status(400)
        res.json({ error: err.message })
    }
}


const getListCategory = async (req, res) => {
    try {
        const { query } = req
        const categories = await categoryService.getAllCategories(query)
        res.status(200).json(categories)
    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}

const updateCategory = async (req, res) => {
    try {
        const { body } = req
        const id = Number(req.params.id);
        const checkField = validationResult(req);
        if (!checkField.isEmpty()) {
            res.status(406).json(checkField.mapped())
        } else {
            const updatedCategory = await categoryService.updateCategory(id, body)
            res.status(200).json(updatedCategory)
        }

    } catch (err) {
        console.log(err)
        res.status(500).json({ error: err.message })
    }
}

module.exports = {
    createCategory,
    getListCategory,
    updateCategory
}