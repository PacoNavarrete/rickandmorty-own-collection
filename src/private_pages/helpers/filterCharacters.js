export function filterCharacters(localCharacters, fetchedCharacters = []) {
  const map = {};
  fetchedCharacters.forEach((character) => (map[character.id] = character));
  localCharacters.forEach((character) =>
    map[character.id] ? delete map[character.id] : false
  );
  return Object.values(map);
}
