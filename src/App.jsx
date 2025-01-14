import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import MovieDetail from "./pages/MovieDetail";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer";
import Loader from "./components/Loader";
import { LoaderProvider, useLoader } from "./context/LoaderContext";
import styles from "./App.module.css";

function App() {
  return (
    <LoaderProvider>
      <Router>
        <div className={styles.app}>
          <Navbar />
          <LoaderWrapper />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/movies/:id" element={<MovieDetail />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
          <Footer />
        </div>
      </Router>
    </LoaderProvider>
  );
}

const LoaderWrapper = () => {
  const { loading } = useLoader();
  return loading ? <Loader /> : null;
};

export default App;
