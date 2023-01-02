export default function  hasValuesFromArray(set, arr) {
    return arr.reduce((prev, cur) => prev && set.has(cur), true);
}