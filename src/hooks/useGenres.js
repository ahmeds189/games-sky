import { useQuery } from '@tanstack/react-query'
import apiClient from '../utils/apiClient'

export default function useGenres() {
	return useQuery({
		queryKey: ['genres'],
		queryFn: () => apiClient.get('/genres').then((res) => res.data.results),
		staleTime: 24 * 60 * 60 * 1000, // 24hours
	})
}
