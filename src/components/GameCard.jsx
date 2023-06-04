import { Card, Image, Text, Badge, Button, Flex } from '@mantine/core'

export default function GameCard({ data }) {
	const { name, background_image, rating } = data

	return (
		<Card shadow="sm" padding="8px" radius="md" withBorder>
			<Card.Section>
				<Image src={background_image} height={180} alt={`a poster of ${name}`} />
			</Card.Section>

			<Flex gap="sm" justify="flex-start" align="flex-start" direction="column" my="lg">
				<Text weight={500}>{name}</Text>
				<Badge color="pink" variant="light">
					{rating}
				</Badge>
			</Flex>

			<Button variant="light" color="blue" fullWidth radius="md">
				See more
			</Button>
		</Card>
	)
}
