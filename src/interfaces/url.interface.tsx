import type { iUrlAccessData } from ".";

export default interface iUrl {
    id: string,
    original: string,
    accessCount: iUrlAccessData[]
    createdAt: string,
    expiresAt: string
}