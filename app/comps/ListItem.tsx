interface ListItemProps {
  item: string;
}

export function ListItem({ item }: ListItemProps) {
  return <li>{item}</li>;
}
