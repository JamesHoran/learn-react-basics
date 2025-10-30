"use client";

import { ListItem } from "./comps/ListItem";
import List from "./comps/List";
import { useState } from "react";

export default function Home() {
  const items: Array<string> = ["item 1", "item 2"];
  const [showList, setShowList] = useState<boolean>(true);

  return (
    <>
      <button onClick={() => setShowList(!showList)}>Show List</button>
      {showList && (
        <List type={"unordered"}>
          {items.map((i) => (
            <ListItem key={i} item={i} />
          ))}
        </List>
      )}
    </>
  );
}
