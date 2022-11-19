import { Routes as RoutesWrapper, Route } from "react-router-dom";
import LoginPage from "../pages/Login";

export default function SignRoutes() {
  return (
    <RoutesWrapper>
      <Route path="/" element={<LoginPage />} />
    </RoutesWrapper>
  );
}
