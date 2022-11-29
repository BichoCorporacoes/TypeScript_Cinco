import {
  createContext,
  ReactNode,
  useCallback,
  useState,
  useEffect,
  useContext,
} from "react";
import { api } from "../api/service";

type AuthProvider = {
  children: ReactNode;
};

interface LoginFuncionario {
  email: string;
  password: string;
}

interface AuthContextData {
  signed: boolean;
  user: LoginFuncionario | null;
  Login(user: LoginFuncionario): Promise<void>;
  Logout(): void;
}

const AuthContext = createContext<AuthContextData>({} as AuthContextData);

export default function AuthProvider({ children }: AuthProvider) {
  const [user, setUser] = useState<LoginFuncionario | null>(null);
  useEffect(() => {
    const storagedUser = sessionStorage.getItem("user-info");
    const storagedToken = sessionStorage.getItem("Bicho-Corps-ZeroPirata");

    if (storagedToken && storagedUser) {
      setUser(JSON.parse(storagedUser));
      api.defaults.headers.Authorization = `Bearer ${storagedToken}`;
    }
  }, []);
  async function Login(data: LoginFuncionario) {
    const response = await api.post(`/cliente/login`, data);

    setUser(response.data.user);

    api.defaults.headers.Authorization = `Bearer ${response.data.token}`;

    sessionStorage.setItem("user-info", JSON.stringify(response.data.user));
    sessionStorage.setItem("Bicho-Corps-ZeroPirata", response.data.token);
  }
  function Logout() {
    setUser(null);
  }
  return (
    <AuthContext.Provider
      value={{ signed: Boolean(user), user, Login, Logout }}
    >
      {children}
    </AuthContext.Provider>
  );
}
export function useAuth() {
  const context = useContext(AuthContext);

  return context;
}
