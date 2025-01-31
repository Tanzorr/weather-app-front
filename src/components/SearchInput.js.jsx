import React from 'react';
// eslint-disable-next-line react/prop-types
const SearchInput = ({ inputValue, setInputValue }) => (
  <input
    type="search"
    className="form-control w-50"
    placeholder="Enter city name"
    value={inputValue}
    onChange={(e) => setInputValue(e.target.value)}
  />
);

export default SearchInput;
