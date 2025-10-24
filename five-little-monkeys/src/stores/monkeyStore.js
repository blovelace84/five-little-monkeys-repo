import { create } from 'zustand';

export const useMonkeyStore = create((set) => ({
    monkeyCount: 5,
    decreaseMonkey: () => set((state) => ({ monkeyCount: Math.max(0, state.monkeyCount - 1) })),
    resetMonkeys: () => set({ monkeyCount: 5 }),
}));