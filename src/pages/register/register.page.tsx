import { useState, type ChangeEvent, type FormEvent } from "react";
import type { iRegister } from "../../services/interfaces";
import "./register.page.css";
import { useAuth } from "../../context/useAuth";

export function Register() {
  const { state, registerUser, fetchCurrentUser } = useAuth();
  const [formValues, setFormValues] = useState<iRegister>({
    email: "",
    username: "",
    name: "",
    password: "",
  });

  function handleInput(e: ChangeEvent<HTMLInputElement>) {
    const { name, value } = e.target;
    setFormValues((prev) => ({ ...prev, [name]: value }));
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    await registerUser(formValues);
    await fetchCurrentUser();
  }

  return (
    <section className="register">
      <h2 className="register__title">Register</h2>

      <form className="register__form" onSubmit={handleSubmit}>
        <label htmlFor="email" className="register__label">
          E-mail
        </label>
        <input
          id="email"
          name="email"
          type="email"
          value={formValues.email}
          onChange={handleInput}
          placeholder="you@example.com"
          className="register__input"
          required
        />

        <label htmlFor="password" className="register__label">
          Password
        </label>
        <input
          id="password"
          name="password"
          type="password"
          value={formValues.password}
          onChange={handleInput}
          placeholder="Your password"
          className="register__input"
          required
        />

        <label htmlFor="username" className="register__label">
          Username
        </label>
        <input
          id="username"
          name="username"
          type="text"
          value={formValues.username}
          onChange={handleInput}
          placeholder="Your username"
          className="register__input"
          required
        />

        <label htmlFor="name" className="register__label">
          Full Name
        </label>
        <input
          id="name"
          name="name"
          type="text"
          value={formValues.name}
          onChange={handleInput}
          placeholder="Your full name"
          className="register__input"
          required
        />

        <button className="register__button" type="submit" disabled={state.loading}>
          {state.loading ? "Registering..." : "Register"}
        </button>
      </form>

      {state.message && (
        <small className="register__message">{state.message}</small>
      )}
    </section>
  );
}
