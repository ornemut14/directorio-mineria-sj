import { create } from 'zustand';
import { createJSONStorage, persist } from 'zustand/middleware';

/**
 * @typedef Store
 * @property {boolean} isLoggedIn
 * @property {string} categorypersist
 * @property {import('./types').UserData | null} user
 * @property {(userData: Partial<import('./types').UserData>) => void} setUser
 * @property {(status: boolean) => void} setIsLoggedIn
 * @property {(status: string) => void} setCategorypersist
 * @property {() => void} doLogout
 */

/**
 * @type {import("zustand").UseBoundStore<import("zustand").StoreApi<Store>>}
 */
export const useStore = create(
	persist(
		(set) => ({
			isLoggedIn: false,
			user: null,
			categorypersist: null,
			setUser: (userData) => set((state) => ({ user: { ...state.user, ...userData } })),
			setIsLoggedIn: (status) => set(() => ({ isLoggedIn: status })),
			setCategorypersist: (status) => set(() => ({categorypersist: status})),
			doLogout: () => set(() => ({ isLoggedIn: false, user: null })),
		}),
		{ name: 'clinic-storage', storage: createJSONStorage(() => sessionStorage) }
	)
);