import { create } from "zustand";

const useUploadModal = create((set) => ({
    isOpen: false,
    open: () => set({ isOpen: true }),
    close: () => set({ isOpen: false }),
}));

export default useUploadModal;