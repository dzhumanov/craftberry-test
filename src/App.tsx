import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Quiz } from "./pages/Quiz/Quiz";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
    </Routes>
  );
}

export default App;
