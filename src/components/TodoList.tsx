
import TodoItem from "./TodoItem";
import { Todo } from "./TodoApp";
import { ListTodo } from "lucide-react";

interface TodoListProps {
  todos: Todo[];
  onToggleTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

const TodoList = ({ todos, onToggleTodo, onDeleteTodo }: TodoListProps) => {
  if (todos.length === 0) {
    return (
      <div className="text-center py-12">
        <ListTodo className="h-16 w-16 text-gray-300 mx-auto mb-4" />
        <h3 className="text-lg font-medium text-gray-500 mb-2">No tasks yet</h3>
        <p className="text-gray-400">Add your first task above to get started!</p>
      </div>
    );
  }

  const completedCount = todos.filter(todo => todo.completed).length;

  return (
    <div>
      {/* Progress indicator */}
      <div className="mb-6 p-4 bg-blue-50 rounded-lg">
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm font-medium text-blue-900">Progress</span>
          <span className="text-sm text-blue-700">
            {completedCount} of {todos.length} completed
          </span>
        </div>
        <div className="w-full bg-blue-200 rounded-full h-2">
          <div 
            className="bg-blue-600 h-2 rounded-full transition-all duration-300"
            style={{ width: `${todos.length > 0 ? (completedCount / todos.length) * 100 : 0}%` }}
          ></div>
        </div>
      </div>

      {/* Task list */}
      <div className="space-y-3">
        {todos.map((todo) => (
          <TodoItem
            key={todo.id}
            todo={todo}
            onToggle={() => onToggleTodo(todo.id)}
            onDelete={() => onDeleteTodo(todo.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default TodoList;
