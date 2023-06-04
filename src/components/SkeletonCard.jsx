import { Card, Group, Skeleton } from '@mantine/core'

export default function SkeletonCard() {
	return (
		<Card shadow="sm" padding="md" radius="md" withBorder w={300}>
			<Card.Section>
				<Skeleton height={180} />
			</Card.Section>

			<Group position="apart" mt="md" mb="xs">
				<Skeleton height={20} width="75%" />
				<Skeleton height={20} width="15%" />
			</Group>

			<Skeleton height={40} mt={32} />
		</Card>
	)
}
