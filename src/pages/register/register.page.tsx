import { useState, type ChangeEvent, type FormEvent } from "react";
import type { iRegister } from "../../services/auth/interfaces";
import { register } from "../../services/auth/auth.api";

export function Register() {
  const [formValues, setFormValues] = useState({
    email: "",
    username: "",
    name: "",
    password: "",
  });

  function handleInput(e: ChangeEvent) {
    const input = e.target as HTMLInputElement;
    const value = input.value;

    setFormValues({
      ...formValues,
      [input.name]: value,
    });
    console.log(formValues);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    const data = formValues as iRegister;
    await register(data);
  }

  return (
    <section>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">E-mail</label>
        <input name="email" type="email" id="email" onChange={handleInput} />
        <label htmlFor="password">Password</label>
        <input
          name="password"
          type="password"
          id="password"
          onChange={handleInput}
        />
        <label htmlFor="username">Username</label>
        <input
          name="username"
          type="text"
          id="Username"
          onChange={handleInput}
        />
        <label htmlFor="name">Full Name</label>
        <input name="name" type="text" id="name" onChange={handleInput} />

        <button>Register!</button>
      </form>
    </section>
  );
}
