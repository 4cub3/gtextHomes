import { useEffect, lazy, Suspense } from "react";
import NavBar from "./components/NavBar/NavBar";
import Loader from "./shared/Loader/Loader";
import { Routes, Route, useMatch, useNavigate } from "react-router-dom";
import Footer from "./components/Footer/Footer";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const Portfolio = lazy(() => import("./pages/Portfolio"));
const VisitUs = lazy(() => import("./pages/Visit"));
const ContactUs = lazy(() => import("./pages/Contact"));
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
          <Route path="/visitus" element={<VisitUs />} />
          <Route path="/contactus" element={<ContactUs />} />
          <Route
            path="*"
            element={
              <div className="w-full flex items-center justify-center  h-screen text-black">
              Page  Not found
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
