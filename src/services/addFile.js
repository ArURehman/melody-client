import { storage } from "../config/firebaseConfig"
import { v4 as uuidv4 } from "uuid"
import { ref, getDownloadURL, uploadBytes } from "firebase/storage";
import toast from "react-hot-toast";

const uploadFile = async (file, path) => {
    try {
        const uuid = uuidv4();
        const storageRef = ref(storage, `${path}/${uuid}`);
        const snapshot = await uploadBytes(storageRef, file);
        const downloadURL = await getDownloadURL(snapshot.ref);
        return downloadURL;
        
    } catch (error) {
        toast.error('An error occurred. Please try again', {
            duration: 4000,
            position: 'bottom-right',
            className: 'bg-red-500 text-white font-sans font-semibold border border-red-600 rounded-md p-2 shadow-lg'
        });
        return Promise.reject(error);
    }
}

export default uploadFile;