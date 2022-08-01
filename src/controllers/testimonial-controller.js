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
        console.log(err)
        next(err)
    }

}

const deleteTestimonial = async (req, res, next) => {

    const testimonialId = Number(req.params.id)

    try {
        const deletedTestimonial = await testimonialService.deleteTestimonial(testimonialId)

        res.json({ deletedTestimonial: deletedTestimonial })

    } catch (err) {

        next(err)
    }
}
const createNewTestimonial = async (req, res, next) => {
 
    try {
        const testimonialSaved = await testimonialService.createTestimonial({
            ...req.body,
        })
        res.status(201).json(testimonialSaved)
    } catch (err) {

        next(err);
    }
}

const updateTestimony = async (req,res,next) => {
    try {
        const id = req.params.id;
        const image = await fileServices.checkFileAndUpload(req.file);
        const testimonyUpdated = await testimonialService.updateTestimony({
            ...req.body,
            image,
            id
        })
        res.status(200).json(testimonyUpdated);
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}


module.exports = {
    getAllTestimonials,
    updateTestimony,
    deleteTestimonial,
    createNewTestimonial
}