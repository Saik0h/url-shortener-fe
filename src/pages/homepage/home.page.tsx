import './home.page.css'
import type { iUrl } from '../../services/auth/interfaces';
import { useState, type ChangeEvent, type FormEvent } from 'react';
import { shortenURL } from '../../services/url/url.api';

export function Home() {
  const [payload, setPayload] = useState<iUrl>({ url: '' })
  const [displayUrl, setDisplayUrl] = useState<string>('Your shortened url will appear here')
  
  function handleInput(event: ChangeEvent) {
    const input = event.target as HTMLInputElement;
    const value = input.value

    setPayload({ url: value })
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault()

    const response = await shortenURL(payload)
    console.log(response)
    setDisplayUrl(response.data)
  }

async function handleCopy(){
    navigator.clipboard.writeText(displayUrl)
  }

  return (
    <section>
      <h2>Shorten</h2>
      <form onSubmit={handleSubmit}>
        <label htmlFor="url">insert url</label>
        <input onChange={handleInput} type="url" id="url" />
        <button type='button' onClick={handleCopy}>COpy</button>

        <span>
          <p>{displayUrl}</p>
        </span>
        <button>Shorten!</button>
      </form>
    </section>
  );
}
