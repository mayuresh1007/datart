import "./App.css";
import Navbar from "./components/Navbar";
import { Outlet } from "react-router-dom";
import { ModalProvider } from "./contexts/ModalContext";

function App() {
  return (
    <ModalProvider>
      <div className="App">
        <Navbar />
        <Outlet />
      </div>
    </ModalProvider>
  );
}

export default App;
