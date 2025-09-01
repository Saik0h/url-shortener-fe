import "./home.page.css";
import { useState, type ChangeEvent, type FormEvent } from "react";
import { useAuth } from "../../context/useAuth";

export function Home() {
  const { shortenUrl } = useAuth();
  const [payload, setPayload] = useState<string>("");
  const [urlDisplay, setUrlDisplay] = useState(
    "Your shortened URL will appear here"
  );
  const [copyDisplay, setCopyDisplay] = useState("Copy");
  const [loading, setLoading] = useState(false);

  function handleInput(event: ChangeEvent<HTMLInputElement>) {
    const value = event.target.value;
    setPayload(value);
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await shortenUrl(payload);
      setUrlDisplay(response);
    } catch (err) {
      setUrlDisplay("Error: could not shorten this URL");
    } finally {
      setLoading(false);
    }
  }

  async function handleCopy() {
    if (!urlDisplay || urlDisplay.startsWith("Your")) return;
    await navigator.clipboard.writeText(urlDisplay);
    setCopyDisplay("✔");
    setTimeout(() => setCopyDisplay("Copy"), 2000);
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
          value={payload}
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
        </div>
      </form>

      <div className="result__wrapper">
        <div className="home__result">
          <p>{urlDisplay}</p>
        </div>

        <button
          type="button"
          className="home__button home__button--secondary"
          onClick={handleCopy}
          disabled={
            loading || urlDisplay?.startsWith("Your") || copyDisplay !== "Copy"
          }
        >
          {copyDisplay}
        </button>
      </div>
    </section>
  );
}
