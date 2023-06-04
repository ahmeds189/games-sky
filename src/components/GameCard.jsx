import { Card, Image, Text, Badge, Button, Flex } from '@mantine/core'
import {
	FaDesktop,
	FaApple,
	FaPlaystation,
	FaXbox,
	FaUbuntu,
	FaAndroid,
	FaAppStoreIos,
} from 'react-icons/fa'
import { BsNintendoSwitch, BsGlobe } from 'react-icons/bs'

export default function GameCard({ data }) {
	const { name, background_image, rating, parent_platforms } = data

	return (
		<Card shadow="sm" padding="8px" radius="md" withBorder>
			<Card.Section>
				<Image src={background_image} height={180} alt={`a poster of ${name}`} />
			</Card.Section>

			<Flex gap="sm" justify="flex-start" align="flex-start" direction="column" my="lg">
				<Text weight={500}>{name}</Text>
				<Badge color="green" variant="light" fz={14} p="5px 8px">
					{rating}
				</Badge>
			</Flex>

			<Flex gap="xs" wrap="wrap" my="lg">
				{parent_platforms.map(({ platform }) => {
					switch (platform.slug) {
						case 'xbox':
							return (
								<span key={platform.id}>
									<FaXbox />
								</span>
							)
						case 'pc':
							return (
								<span key={platform.id}>
									<FaDesktop />
								</span>
							)
						case 'playstation':
							return (
								<span key={platform.id}>
									<FaPlaystation />
								</span>
							)
						case 'mac':
							return (
								<span key={platform.id}>
									<FaApple />
								</span>
							)
						case 'linux':
							return (
								<span key={platform.id}>
									<FaUbuntu />
								</span>
							)
						case 'android':
							return (
								<span key={platform.id}>
									<FaAndroid />
								</span>
							)
						case 'nintendo':
							return (
								<span key={platform.id}>
									<BsNintendoSwitch />
								</span>
							)
						case 'ios':
							return (
								<span key={platform.id}>
									<FaAppStoreIos />
								</span>
							)
						case 'web':
							return (
								<span key={platform.id}>
									<BsGlobe />
								</span>
							)
					}
				})}
			</Flex>

			<Button variant="light" color="blue" fullWidth radius="md">
				See more
			</Button>
		</Card>
	)
}
