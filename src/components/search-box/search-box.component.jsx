import "./search-box.styles.css";
const SearchBox = ({ type, placeholder, changeHandler, className }) => {
  return (
    <input
      type={type}
      placeholder={placeholder}
      onChange={changeHandler}
      className={`search-box ${className}`}
    />
  );
};

export default SearchBox;
