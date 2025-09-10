import { useParams } from "react-router";

export function Quiz() {
  const { id } = useParams();
  return <div>Quiz {id}</div>;
}
