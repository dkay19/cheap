function CheckError(value) {
  if (value.status >= 200 && value.status <= 299) return value.json();
  else throw new Error(`${value.status} | ${value.ok} | ${value.url}`);
  return { meals: null };
}
export default CheckError;
