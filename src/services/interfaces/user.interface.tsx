import type { iUrl } from "../../pages/profile/components/interfaces";

export interface iUser {
  username: string;
  name: string;
  email: string;
  urls: iUrl[]
}
