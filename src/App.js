import { Container } from './style/Container';
import { GlobalStyle } from './style/GlobalStyles';
import { AddTodo } from './todos/AddTodo';
import { TodoList } from './todos/TodoList';

export function App() {
  return (
    <>
      <GlobalStyle />
      <Container>
        <AddTodo />
        <TodoList />
      </Container>
    </>
  );
}
