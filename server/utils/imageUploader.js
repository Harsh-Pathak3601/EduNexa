const cloudinary = require("cloudinary").v2;

exports.uploadImageToCloudinary = async (file, folder, height, quality) => {
  const options = { folder };
  if (height) {
    options.height = height;
  }
  // Cloudinary quality must be a percentage between 1 and 100, or "auto"
  if (quality && quality >= 1 && quality <= 100) {
    options.quality = quality;
  }
  options.resource_type = "auto";

  const filePath = file.tempFilePath || file.path;
  if (filePath) {
    return await cloudinary.uploader.upload(filePath, options);
  }

  // Fallback if express-fileupload stored in memory buffer (file.data)
  if (file.data) {
    return new Promise((resolve, reject) => {
      const uploadStream = cloudinary.uploader.upload_stream(
        options,
        (error, result) => {
          if (error) return reject(error);
          resolve(result);
        }
      );
      uploadStream.end(file.data);
    });
  }

  throw new Error("No file path or buffer found for upload");
};
