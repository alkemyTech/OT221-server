const { Members } = require('../models');

const postMember = async (member, imagePath) => {
    member.image = imagePath
    const memberStored = await Members.create(member)
    return memberStored
}

const getAllMembers = async(page,limit)=>{
    const offset = page*limit;
   const {count, rows }= await Members.findAndCountAll({
        offset : offset,
        limit: limit
   })
   return {total_members : count , total_pages: Math.ceil(count/limit), current_page:page+1, members:rows }
}
module.exports={
    getAllMembers,
    postMember
}