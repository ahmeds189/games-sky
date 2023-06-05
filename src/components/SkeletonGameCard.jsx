import { Card, Skeleton, Flex } from '@mantine/core'

export default function SkeletonCard() {
	return (
		<Card shadow="sm" padding="md" radius="md" withBorder>
			<Card.Section>
				<Skeleton height={180} />
			</Card.Section>

			<Flex gap="sm" justify="flex-start" align="flex-start" direction="column" my="lg">
				<Skeleton height={20} width="75%" />
				<Skeleton height={20} width="15%" />
			</Flex>

			<Skeleton height={35} />
		</Card>
	)
}
