import { useState, type ChangeEvent, type FormEvent } from "react";
import type { iLogin } from "../../services/auth/interfaces";
import { login } from "../../services/auth/auth.api";
import { redirect } from "react-router";

export function Login() {
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  function handleInput(e: ChangeEvent) {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    setFormValues({
      ...formValues,
      [input.name]: value,
    });
  }

  async function handleSubmit(e: FormEvent){
    e.preventDefault();
    const data = formValues as iLogin;
    await login(data);
    redirect('/profile', 300)
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input onChange={handleInput} type="email" id="email" name="email" />
        <label htmlFor="password">Password</label>
        <input
          onChange={handleInput}
          type="password"
          id="password"
          name="password"
        />

        <button>Login!</button>
      </form>
    </section>
  );
}
