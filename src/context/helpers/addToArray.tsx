import type { iUrl } from "../../services/interfaces";

export function addToArray(array: iUrl[] | null, url: iUrl): Array<iUrl> {
  if (!array) return [url];
  return [...array, url];
}
