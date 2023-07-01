import { FilterableProductTable } from "./components/FiterableProductTable.jsx";
import { Button } from "semantic-ui-react";
import { useSelector } from "react-redux/es/hooks/useSelector.js";
import { createContext, useState } from "react";

export const ThemeContext = createContext("light");

export default function App() {
  const product = useSelector((state) => state.dataLoader);
  const [theme, setTheme] = useState("light");
  const buttonClassName = "button-" + theme;

  return (
    <>
      <ThemeContext.Provider value={theme}>
        <FilterableProductTable products={product} />
      </ThemeContext.Provider>
      <Button
        className={buttonClassName}
        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
      >
        toggle theme
      </Button>
    </>
  );
}
