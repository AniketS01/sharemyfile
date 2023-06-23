import Main from "./components/Main";
import Navbar from "./components/Navbar";
import logo from "./logo.svg";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <Navbar />
      <Main />
      <ToastContainer />
    </div>
  );
}

export default App;
