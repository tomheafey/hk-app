import "./App.css";
import MainPage from "./components/MainPage";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import OptionsPage from "./components/OptionsPage";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/options" element=<OptionsPage /> />
                <Route path="/main" element=<MainPage /> />
                <Route path="*" element={<Navigate to="/options" />} />
            </Routes>
        </Router>
    );
}

export default App;
