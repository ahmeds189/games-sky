import { MantineProvider, ColorSchemeProvider } from "@mantine/core";
import { useLocalStorage } from "@mantine/hooks";
import Layout from "./Layout";

export default function App() {
  const [colorScheme, setColorScheme] = useLocalStorage({
    key: "mantine-color-scheme",
    defaultValue: "dark",
    getInitialValueInEffect: true,
  });
  const toggleColorScheme = () => setColorScheme(colorScheme === "dark" ? "light" : "dark");

  return (
    <ColorSchemeProvider colorScheme={colorScheme} toggleColorScheme={toggleColorScheme}>
      <MantineProvider theme={{ colorScheme }} withGlobalStyles withNormalizeCSS>
        <Layout toggleColorScheme={toggleColorScheme} />
      </MantineProvider>
    </ColorSchemeProvider>
  );
}
