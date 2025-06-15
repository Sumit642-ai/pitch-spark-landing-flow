
import TodoApp from "@/components/TodoApp";
import Navbar from "@/components/Navbar";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              Organize Your Tasks Efficiently
            </h1>
            <p className="text-xl text-blue-100 max-w-2xl mx-auto">
              Stay productive and manage your daily tasks with our intuitive todo application.
              Simple, clean, and designed for professionals.
            </p>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h2 className="text-2xl font-semibold text-gray-900 mb-2">My Tasks</h2>
            <p className="text-gray-600">Keep track of your daily responsibilities</p>
          </div>
          
          <TodoApp />
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 mt-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2024 TaskMaster. Built for productivity and success.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
