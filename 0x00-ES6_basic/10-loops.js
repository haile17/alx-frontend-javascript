export default function appendToEachArrayValue(array, appendString) {
  for (const value of array) {
    Array[array.indexOf(value)] = appendString + value;
  }

  return array;
}
