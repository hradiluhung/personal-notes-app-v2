import React, { useContext } from "react";
import PropTypes from "prop-types";
import { FiSearch } from "react-icons/fi";
import LocaleContext from "../contexts/LocaleContext";
import { homeStrings } from "../utils/strings";

const SearchBar = ({ keyword, onKeywordChange }) => {
  const { locale } = useContext(LocaleContext);

  return (
    <label className="form__field">
      <div className="form__icon">
        <FiSearch size="100%" />
      </div>
      <input
        type="email"
        className="form__input"
        placeholder={homeStrings[locale].searchBy}
        value={keyword}
        onChange={(event) => onKeywordChange(event.target.value)}
      />
    </label>
  );
};

SearchBar.propTypes = {
  keyword: PropTypes.string,
  onKeywordChange: PropTypes.func.isRequired,
};

export default SearchBar;
