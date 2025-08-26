export default function Head(props: {
    items: {
        className: string,
        title: string
    }[]
}) {
    const { items } = props

    return (
        <thead>
            <tr>
                {items.map((item) => {
                    return (
                        <th key={item.title} className={item.className}>{item.title}</th>
                    )
                })}

            </tr>
        </thead>
    )
}