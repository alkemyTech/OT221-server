const activitiesService = require("../services/activities-service");
const fileServices = require("../services/fileServices");

const getAllActivity = async (req, res, next) => {
    try {
        const { query } = req
        const page = query.page - 1;
        const allActivities = await activitiesService.getAllActivities(page)
        res.status(200).json(allActivities)
    }
    catch (err) {
     next(err)
    }
  }
const createNewActivity = async (req, res, next) => {
  try {
    const image = await fileServices.checkFileAndUpload(req.file)
    const query = req.body;
    console.log(image);
    const activity = await activitiesService.createActivity(
      query,
      image
    );
    res.status(200).json(activity);
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
};

const updateActivity =async (req, res) => {
    try {
        const data=req.body
        const id=req.params.id
        const updateActivities=await activitiesService.updateActivities(id,data)
        res.status(200).json({updateActivities})
    }
    catch (err) {
        console.log(err)
        res.status(500).json(err)
    }
}

module.exports = {
  getAllActivity,
  updateActivity,
  createNewActivity,
};
