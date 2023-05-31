import { ActionIcon, MediaQuery, Flex } from "@mantine/core";
import { Sun, Moon, Menu, X, Swords } from "lucide-react";

export default function NavbarContent({ theme, toggleColorScheme, opened, setOpened }) {
  return (
    <Flex gap="md" justify="flex-start" align="center" direction="row" wrap="wrap" h="100%" p="sm">
      <Swords size={38} color="#33a1fd" style={{ marginInlineEnd: "auto" }} />

      <ActionIcon size="lg" radius="md" onClick={toggleColorScheme}>
        {theme.colorScheme === "dark" ? <Sun /> : <Moon />}
      </ActionIcon>

      <MediaQuery largerThan="sm" styles={{ display: "none" }}>
        <ActionIcon size="lg" radius="md" onClick={() => setOpened(!opened)}>
          {opened ? <X /> : <Menu />}
        </ActionIcon>
      </MediaQuery>
    </Flex>
  );
}
