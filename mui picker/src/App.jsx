import "./App.css";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import Tablist from "./components/Tablist";

export default function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <Tablist />
    </Container>
  );
}
