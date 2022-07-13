const memberRepository = require('../repositories/member-repository');

const createMember = async (member, imagePath) => {
    const memberStored = await memberRepository.postMember(member, imagePath);
    return memberStored;
}

module.exports = {
    createMember
}
