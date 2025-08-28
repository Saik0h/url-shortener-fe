import { useState, type ChangeEvent, type FormEvent } from "react";
import type { iLogin } from "../../services/interfaces";
import "./login.page.css";
import { useAuth } from "../../context/useAuth";
export function Login() {
  const { state, loginUser } = useAuth();
  const [formValues, setFormValues] = useState<iLogin>({
    email: "",
    password: "",
  });

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await loginUser(formValues);
  }
  return (
    <section className="login">
      <h2 className="login__title">Login</h2>

      <form className="login__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="login__label">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInput}
          className="login__input"
          placeholder="you@example.com"
          required
        />

        <label htmlFor="password" className="login__label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleInput}
          className="login__input"
          placeholder="Your password"
          required
        />

        <button
          className="login__button"
          type="submit"
          disabled={state.loading}
        >
          {state.loading ? "Logging in..." : "Login"}
        </button>
      </form>
      {state.message && (
        <small className="login__message">{state.message}</small>
      )}
    </section>
  );
}
