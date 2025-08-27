import "./app.css";
import { Route, BrowserRouter, Routes } from "react-router-dom";
import { Layout } from "./components";
import { Home, Register, Login, Profile, NotFound } from "../pages";
import { AuthProvider } from "../context/useAuth";
import { PublicRoute } from "../context/unauthenticated-only";
import { PrivateRoute } from "../context/private-route.guard";

export default function App() {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route element={<PublicRoute />}>
              <Route path="/register" element={<Register />} />
              <Route path="/login" element={<Login />} />
            </Route>
            <Route element={<PrivateRoute />}>
              <Route path="/profile" element={<Profile />} />
            </Route>
            <Route path="*/*" element={<NotFound />} />
          </Route>
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
}
