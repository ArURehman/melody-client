import { create } from 'zustand';

const usePlayer = create((set) => ({
    songs: [],
    activeSong: undefined,
    setActiveSong: (song) => set({ activeSong: song }),
    setSongs: (songs) => set({ songs: songs }),
    reset: () => set({ songs: [], activeSong: undefined }),
}));

export default usePlayer;
