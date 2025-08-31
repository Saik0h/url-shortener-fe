import type { iUrl } from ".";

export default interface iUser {
  username: string;
  name: string;
  email: string;
  urls: iUrl[]
}
