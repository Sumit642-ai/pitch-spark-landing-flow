
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

export interface Todo {
  id: string;
  text: string;
  completed: boolean;
  createdAt: Date;
}

const TodoApp = () => {
  const [todos, setTodos] = useState<Todo[]>([]);

  const addTodo = (text: string) => {
    const newTodo: Todo = {
      id: Date.now().toString(),
      text,
      completed: false,
      createdAt: new Date(),
    };
    setTodos([newTodo, ...todos]);
  };

  const toggleTodo = (id: string) => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  };

  const deleteTodo = (id: string) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  return (
    <div className="space-y-6">
      <TodoForm onAddTodo={addTodo} />
      <TodoList 
        todos={todos} 
        onToggleTodo={toggleTodo} 
        onDeleteTodo={deleteTodo} 
      />
    </div>
  );
};

export default TodoApp;
