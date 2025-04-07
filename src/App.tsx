import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import CreateCharacter from "./pages/CreateCharacter"
import EditCharacter from "./pages/EditCharacter";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/create" element={<CreateCharacter />} />
      <Route path="/edit/:id" element={<EditCharacter />} />
    </Routes>
  );
}

export default App;
