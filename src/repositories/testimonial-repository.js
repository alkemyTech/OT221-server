const { Testimonial } = require('../models')


const getAllTestimonials = async (limit , page) => {


    const offset = (page-1) * limit;
    const { count, rows } = await Testimonial.findAndCountAll({
        offset: offset,
        limit: limit,
        order: [
            ['updatedAt', 'DESC'],
        ]
    },
    
    )
        if(count === 0 ){
            return null
        }

            let pageCount =  Math.trunc(count / limit) 
            count % limit > 0 && ( pageCount += 1 )

            

    return { total_testimonials: count, testimonials: rows , pageCount}
}

const saveTestimonial = async (testimonial) => {
    const testimonialStored =  Testimonial.build(testimonial,{isNewRecord: !testimonial.id})
    await testimonialStored.save();
    return testimonialStored
}







const deleteTestimonial = async (id) =>{
  const testimonialInstance =  await Testimonial.destroy({ where: { id: id } })

  if ( testimonialInstance === 0 ){
    return null
}

  
  return testimonialInstance
}

const getTestimonialByUserId = async (id)=>{
    const testimonialInstance =  await Testimonial.findOne({ where: { userId: id } })
    return testimonialInstance
}
module.exports= {
    getAllTestimonials,
    deleteTestimonial,
    saveTestimonial,
    getTestimonialByUserId

}