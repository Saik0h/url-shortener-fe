import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export function PrivateRoute() {
  const { state } = useAuth();
  if (!state.user) return <Navigate to="/login" replace />;
  return <Outlet />;
}