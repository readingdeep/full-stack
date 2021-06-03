const cloudinary = require('cloudinary').v2;

cloudinary.config({
    cloud_name: 'djlrka6wx',
    api_key: '741972222138137',
    api_secret: 'r_zdpdCRajiYn7zLeM4RJVQdgiY'
});

function uploadToCloudinary(filePath) {
    return new Promise((resolve, reject) => {
      cloudinary.uploader.upload(filePath, (error, result) => {
        if (error) reject(error);
        else resolve(result);
      });
    })
}
exports.uploadToCloudinary = uploadToCloudinary;