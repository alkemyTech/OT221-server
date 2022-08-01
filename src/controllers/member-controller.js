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

const getListMember = async (req, res) => {
    try {
        const { query } = req;

        const members = await memberService.getListAllMembers(query)

        res.status(200).json(members)
const memberService = require("../services/member-service")
const fileServices = require("../services/fileServices");

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
    getListMember
}