interface ItemProps {
    title: string;
}

export function Item(props: ItemProps) {
    return <li>{props.title}</li>
}