import { set } from 'astro:schema';
import { create } from 'zustand';

export const useMonkeyStore = create((set) => ({
    count: 5,
    removeMonkey: () => set((s) => ({ count:s.count - 1 })),
    reset: () => set({ count: 5 }),
}));