import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "../config/firebaseConfig"
import useUserContext from './useUserContext'

const useAuthStateChange = () => {
    const { user, setUser } = useUserContext();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser({
                    uid: user.uid,
                    email: user.email,
                    username: user.displayName,
                    photoURL: null || user.photoURL,
                });
            } else {
                setUser(null);
            }
        });
    }, [user]);

    return [user];
}

export default useAuthStateChange