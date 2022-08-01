
const { Members, Role_ong, sequelize } = require('../models')

const updateMember = async (newContent) => {
    const memberUpdated = await Members.update(newContent,{where:{id: newContent.id}})
    if (memberUpdated[0]===0){
        
        return null
    }
    return "Member updated"
}

const getAllMembers = async(page,limit)=>{
    const offset = page*limit;
   const {count, rows }= await Members.findAndCountAll({
        offset : offset,
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
    updateMember,
    postMember 
}