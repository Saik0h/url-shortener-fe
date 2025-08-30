export default interface iUrl {
  id: string;
  original: string;
  createdAt: string;
  expiresAt: Date;
  accessCount: { when: string }[];
}
