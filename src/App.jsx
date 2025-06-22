import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AppRoutes from "./routes/AppRoutes";
import "./App.css";
import "./i18n/translation"
import FloatingWhatsAppButton from "./components/FloatingWhatsAppButton";
function App() {
  return (
      <>
      <AppRoutes  />
      <FloatingWhatsAppButton phoneNumber="+966504139270" message="Hello, I need assistance!" /> 
      </>

  );
}

export default App;
