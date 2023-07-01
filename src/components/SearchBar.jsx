import { Button } from "semantic-ui-react";
import { useContext, useRef } from "react";
import { ThemeContext } from "../App";

export const SearchBar = ({
  filterText,
  inStockOnly,
  onFilterTextChange,
  onInStockOnlyChange,
}) => {
  const inputRef = useRef(null);
  const theme = useContext(ThemeContext);
  const searchBarClassName = "ui-" + theme;
  const buttonClassName = "button-" + theme;

  const handleClick = () => {
    inputRef.current.focus();
  };

  return (
    <form className={searchBarClassName}>
      <input
        ref={inputRef}
        type="text"
        value={filterText}
        placeholder="Search..."
        onChange={(e) => onFilterTextChange(e.target.value)}
      />
      <label>
        <input
          type="checkbox"
          checked={inStockOnly}
          onChange={(e) => onInStockOnlyChange(e.target.checked)}
        />
        Only show products in stock
      </label>
      <Button
        type="button"
        className={buttonClassName}
        content="focus the input"
        onClick={handleClick}
      />
    </form>
  );
};
