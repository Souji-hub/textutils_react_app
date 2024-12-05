import { useState } from "react";
import "./App.css";
import About from "./components/About";
import Navbar from "./components/Navbar";
import TextForm from "./components/TextForm";
import Alert from "./components/Alert";
function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [alert, setAlert] = useState(null);

  const showAlertFunction = (message, type) => {
    setAlert({
      msg: message,
      type: type
    })
  }

  const toggleDarkMode = () => {
    if (!darkMode) {
      // enable dark mode
      setDarkMode(true);
      document.body.classList.add('bg-dark', 'text-white');
      document.body.classList.remove('bg-light', 'text-dark');
      showAlertFunction('Dark Mode Has Been Enabled','success')
    } else {
      //disable dark mode
      setDarkMode(false);
      document.body.classList.add('bg-light', 'text-dark');
      document.body.classList.remove('bg-dark', 'text-white');
      showAlertFunction('Light Mode Has Been Enabled','success')
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="About Us" darkModeEnabled={darkMode} toggleDarkMode={toggleDarkMode} />
      <Alert  alert = {alert}/>
      <div className="container my-3">
        <TextForm  showAlert = {showAlertFunction}/>
      </div>
      {/* <About /> */}
    </>
  );
}

export default App;
