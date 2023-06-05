import { Card, Image, Text, Badge, Button, Flex, Avatar } from '@mantine/core'
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
import { getCroppedImage } from '../../utils/imageUrl'

const PlatformsList = ({ slug }) => {
	switch (slug) {
		case 'xbox':
			return <FaXbox size={15} />
		case 'pc':
			return <FaDesktop size={15} />
		case 'playstation':
			return <FaPlaystation size={15} />
		case 'mac':
			return <FaApple size={15} />
		case 'linux':
			return <FaUbuntu size={15} />
		case 'android':
			return <FaAndroid size={15} />
		case 'nintendo':
			return <BsNintendoSwitch size={15} />
		case 'ios':
			return <FaAppStoreIos size={15} />
		case 'web':
			return <BsGlobe size={15} />
	}
}

export default function GameCard({ data }) {
	const { name, background_image, rating, parent_platforms } = data

	return (
		<Card shadow="sm" padding="8px" radius="md" withBorder>
			<Card.Section>
				<Image
					src={getCroppedImage(background_image)}
					height={180}
					alt={`a poster of ${name}`}
				/>
			</Card.Section>

			<Flex gap="sm" justify="flex-start" align="flex-start" direction="column" my="lg">
				<Text weight={600}>{name}</Text>
				<Badge color="green" variant="light" fz={14} p="5px 8px">
					{rating}
				</Badge>
			</Flex>

			<Flex gap={0} wrap="wrap" my="lg">
				{parent_platforms.map(({ platform }) => (
					<Avatar
						key={platform.id}
						color="indigo"
						p={4}
						radius="md"
						alt={`supported platform (${platform.name})`}>
						<PlatformsList slug={platform.slug} key={platform.id} />
					</Avatar>
				))}
			</Flex>

			<Button variant="light" color="blue" fullWidth radius="md">
				See more
			</Button>
		</Card>
	)
}
