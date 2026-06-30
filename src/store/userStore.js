
import { create } from "zustand";

const useStore = create((set) => ({

    userData: null,
    isLoading: false,
    isRestoring: true,
    error: null,

    setLoading: (status) => set({ isLoading: status }),
    setError: (message) => set({ error: message, isLoading: false }),
    setUserData: (data) => set({ userData: data, isLoading: false, error: null }),
    clearUser: () => set({ userData: null, isLoading: false, error: null }),
    setRestoring: (status) => set({ isRestoring: status })

}))

export default useStore;