import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

const addUser = async (uid, username, email) => {
    try{
        if (!uid){
            uid = uuidv4();
        }
        const userRef = doc(db, 'users', uid);
        const user = await getDoc(userRef);
        if (user.exists()){
            return;
        }
        await setDoc(userRef, {
            id: uid,
            username: username,
            email: email,
            liked_songs: [],
            createdAt: new Date()
        })
        return;
    } catch (error) {
        return Promise.reject('An error occured');
    }
}

export default addUser