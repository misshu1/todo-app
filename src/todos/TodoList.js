import { useRecoilState } from 'recoil';
import { todosState } from '../state';
import { Todo } from '../style/Todo';
import { TodosContainer } from '../style/TodosContainer';

export function TodoList() {
  const [todos, setTodos] = useRecoilState(todosState);

  const handleComplete = (selectedTodo) => {
    setTodos((prevState) =>
      prevState.map((todo) =>
        todo.id === selectedTodo.id
          ? {
              ...todo,
              isCompleted: !todo.isCompleted,
            }
          : todo
      )
    );
  };

  return (
    <TodosContainer>
      {todos.map((todo) => (
        <Todo isCompleted={todo.isCompleted} key={todo.title}>
          <input
            type='checkbox'
            onChange={() => handleComplete(todo)}
            checked={todo.isCompleted}
          />
          <span onClick={() => handleComplete(todo)}>{todo.title}</span>
        </Todo>
      ))}
    </TodosContainer>
  );
}
