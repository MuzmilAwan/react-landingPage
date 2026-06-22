import { create } from 'zustand';

const useStore = create(function (set) {
  return {
    userData: null,
    isLoading: false,
    error: null,

    setLoading: function (status) {
      return set({ isLoading: status });
    },

    setError: function (errMessage) {
      return set({ error: errMessage });
    },

    setUserData: function (data) {
      return set({ userData: data, isLoading: false, error: null });
    },

  };
});

export default useStore;