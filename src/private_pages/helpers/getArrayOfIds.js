export function getArrayOfIds(count) {
  const arrayOfIds = new Array(count);

  for (let i = 0; i < count; i++) {
    arrayOfIds[i] = i + 1;
  }

  return arrayOfIds;
}
