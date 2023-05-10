import { useEffect, lazy, Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import Loader from "./shared/Loader/Loader";
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));

function App() {
  const match = useMatch("/");
  const navigate = useNavigate();
  useEffect(() => {
    if (match?.pathname === "/") {
      navigate("/home");
    }
  }, [navigate]);
  return (
    <Suspense fallback={<Loader />}>
      <NavBar />
      <main>
        <Routes>
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/ourportfolio" element={<Portfolio />} />
          <Route
            path="*"
            element={
              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                Not found
              </div>
            }
          />
        </Routes>
      </main>
      <Footer />
    </Suspense>
  );
}

export default App;
