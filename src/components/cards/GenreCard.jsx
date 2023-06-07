import { Avatar, Text, Group } from '@mantine/core'
import { getCroppedImage } from '../../utils/imageUrl'

export default function GenreCard({ genre, setSelectedGenre }) {
	const { image_background, name } = genre

	return (
		<Group
			onClick={() => setSelectedGenre(genre)}
			noWrap
			sx={(theme) => ({
				'&:hover': {
					background:
						theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[2],
					cursor: 'pointer',
				},
				padding: '8px',
				borderRadius: theme.radius.md,
			})}>
			<Avatar src={getCroppedImage(image_background)} size={44} radius="md" />
			<div>
				<Text fz="xs" tt="uppercase" fw={700} c="dimmed">
					{name}
				</Text>
			</div>
		</Group>
	)
}
