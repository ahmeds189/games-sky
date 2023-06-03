import useGames from '../hooks/useGames'

export default function Games() {
	const { data, isLoading } = useGames()

	if (isLoading) return <h1>Loading...</h1>

	return <div>{data.results.map((game) => game.name)}</div>
}
