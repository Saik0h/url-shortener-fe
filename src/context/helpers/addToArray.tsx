import type { iUrl } from "../../interfaces";

export function addToArray(array: iUrl[] | null, url: iUrl): Array<iUrl> {
  if (array === null) {
    const newArray = []
    newArray.push(url)
    return newArray;
  } else {
    const newArray = [...array];
    newArray.push(url);
    return newArray;
  }
}
