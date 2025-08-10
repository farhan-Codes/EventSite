import cloudinary from 'cloudinary';

cloudinary.config({
    cloud_name:process.env.CLOUD_NAME,
    api_key:process.env.CLOUD_API,
    api_secret:process.env.CLOUD_API_SECRET,
}) 

export async function getImageUrl(file,id) {
    const result = await cloudinary.v2.uploader.upload(file,{public_id:id,allowed_formats:['png','jpg','jpeg']});
    return result.secure_url;
}
