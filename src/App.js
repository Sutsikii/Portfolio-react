import "./index.css";

// Import Components 
import Header from "./components/Header";
import AnimRoutes from "./components/AnimRoutes";
// Import Router
import { BrowserRouter as Router } from 'react-router-dom';
// Import Motion
import { motion } from 'framer-motion';

function App() {
  return (
    <>
      <Router>
        <Header />
        <AnimRoutes />
      </Router>
    </>
  );
}

export default App;
