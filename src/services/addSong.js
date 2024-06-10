import { doc, setDoc, getDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const addSong = async (title, author, song, image, user) => {
    try {
        const songRef = doc(db, 'songs', uuidv4());
        await setDoc(songRef, {
            title,
            author,
            song,
            image,
            user
        });
        return songRef.id;

    } catch (error) {
        return Promise.reject('An error occured');
    }
}

export const getSong = async (id) => {
    try {
        const songRef = doc(db, 'songs', id);
        const song = await getDoc(songRef);
        return song.data();
    } catch (error) {
        return Promise.reject('An error occured');
    }
}
