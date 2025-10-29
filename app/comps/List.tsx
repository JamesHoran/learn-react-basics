interface ListProps {
  children: React.ReactNode;
  type: string;
}

export default function List({ children, type }: ListProps) {
  return type === "ordered" ? <ul>{children}</ul> : <ol>{children}</ol>;
}
