import "./home.page.css";
import type { iUrl } from "../../services/auth/interfaces";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { shortenURL } from "../../services/url/url.api";

export function Home() {
  const [reqBody, setReqBody] = useState<iUrl>({ url: "" });
  const [display, setDisplay] = useState<string>("Your shortened URL will appear here");
  const [loading, setLoading] = useState<boolean>(false);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    setReqBody({ url: event.target.value });
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await shortenURL(reqBody);
      setDisplay(response.data);
    } catch (err) {
      setDisplay("Error: could not shorten this URL");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!display || display.startsWith("Your")) return;
    await navigator.clipboard.writeText(display);
  }

  return (
    <section className="home">
      <h2 className="home__title">Shorten your URL</h2>

      <form className="home__form" onSubmit={handleSubmit}>
        <label htmlFor="url" className="home__label">
          Insert URL
        </label>
        <input
          id="url"
          type="url"
          className="home__input"
          value={reqBody.url}
          onChange={handleInput}
          placeholder="https://example.com"
          required
        />

        <div className="home__buttons">
          <button
            type="submit"
            className="home__button home__button--primary"
            disabled={loading}
          >
            {loading ? "Loading..." : "Shorten!"}
          </button>

          <button
            type="button"
            className="home__button home__button--secondary"
            onClick={handleCopy}
            disabled={loading || display.startsWith("Your")}
          >
            Copy
          </button>
        </div>
      </form>

      <div className="home__result">
        <p>{display}</p>
      </div>
    </section>
  );
}