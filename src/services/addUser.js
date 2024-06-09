import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";

const addUser = async (uid, username, email) => {
    try{
        const userRef = doc(db, 'users', uid);
        const user = await getDoc(userRef);
        if (user.exists()){
            return;
        }
        await setDoc(userRef, {
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