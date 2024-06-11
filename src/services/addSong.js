import { doc, setDoc, getDoc, collection, query, orderBy, getDocs, where } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { v4 as uuidv4 } from "uuid";

export const addSong = async (title, author, song, image, user) => {
    try {
        const songRef = doc(db, 'songs', uuidv4());
        await setDoc(songRef, {
            id: songRef.id,
            title,
            author,
            song,
            image,
            user,
            created_at: new Date()
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

export const getSongs = async () => {
    try {
        const songs = [];
        const songsRef = collection(db, 'songs');
        const qry = query(songsRef, orderBy('created_at', 'desc'));
        const songsSnapshot = await getDocs(qry);
        songsSnapshot.forEach(song => {
            songs.push(song.data());
        });
        return songs;
    } catch (error) {
        return Promise.reject('An error occured');
    }
}

export const getUserSongs = async (user) => {
    try {
        const songs = [];
        const songsRef = collection(db, 'songs');
        const qry = query(songsRef, where('user', '==', user), orderBy('created_at', 'desc'))
        const songsSnapshot = await getDocs(qry);
        songsSnapshot.forEach(song => {
            songs.push(song.data());
        });
        return songs;
    } catch (error) {
        return Promise.reject('An error occured');
    }
}

export const getSongByTitle = async (title) => {
    try {
        const songs = [];
        if (title === '') {
            const allSongs = await getSongs();
            return allSongs;
        }
        const songsRef = collection(db, 'songs');
        const qry = query(songsRef, where('title', '>=', title), orderBy('created_at', 'desc'));
        const songsSnapshot = await getDocs(qry);
        songsSnapshot.forEach(song => {
            songs.push(song.data());
        });
        return songs;
    } catch (error) {
        return Promise.reject(error);
    }
}