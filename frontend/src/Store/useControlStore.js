import { create } from "zustand";

const useControlStore = create((set) => ({
  totalWinners: Number(localStorage.getItem("totalWinners")) || 1,
  totalPlayers: Number(localStorage.getItem("totalPlayers")) || 8,

  setTotalWinners: (num) => set({ totalWinners: num }),

  addPlayer: (num) =>
    set((state) => ({
      totalPlayers: state.totalPlayers + num,
    })),

  minusPlayer: (num) =>
    set((state) => ({ totalPlayers: state.totalPlayers - num })),
}));

export default useControlStore;
