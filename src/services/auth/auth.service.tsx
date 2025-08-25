import type { iLogin, iRegister, iUser } from "./interfaces";
import { useState } from "react";
import api from "./auth.api";

export function AuthStore() {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(!!user);

  async function login(dto: iLogin) {
    const response = await api.login(dto);
    if (!response)
      return
  }

  function register(dto: iRegister) {
    return api.register(dto).then(() => {
      setIsLoggedIn(true);
    });
  }

  async function getCurrentUser() {
    const user: iUser = await api.getCurrentUser()
    setUser(user)
  }

  return { login, register, getCurrentUser }
}
