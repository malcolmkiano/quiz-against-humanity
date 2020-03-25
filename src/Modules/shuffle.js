/**
 * returns a copy of an array with its contents shuffled
 * @param {Array} array the array to be shuffled
 */
export default function (array) {

  if (!Array.isArray(array)) return false;

  let array_copy = [...array];
  for (let i = array_copy.length - 1; i > 0; i--) {
    let j = Math.floor(Math.random() * (i + 1));
    [array_copy[i], array_copy[j]] = [array_copy[j], array_copy[i]];
  }
  return array_copy;
}