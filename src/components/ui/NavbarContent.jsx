import { SimpleGrid } from '@mantine/core'
import { GenreCard } from '../index'
import useGenres from '../../hooks/useGenres'

export default function NavbarContent() {
	const { data } = useGenres()

	return (
		<div>
			<SimpleGrid cols={1} spacing={4}>
				{data && data.map((genre) => <GenreCard genre={genre} key={genre.id} />)}
			</SimpleGrid>
		</div>
	)
}
