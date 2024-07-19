import AddTask from "./components/AddTask";

function App() {
  return (
    <>
      <h1 className="text-2xl font-bold py-4 pl-6">Task Tracker App</h1>
      <p className="text-xl pl-6">Hi there!</p>
      <p className="text-xl pl-6">Click</p>
      <AddTask />
      <p>to add a new task</p>
    </>
  );
}

export default App;
