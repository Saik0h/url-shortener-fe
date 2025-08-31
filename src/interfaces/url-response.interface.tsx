import type { iUrl } from ".";

export default interface iUrlResponse {
  message: string;
  shortened: string;
  url: iUrl;
}
