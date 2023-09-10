import "./styles/global.styles.css";
import { Main } from "./components/Sections/Main/Main";
import { TodoProvider } from "./context/TodoContext";

function App() {
  return (
    <TodoProvider>
      <Main></Main>
    </TodoProvider>
  );
}

export default App;
