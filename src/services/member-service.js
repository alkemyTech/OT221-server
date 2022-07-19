const memberRepository = require('../repositories/member-repository');
const memberRepository = require("../repositories/member-repository")

const createMember = async (member, imagePath) => {
    const memberStored = await memberRepository.postMember(member, imagePath);
    return memberStored;
}

const getListAllMembers= async(query)=>{
    const page = Number(query.page) -1 ;
    const limit = Number(query.limit) || 10
    const members= await memberRepository.getAllMembers(page,limit)
    return members
}

module.exports={
    getListAllMembers,
    createMember
}
