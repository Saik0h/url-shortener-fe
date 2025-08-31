import type { iUrl } from "../../interfaces";

export function deleteFromArray(array: iUrl[] | null, id: string): Array<iUrl> {
  if (!array) return [];
  const newArray = array.filter((u) => u.id !== id);
  return newArray || [];
}
