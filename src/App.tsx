import { Route, Routes } from "react-router";
import { Home } from "./pages/Home/Home";
import { Quiz } from "./pages/Quiz/Quiz";
import { Final } from "./pages/Final/Final";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/quiz/:id" element={<Quiz />} />
      <Route path="/final" element={<Final />} />
    </Routes>
  );
}

export default App;
