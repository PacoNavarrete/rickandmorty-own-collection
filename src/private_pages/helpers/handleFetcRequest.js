export function handleFetchRequest(res) {
  if (res.ok) {
    return res.json();
  } else {
    throw new Error('redirected due to missing character');
  }
}
