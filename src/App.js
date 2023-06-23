import { product } from "./data/data";
import { FilterableProductTable } from "./components/FiterableProductTable.jsx";

export default function App() {
  return <FilterableProductTable products={product} />;
}
