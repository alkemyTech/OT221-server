const { Category } = require('../models')




const saveCategory = async (newCategory) => {

    // if newCategory id is not null, it will update the category. If id is null it will create a new register

    const instancedCategory = Category.build( newCategory,{ isNewRecord: !newCategory.id } )

    await instancedCategory.save()

    return instancedCategory
}




const listAllCategory = async(page , limit)=>{
    const offset = page*limit
    const {count, rows} =await Category.findAndCountAll({
        attributes: ['name'],
        raw:true,        
        offset:offset,
        limit 
    })
  return { total_categories:count , current_page:page+1 , total_pages:Math.ceil(count/limit) , categories:rows}
}






module.exports = {
    saveCategory,
    listAllCategory
}

