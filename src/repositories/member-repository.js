const { Members } = require('../models');

const postMember = async (member, imagePath) => {
    member.image = imagePath
    const memberStored = await Members.create(member)
    return memberStored
}

module.exports = {
    postMember
}