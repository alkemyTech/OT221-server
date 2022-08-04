const fs = require("fs");
const util = require("util");
const s3Service = require("./s3-service");
const unlinkFile = util.promisify(fs.unlink);

const deleteTempFile = async (path) => {
  unlinkFile(path);
  return console.log("File deleted")
};

//This will return the Key to the aws Bucket in case there's a file, otherwise it will return null
const checkFileAndUpload = async (file) => {
  console.log(file)
  if (file) {
    const imageUploadResult = await s3Service.uploadFile(file)
    //Deleting image from server once it has been uploaded to aws
    deleteTempFile(file.path);
    return imageUploadResult.Key;
  };
  return null
}

//Deletes file from s3 when needed, currently it seems we dont have permission to delete things from the bucket
const deleteFileFromS3 = async (key) => {
  if  (key) {
    const deleteImageMember = await s3Service.deleteFileFromS3(key) 
    console.log(deleteImageMember)
  }  
}

module.exports = {
  deleteTempFile,
  checkFileAndUpload,
  deleteFileFromS3
};
