import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "./useAuth";

export function PublicRoute() {
  const { state } = useAuth();

  if (state.user) return <Navigate to="/profile" replace />;

  return <Outlet />;
}
