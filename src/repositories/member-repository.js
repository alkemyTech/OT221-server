
const { Members, Role_ong, sequelize } = require('../models')

const getAllMembers = async (page, limit) => {
    const offset = page * limit;

    const { count, rows } = await Members.findAndCountAll({
        include: [{
            model: Role_ong,
            attributes: ['role_ong']
        }],
        offset: offset,
        limit: limit
    })
    return { total_members: count, total_pages: Math.ceil(count / limit), current_page: page + 1, members: rows }
}

const postMember = async (member) => {
    const memberStored = await Members.create(member)
    return memberStored
}
module.exports={
    getAllMembers,
    postMember
}