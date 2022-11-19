import { BrowserRouter } from "react-router-dom";
import Routes from "./router";
import "./assets/global.css";
import "bootstrap/dist/css/bootstrap.min.css";
import AuthProvider, { useAuth } from "./hooks/auth";
function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
    </AuthProvider>
  );
}
export default App;
