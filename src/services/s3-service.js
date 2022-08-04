const path = require('path')
const fs = require('fs')
require('dotenv').config({ path: path.resolve(__dirname, '..', '.env') })
const S3 = require('aws-sdk/clients/s3')

const bucketName = process.env.AWS_BUCKET_NAME
const accessKeyId = process.env.AWS_ACCESS_KEY
const secretAccessKey = process.env.AWS_SECRET_KEY

const s3 = new S3({
    accessKeyId,
    secretAccessKey
})

//uploads a file to s3
const uploadFile = (file) => {
    const fileStream = fs.createReadStream(file.path)
    const uploadParams = {
        Bucket: bucketName,
        Body: fileStream,
        Key: file.filename
    }
    return s3.upload(uploadParams).promise()
}

//downloads a file from s3
const getFileStream = (fileKey) => {
    const downloadParams = {
        Key: fileKey,
        Bucket: bucketName
    }
    return s3.getObject(downloadParams).createReadStream()
}

const deleteFileFromS3 =  async(fileKey) =>{
    const deleteParams = {
        Key:fileKey,
        Bucket: bucketName
    };
    console.log("s3",fileKey)
    return await s3.deleteObject(deleteParams).promise();
};



module.exports = {
    uploadFile,
    getFileStream,
    deleteFileFromS3
}