import type { iUrlAccessData } from ".";

export default interface iUrl {
    id: string,
    original: string,
    accesses: iUrlAccessData[]
    createdAt: string,
    expiresAt: string
}