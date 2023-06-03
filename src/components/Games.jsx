import { Group, Skeleton } from '@mantine/core'
import useGames from '../hooks/useGames'
import GameCard from './GameCard'

export default function Games() {
	const { data, isLoading, isError, error } = useGames()

	const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9]

	if (isLoading)
		return Array.from({ length: 20 }, (_, i) => (
			<>
				<Skeleton height={50} circle mb="xl" />
				<Skeleton height={8} radius="xl" />
				<Skeleton height={8} mt={6} radius="xl" />
				<Skeleton height={8} mt={6} width="70%" radius="xl" />
			</>
		))
	if (isError) return <pre>{error.message}</pre>

	return (
		<Group>
			{data.results.map(({ name, rating, background_image, id }) => (
				<GameCard key={id} title={name} rating={rating} image={background_image} />
			))}
		</Group>
	)
}
