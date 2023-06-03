import { Heart } from 'lucide-react'
import {
	Card,
	Image,
	Text,
	Group,
	Badge,
	Button,
	ActionIcon,
	createStyles,
	rem,
} from '@mantine/core'

const useStyles = createStyles((theme) => ({
	card: {
		backgroundColor: theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.white,
	},

	section: {
		borderBottom: `${rem(1)} solid ${
			theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[3]
		}`,
		paddingLeft: theme.spacing.md,
		paddingRight: theme.spacing.md,
		paddingBottom: theme.spacing.md,
	},

	like: {
		color: theme.colors.red[6],
	},

	label: {
		textTransform: 'uppercase',
		fontSize: theme.fontSizes.xs,
		fontWeight: 700,
	},
}))

export default function GameCard({ image, title, description, rating }) {
	const { classes } = useStyles()

	return (
		<Card withBorder radius="md" p="md" className={classes.card} w="15rem">
			<Card.Section>
				<Image src={image} alt={title} height={180} />
			</Card.Section>

			<Card.Section className={classes.section} mt="md">
				<Group position="apart">
					<Text fz="lg" fw={500}>
						{title}
					</Text>
					<Badge size="sm">{rating}</Badge>
				</Group>
				<Text fz="sm" mt="xs">
					{description}
				</Text>
			</Card.Section>

			<Card.Section className={classes.section}>
				<Text mt="md" className={classes.label} c="dimmed">
					Perfect for you, if you enjoy
				</Text>
				<Group spacing={7} mt={5}>
					{/* {features} */}
				</Group>
			</Card.Section>

			<Group mt="xs">
				<Button radius="md" style={{ flex: 1 }}>
					Show details
				</Button>
				<ActionIcon variant="default" radius="md" size={36}>
					<Heart className={classes.like} />
				</ActionIcon>
			</Group>
		</Card>
	)
}
