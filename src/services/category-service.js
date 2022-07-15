const { CouldNotSaveCategoryError } = require('../errors/category-errors')
const categoryRepository = require('../repositories/category-repository')


const createCategory = async (newCategory) => {

    const savedCategory = await categoryRepository.saveCategory(newCategory)

    if(!savedCategory){
        throw new CouldNotSaveCategoryError(newCategory.name)
    }

    return savedCategory

}


const getAllCategories = async (query)=>{
const page = query.page -1
const limit = query.limit || 10
const categories =  await categoryRepository.listAllCategory(page,limit)
return categories
}
module.exports={
    getAllCategories,
    createCategory,
}
