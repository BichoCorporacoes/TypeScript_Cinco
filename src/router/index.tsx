import { useAuth } from "../hooks/auth";
import AuthRoutes from "./AuthRoutes";
import SignRoutes from "./SignRoutes";

export default function Routes() {
  const { signed } = useAuth();
  return signed ? <AuthRoutes /> : <SignRoutes />;
}
