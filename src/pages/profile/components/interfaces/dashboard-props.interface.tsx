import type { iUrl } from '.'

export default interface iDashboardProps {
    title: string,
    caption: string,
    columns: string[],
    urls: iUrl[]
}