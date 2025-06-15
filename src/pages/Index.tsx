
import TodoApp from "@/components/TodoApp";

const Index = () => {
  return (
    <div className="min-h-screen bg-background p-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Todo List</h1>
        <TodoApp />
      </div>
    </div>
  );
};

export default Index;
