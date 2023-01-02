export default function CleanSet(set, startString) {
    let text = '';
    const array = [];

    if (startsString && typeof startString === 'string') {
        for (const element of set) {
            if (element && element.startsWith(startString)) {
                array.push(element.slice(startString.length));
        }
    }
    text = array.join('-');
  }
  return text;
}