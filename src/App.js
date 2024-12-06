import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
// Bootstrap is enabled, all css classes are imported from bootstrap
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import About from "./components/About";
import Alert from "./components/Alert";

function App() {
  // setting states
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  //defining methods
  const showAlertFunction = (message, type) => {
    setAlert({
      msg: message,
      type: type,
    });
  };

  const toggleDarkMode = () => {
    if (!darkMode) {
      // enable dark mode
      setDarkMode(true);
      document.body.classList.add("bg-dark", "text-white");
      document.body.classList.remove("bg-light", "text-dark");
    } else {
      //disable dark mode
      setDarkMode(false);
      document.body.classList.add("bg-light", "text-dark");
      document.body.classList.remove("bg-dark", "text-white");
    }
  };

  //return JSX
  return (
    <>
    {/* setting up react router for dynamic page loading */}
      <Router>
        <Navbar title="TextUtils" aboutText="About Us" darkModeEnabled={darkMode} toggleDarkMode={toggleDarkMode} />
        <Alert alert={alert} />
        <div className="container my-3">
          <Routes>
            <Route exact path="/" element={<TextForm showAlert={showAlertFunction} />} />
            <Route exact path="/about" element={<About aboutText="About Us" />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
