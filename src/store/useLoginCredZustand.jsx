import { create } from "zustand";

const useLoginCredZustand = create((set) => ({
  isAuthenticated: false,
  firstName: "",
  toggleAuthentication: () =>
    set((state) => ({ isAuthenticated: !state.isAuthenticated })),
  toggleAuthToTrue: () => {
    set(() => ({ isAuthenticated: true }));
  },
  // toggleFirstName: (firstName) => set(() => ({ firstName: firstName })),
}));

export default useLoginCredZustand;
