const { Category } = require("../models");

const deleteCategoryById = async (id) => {
    const deletedCategory = await Category.destroy({ where: { id: id } });
    return deletedCategory;
};

const saveCategory = async (newCategory) => {
    // if newCategory id is not null, it will update the category. If id is null it will create a new register

    // if newCategory id is not null, it will update the category. If id is null it will create a new register

    const instancedCategory = Category.build(newCategory, { isNewRecord: !newCategory.id })

    await instancedCategory.save()

    return instancedCategory
}

const listAllCategory = async (page, limit) => {
    const offset = page * limit
    const { count, rows } = await Category.findAndCountAll({
        attributes: ['id', 'name'],
        raw: true,
        offset: offset,
        limit
    })
    return {
        total_categories: count,
        current_page: page + 1,
        total_pages: Math.ceil(count / limit),
        categories: rows
    }
}


const updateCategory = async (id, body) => {
    const category = await Category.update(
        {
            ...body
        },
        {
            where: {
                id: id
            },
        })
    return category
}


module.exports = {
    saveCategory,
    listAllCategory,
    updateCategory,
    deleteCategoryById
}

