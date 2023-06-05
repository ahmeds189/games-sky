import { useState } from 'react'
import { AppShell, Navbar, Header, useMantineTheme } from '@mantine/core'
import { HeaderContent, Games } from './components'

export default function Layout({ toggleColorScheme }) {
	const theme = useMantineTheme()
	const [opened, setOpened] = useState(false)

	return (
		<AppShell
			styles={{
				main: {
					background:
						theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
				},
			}}
			navbarOffsetBreakpoint="sm"
			asideOffsetBreakpoint="sm"
			navbar={
				<Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 250 }}>
					Application navbar
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
