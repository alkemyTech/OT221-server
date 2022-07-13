const memberService = require('../services/member-service');
const fileServices = require('../services/fileServices');

const createNewMember = async (req, res, next) => {
    try {
        const image = await fileServices.checkFileAndUpload(req.file)
        const query = req.body;
        console.log(image);
        const member = await memberService.createMember(
        query,
        image
        );
        res.status(200).json(member);
    } catch (err) {
        console.log(err);
        res.status(500).json(err);
    }
}

module.exports = {
    createNewMember
}
