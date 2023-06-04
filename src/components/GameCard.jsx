import { Card, Image, Text, Badge, Button, Group } from '@mantine/core'

export default function GameCard({ data }) {
	const { name, background_image, rating } = data

	return (
		<Card shadow="sm" padding="md" radius="md" withBorder w={300}>
			<Card.Section>
				<Image src={background_image} height={180} alt={`a poster of ${name}`} />
			</Card.Section>

			<Group
				position="apart"
				mt="md"
				mb="xs"
				display="grid"
				style={{ gridTemplateColumns: '2fr .5fr' }}>
				<Text weight={500}>{name}</Text>
				<Badge color="pink" variant="light">
					{rating}
				</Badge>
			</Group>

			<Button variant="light" color="blue" fullWidth mt={32} radius="md">
				See more
			</Button>
		</Card>
	)
}
