import useGames from '../hooks/useGames'
import { SimpleGrid } from '@mantine/core'
import { SkeletonGameCard, GameCard } from './'

export default function Games() {
	const { data, isLoading, isError, error } = useGames()

	if (isError) return <h1>{error.message}</h1>

	return (
		<SimpleGrid
			cols={4}
			spacing="lg"
			breakpoints={[
				{ maxWidth: 'lg', cols: 3, spacing: 'md' },
				{ maxWidth: 'md', cols: 2, spacing: 'sm' },
				{ maxWidth: '28rem', cols: 1, spacing: 'sm' },
			]}>
			{isLoading
				? Array(20)
						.fill(0)
						.map((_, i) => <SkeletonGameCard key={i} />)
				: data.map((game) => <GameCard data={game} key={game.id} />)}
		</SimpleGrid>
	)
}
