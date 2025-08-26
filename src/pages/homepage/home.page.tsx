import "./home.page.css";
import type { iUrl } from "../../services/auth/interfaces";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { shortenURL } from "../../services/url/url.api";

export function Home() {
  const [reqBody, setReqBody] = useState<iUrl>({ url: "" });
  const [display, setDisplay] = useState<string>("Your URL will appear here");
  const [loading, setLoading] = useState<boolean>(false);

  function handleInput(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value;

    setReqBody({ url: value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    const response = await shortenURL(reqBody);
    setDisplay(response.data);
    setLoading(false);
  }

  async function handleCopy() {
    navigator.clipboard.writeText(display);
  }

  return (
    <section>
      <h2>Shorten</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">insert url</label>
        <input onChange={handleInput} type="url" id="url" />
        <button type="button" onClick={handleCopy} disabled={loading}>
          {loading ? "Loading" : "Copy"}
        </button>

        <span>
          <p>{display}</p>
        </span>
        <button>Shorten!</button>
      </form>
    </section>
  );
}
