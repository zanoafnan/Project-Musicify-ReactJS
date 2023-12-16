import fetch from 'node-fetch';
import { Creds } from '/Creds';

export default async function handler(request, response) {
  const { ClientId, ClientSecret } = Creds();

  const res = await fetch('https://...', {
    method: 'POST',
    body: JSON.stringify({
      client_id: ClientId,
      client_secret: ClientSecret,
    }),
    headers: { 'Content-Type': 'application/json' },
  });

  const data = await res.json();
  return response.status(200).json({ data });
}
