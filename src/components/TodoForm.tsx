
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface TodoFormProps {
  onAddTodo: (text: string) => void;
}

const TodoForm = ({ onAddTodo }: TodoFormProps) => {
  const [inputValue, setInputValue] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim()) {
      onAddTodo(inputValue.trim());
      setInputValue("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-3 mb-6">
      <Input
        type="text"
        placeholder="Add a new task..."
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        className="flex-1 h-12 text-lg border-gray-300 focus:border-blue-500 focus:ring-blue-500"
      />
      <Button 
        type="submit" 
        className="h-12 px-6 bg-blue-600 hover:bg-blue-700 text-white font-medium"
      >
        <Plus className="h-5 w-5 mr-2" />
        Add Task
      </Button>
    </form>
  );
};

export default TodoForm;
