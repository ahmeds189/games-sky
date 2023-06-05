import useGenres from '../../hooks/useGenres'

export default function NavbarContent() {
	const { data, isLoading } = useGenres()

	if (isLoading) return <h1>Loading...</h1>

	return (
		<ul>
			{data.map((gen) => (
				<li key={gen.id}>{gen.name}</li>
			))}
		</ul>
	)
}
