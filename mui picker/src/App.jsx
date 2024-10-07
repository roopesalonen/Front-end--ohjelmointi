import "./App.css";
import Container from '@mui/material/Container';
import CssBaseline from '@mui/material/CssBaseline';
import TodoList from "./components/TodoList"

export default function App() {
  return (
    <Container maxWidth="xl">
      <CssBaseline />
      <TodoList />
    </Container>
  );
}
