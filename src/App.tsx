import { Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./pages/Home/Home";
import { Quiz } from "./pages/Quiz/Quiz";
import { Final } from "./pages/Final/Final";
import { AnimatePresence, motion } from "framer-motion";

function App() {
  const location = useLocation();

  const isFinal = location.pathname === "/final";

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route
          path="/"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/quiz/:id"
          element={
            <motion.div
              initial={location.state?.fromHome ? { opacity: 0, x: 50 } : {}}
              animate={{ opacity: 1, x: 0 }}
              exit={isFinal ? { opacity: 0, x: -50 } : {}}
              transition={{ duration: 0.5 }}
            >
              <Quiz />
            </motion.div>
          }
        />
        <Route
          path="/final"
          element={
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -50 }}
              transition={{ duration: 0.5 }}
            >
              <Final />
            </motion.div>
          }
        />
      </Routes>
    </AnimatePresence>
  );
}

export default App;
