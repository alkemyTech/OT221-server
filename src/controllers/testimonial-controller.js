const testimonialService = require('../services/testimonial-service')

const fileServices = require("../services/fileServices");


const getAllTestimonials = async (req, res, next) => {

    let page = Number(req.params.page)
    let limit = Number(req.params.limit)
    try {

        const allTestimonials = await testimonialService.getAllTestimonials(limit, page)

        res.json(allTestimonials)
    }
    catch (err) {
        
        next(err)
    }

}

const deleteTestimonial = async (req, res) =>{

    const testimonialId = Number(req.params.id)

    try {
        const deletedTestimonial = await testimonialService.deleteTestimonial(testimonialId)

        res.json({ deletedTestimonial: deletedTestimonial })

    } catch (err) {

        res.status(500).json({err: err.message})
    }
}  
const createNewTestimonial = async (req, res) => {
    try {
        console.log(req)
        const image = await fileServices.checkFileAndUpload(req.file)
        const testimonialSaved = await testimonialService.createTestimonial({
            ...req.body,
            image
        })
        res.status(201).json(testimonialSaved)
    } catch (err) {
        res.status(500).json(err);
    }
}

module.exports = {
    getAllTestimonials,
    deleteTestimonial,
    createNewTestimonial
}