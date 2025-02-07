import { Home, Nav } from "./";
import "./app.css";
function App() {
  return (
    <div className=" dark:bg-[#0B0B0B] min-h-screen dark:text-[#EBECF3]  relative">
      <div className="max-w-7xl mx-auto sm:px-4 px-4 md:px-6 lg:px-14">
        <Nav />
        <Home />
      </div>
    </div>
  );
}

export default App;
