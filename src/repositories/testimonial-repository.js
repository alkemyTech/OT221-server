const { Testimonial } = require('../models')


const getAllTestimonials = async (limit , page) => {


    const offset = page * limit;

    const { count, rows } = await Testimonial.findAndCountAll({
        offset: offset,
        limit: limit,
    })
        if(count === 0 ){
            return null
        }

    return { total_testimonials: count, testimonials: rows }
}

const createTestimony = async (testimony) => {
    const testimonyStored = await Testimonial.create(testimony)
    return testimonyStored
}


const deleteTestimonial = async (id) =>{
  const testimonialInstance =  await Testimonial.findOne({ where: { id: id } })

  if ( !testimonialInstance){
    return null
}
  await testimonialInstance.destroy()
  
  return testimonialInstance
}


module.exports= {
    getAllTestimonials,
    deleteTestimonial,
    createTestimony

}