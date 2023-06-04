import { useQuery } from '@tanstack/react-query'
import axios from 'axios'

const getGames = async () => {
	const { data } = await axios.get(
		`https://api.rawg.io/api/games?key=${import.meta.env.VITE_API_KEY}`
	)
	return data.results
}

export default function useGames() {
	return useQuery({
		queryKey: ['games'],
		queryFn: getGames,
	})
}
