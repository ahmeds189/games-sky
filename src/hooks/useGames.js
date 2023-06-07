import { useQuery } from '@tanstack/react-query'
import apiClient from '../utils/apiClient'

export default function useGames(gameQuery) {
	return useQuery({
		queryKey: ['games', gameQuery],
		queryFn: () => apiClient.get('/games').then((res) => res.data.results),
	})
}
