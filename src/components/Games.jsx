import useGames from '../hooks/useGames'
import { SkeletonCard, GameCard } from './'

export default function Games() {
	const { data, isLoading, isError, error } = useGames()

	if (isError) return <h1>{error.message}</h1>

	if (isLoading)
		return Array(10)
			.fill(0)
			.map((_, i) => <SkeletonCard key={i} />)

	return data.map((game) => <GameCard data={game} key={game.id} />)
}
