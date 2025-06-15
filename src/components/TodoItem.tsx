
import { Button } from "@/components/ui/button";
import { Trash2, CheckCircle, Circle } from "lucide-react";
import { Todo } from "./TodoApp";

interface TodoItemProps {
  todo: Todo;
  onToggle: () => void;
  onDelete: () => void;
}

const TodoItem = ({ todo, onToggle, onDelete }: TodoItemProps) => {
  return (
    <div className={`flex items-center gap-4 p-4 border rounded-lg transition-all ${
      todo.completed 
        ? "bg-green-50 border-green-200" 
        : "bg-white border-gray-200 hover:border-gray-300"
    }`}>
      <button
        onClick={onToggle}
        className={`flex-shrink-0 transition-colors ${
          todo.completed 
            ? "text-green-600" 
            : "text-gray-400 hover:text-blue-600"
        }`}
      >
        {todo.completed ? (
          <CheckCircle className="h-6 w-6" />
        ) : (
          <Circle className="h-6 w-6" />
        )}
      </button>
      
      <span
        className={`flex-1 text-lg ${
          todo.completed
            ? "line-through text-gray-500"
            : "text-gray-900"
        }`}
      >
        {todo.text}
      </span>
      
      <Button
        variant="ghost"
        size="icon"
        onClick={onDelete}
        className="h-8 w-8 text-gray-400 hover:text-red-600 hover:bg-red-50"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default TodoItem;
