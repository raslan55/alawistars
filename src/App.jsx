import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "./i18n/translation"
function App() {
  return (
    <>
      <AppRoutes />
   </>
  );
}

export default App;
