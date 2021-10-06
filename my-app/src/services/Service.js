export async function translateText(text, from, to) {
  const response = await fetch(`/api/translate`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text: text, from: from, to: to }),
  });
  return await response.json();
}
