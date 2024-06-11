import { collection, query, getDocs, where, and, updateDoc } from "firebase/firestore";
import { db } from "../config/firebaseConfig";
import { getSong } from "./addSong";

export const checkLikedSongs = async (userID, songID) => {
    try {
        const songsRef = collection(db, 'users');
        const qry = query(songsRef, and(
            where('id', '==', userID),
            where('liked_songs', 'array-contains', songID)
        ));
        const likedSongsSnapshot = await getDocs(qry);
        return likedSongsSnapshot;
    }
    catch (error) {
        return Promise.reject('An error occured');
    }
}

export const addLikedSong = async (userID, songID) => {
    try {
        const songsRef = collection(db, 'users');
        const qry = query(songsRef, where('id', '==', userID));
        const likedSongsSnapshot = await getDocs(qry);
        likedSongsSnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                liked_songs: [...doc.data().liked_songs, songID]
            });
        });
    }
    catch (error) {
        return Promise.reject('An error occured');
    }
}

export const removeLikedSong = async (userID, songID) => {
    try {
        const songsRef = collection(db, 'users');
        const qry = query(songsRef, where('id', '==', userID));
        const likedSongsSnapshot = await getDocs(qry);
        likedSongsSnapshot.forEach(async (doc) => {
            await updateDoc(doc.ref, {
                liked_songs: doc.data().liked_songs.filter((id) => id !== songID)
            });
        });
    }
    catch (error) {
        console.log(error);
        return Promise.reject('An error occured');
    }
}

export const getLikedSongs = async (userID) => {
    try {
        const usersRef = collection(db, 'users');
        const qry = query(usersRef, where('id', '==', userID));
        const likedSongsSnapshot = await getDocs(qry);
        let likedSongs = [];
        likedSongsSnapshot.forEach((doc) => {
            doc.data().liked_songs.forEach(async (songID) => {
                const song = await getSong(songID);
                likedSongs.push(song);
            });
        });
        return likedSongs;
    }
    catch (error) {
        return Promise.reject('An error occured');
    }
}