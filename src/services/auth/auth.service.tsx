import { useState } from "react";
import api from "./auth.api";
import type { iLogin, iRegister, iUser } from "./interfaces";

export function userState() {
  const [user, setUser] = useState<iUser | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  function login(dto: iLogin) {
    return api.login(dto).then(() => {
      setIsLoggedIn(true);
    });
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
}
