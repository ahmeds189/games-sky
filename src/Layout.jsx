import { useState } from 'react'
import { AppShell, Navbar, Header, useMantineTheme, LoadingOverlay } from '@mantine/core'
import { HeaderContent, Games, NavbarContent } from './components'
import useGenres from './hooks/useGenres'

export default function Layout({ toggleColorScheme }) {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)
	const [selectedGenre, setSelectedGenre] = useState(null)
	const { isLoading } = useGenres()

	console.log(selectedGenre)

	return (
		<AppShell
			navbarOffsetBreakpoint="sm"
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbar={
				<Navbar p="xs" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
					{isLoading && <LoadingOverlay visible />}
					<NavbarContent setSelectedGenre={setSelectedGenre} />
				</Navbar>
			}
			header={
				<Header height={{ base: 60, md: 70 }}>
					<HeaderContent
						theme={theme}
						opened={opened}
						toggleColorScheme={toggleColorScheme}
						setOpened={setOpened}
					/>
				</Header>
			}>
			<Games />
		</AppShell>
	)
}
