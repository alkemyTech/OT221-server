
const memberService = require('../services/member-service');
const fileServices = require('../services/fileServices');
const { uploadFile } = require('../services/s3-service');

const createNewMember = async (req, res, next) => {
    try {
        const { image, ...rest } = req.body;
        const { key } = await uploadFile(req.files.file);
        const memberSaved = await memberService.createMember({
            ...rest,
            image: key
        })
        res.status(201).json({
            status: true,
            member: memberSaved
        })
    } catch (error) {
        console.log(error)
    }
}


const deleteMember = async (req, res, next) => {
  try {
    const id = req.params.id;
    const memberDeleted = await memberService.deleteMember(id);
    //Delete member image from s3, currently we don't have permission to delete files from the bucket (uncomment when we do)
    //const image = await fileServices.deleteFileFromS3(memberDeleted.key)
    //console.log(image)
    res.status(201).json({message: "Miembro eliminado exitosamente", userDeleted:memberDeleted});
  } catch (err) {
    res.status(500).json(err);
  }
};


const updateMember = async (req, res, next) => {
    try {
        const id = req.params.id
        const image = await fileServices.checkFileAndUpload(req.file)
        const memberSaved = await memberService.updateMember({
            ...req.body,
            image,
            id
        })
        res.status(201).json(memberSaved)
    } catch (err) {
        res.status(500).json(err);
    }
}

const getListMember = async (req,res)=>{
    try {
    const { query } = req;
        
     const members= await memberService.getListAllMembers(query)

     res.status(200).json(members) 
     
    } catch (err) {
        res.status(500).json(err.message)
        console.log(err)
    }
}

module.exports = {
    createNewMember,
    updateMember,
    getListMember,
    deleteMember
}

