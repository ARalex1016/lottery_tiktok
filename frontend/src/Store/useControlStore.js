import { create } from "zustand";

const useControlStore = create((set) => ({
  totalWinners: 1,
  totalPlayers: 8,
  setTotalWinners: (num) => set({ totalWinners: num }),
  addPlayer: (num) =>
    set((state) => ({
      totalPlayers: state.totalPlayers + num,
    })),
  minusPlayer: (num) =>
    set((state) => ({ totalPlayers: state.totalPlayers - num })),
}));

export default useControlStore;
