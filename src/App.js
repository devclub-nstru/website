import "./assets/styles/main.scss";
import AppRoutes from "./routes/Routes";
import Navbar from "./components/Navbar";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";
import { BrowserRouter as Router } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <Router className="container">
      <Navbar />
      <AppRoutes />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
      <Footer />
    </Router>
  );
}

export default App;
