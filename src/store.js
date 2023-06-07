import { create } from 'zustand'

const useGameQueryStore = create((set) => ({
	gameQuery: {},
	setGenreId: (genreId) => set((state) => ({ gameQuery: { ...state.gameQuery, genreId } })),
}))

export default useGameQueryStore
