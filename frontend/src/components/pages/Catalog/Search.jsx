import PropTypes from "prop-types";

const Search = ({ onSearch, searchQuery }) => {
  return (
    <div className="search">
      <div className="search__input">
        <input
          type="text"
          placeholder="Поиск"
          id="search"
          className="input"
          value={searchQuery} 
          onChange={(e) => onSearch(e.target.value)} 
        />
      </div>
    </div>
  );
};

Search.propTypes = {
  onSearch: PropTypes.func.isRequired,
  searchQuery: PropTypes.string.isRequired,
};

export default Search;
