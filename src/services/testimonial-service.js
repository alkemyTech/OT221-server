const { TestimonialsTableEmptyError } = require('../errors/testimonial-errors')
const testimonialRepository = require('../repositories/testimonial-repository')


const getAllTestimonials = async (limit,page) => {

   
    const testimonialsForPage = await testimonialRepository.getAllTestimonials(limit,page)
   
    if( !testimonialsForPage ) {
        throw new TestimonialsTableEmptyError()
    }
    return testimonialsForPage
}

const deleteTestimonial = async (testimonialId) =>{

    const deletedTestimonial = await testimonialRepository.deleteTestimonial(testimonialId)

    if(!deletedTestimonial){
        throw new Error('El testimonio que desea eliminar no existe')
    }

    return deletedTestimonial
}
const createTestimonial = async( testimonial ) =>{
    const testimonialStored = await testimonialRepository.createTestimony(testimonial);
    return testimonialStored;
  }

  const updateTestimony = async (newContent) => {
    const testimonyUpdated = await testimonialRepository.updateTestimony(newContent);
    if (!testimonyUpdated) {
        throw new Error('El testimonio que desea modificar no existe.');
    }
    return testimonyUpdated;
}


module.exports= {
    getAllTestimonials,
    updateTestimony,
    deleteTestimonial,
    createTestimonial
}