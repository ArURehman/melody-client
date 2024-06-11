import useAuthModal from "./useAuthModal";
import usePlayer from "./usePlayer"
import useUserContext from "./useUserContext";

const useOnPlay = (songs) => {

    const player = usePlayer();
    const authModal = useAuthModal();
    const { user } = useUserContext();

    const onPlay = (song) => {
        if (!user) {
            authModal.open();
            return;
        }
        if (!song) return;

        player.setActiveSong(song);
        player.setSongs(songs);
    }

    return onPlay;
}

export default useOnPlay;