import {
  createContext,
  useContext,
  useReducer,
  useEffect,
  type ReactNode,
} from "react";
import type { iUser, iLogin, iRegister, iUrl } from "../services/interfaces";
import { login, register, getCurrentUser, logout } from "../services/auth.api";
import { useNavigate } from "react-router-dom";
import { getUserUrls } from "../services/user.api";

type AuthState = {
  user: iUser | null;
  urls: iUrl[] | null;
  loading: boolean;
  message: string | null;
};

type AuthAction =
  | { type: "SET_LOADING"; payload: boolean }
  | { type: "SET_USER"; payload: iUser | null }
  | { type: "SET_MESSAGE"; payload: string | null }
  | { type: "LOGOUT" }
  | { type: "SET_URLS", payload: iUrl[] | null };

type AuthContextType = {
  state: AuthState;
  loginUser: (data: iLogin) => Promise<void>;
  registerUser: (data: iRegister) => Promise<void>;
  getCurrent: () => Promise<void>;
  fetchUserUrls: () => Promise<void>;
  logoutUser: () => void;
};

const initialState: AuthState = {
  user: null,
  urls: null,
  loading: false,
  message: null,
};

function authReducer(state: AuthState, action: AuthAction): AuthState {
  switch (action.type) {
    case "SET_LOADING":
      return { ...state, loading: action.payload };
    case "SET_USER":
      return { ...state, user: action.payload };
    case "SET_URLS":
      return { ...state, urls: action.payload };
    case "SET_MESSAGE":
      return { ...state, message: action.payload };
    case "LOGOUT":
      return { user: null, loading: false, message: null, urls: null };
    default:
      return state;
  }
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [state, dispatch] = useReducer(authReducer, initialState);
  const navigate = useNavigate();

  async function loginUser(data: iLogin) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await login(data);

      await getCurrent()
      dispatch({ type: "SET_MESSAGE", payload: res.message });
    } catch (err: any) {
      dispatch({ type: "SET_MESSAGE", payload: err.message || "Login failed" });
    } finally {
      navigate("/profile");
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  async function registerUser(data: iRegister) {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const res = await register(data);
      console.log(res)
      navigate("/profile");
      dispatch({ type: "SET_MESSAGE", payload: res.message });
    } catch (err: any) {
      dispatch({
        type: "SET_MESSAGE",
        payload: err.message || "Registration failed",
      });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  async function getCurrent() {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const user = await getCurrentUser();
      dispatch({ type: "SET_USER", payload: user.data });
    } catch {
      dispatch({ type: "SET_USER", payload: null });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  async function fetchUserUrls() {
    dispatch({ type: "SET_LOADING", payload: true });
    try {
      const urls = await getUserUrls();
      dispatch({ type: "SET_URLS", payload: urls.data });
    } catch (err: any) {
      dispatch({ type: "SET_MESSAGE", payload: err.message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  async function logoutUser() {
    try {
      await logout();
      dispatch({ type: "LOGOUT" });
      navigate("/");
    } catch (err: any) {
      dispatch({ type: "SET_MESSAGE", payload: err.message });
    } finally {
      dispatch({ type: "SET_LOADING", payload: false });
    }
  }

  useEffect(() => {
    getCurrent();
  }, []);

  return (
    <AuthContext.Provider
      value={{
        state,
        loginUser,
        registerUser,
        getCurrent,
        logoutUser,
        fetchUserUrls,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) throw new Error("useAuth must be used within an AuthProvider");
  return context;
}
