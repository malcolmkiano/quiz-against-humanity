export default function (array) {
  let array_copy = [...array];
  for (let i = array_copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array_copy[i], array_copy[j]] = [array_copy[j], array_copy[i]];
  }
  return array_copy;
}