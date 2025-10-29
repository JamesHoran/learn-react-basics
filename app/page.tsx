import { ListItem } from "./comps/ListItem";
import List from "./comps/List";

export default function Home() {
  const items: Array<string> = ["item 1", "item 2"];
  return (
    <>
      <List type={"unordered"}>
        {items.map((i) => (
          <ListItem key={i} item={i} />
        ))}
      </List>
    </>
  );
}
