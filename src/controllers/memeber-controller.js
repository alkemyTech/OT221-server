const memberService = require("../services/member-service")

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

module.exports ={
    getListMember
}