export const UPLOAD_IMAGE = 'uploadImage';

var nextUploadedImageId = 0;

// set the uploaded image
export function uploadImage(data) {
    return {
        type: UPLOAD_IMAGE,
        uri: data,
        id: nextUploadedImageId++
    };
}

