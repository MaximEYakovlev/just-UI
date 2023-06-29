import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { FilterableProductTable } from "./components/FiterableProductTable.jsx";

export default function App() {
  const product = useSelector((state) => state.dataLoader);

  return <FilterableProductTable products={product} />;
}
