import { useState } from 'react';

// eslint-disable-next-line react/prop-types
const SearchInput = ({ inputValue, setInputValue, onClear }) => {
  const [showClear, setShowClear] = useState(false);

  const handleChange = (e) => {
    const value = e.target.value;
    setInputValue(value);
    setShowClear(value.length > 0);
  };

  const clearInput = () => {
    setInputValue('');
    setShowClear(false);
    if (onClear) {
      onClear(); // Викликаємо зовнішню функцію очищення стейту
    }
  };

  return (
    <div className="position-relative w-50">
      <input
        type="search"
        className="form-control h-100"
        placeholder="Enter city name"
        value={inputValue}
        onChange={handleChange}
      />
      {showClear && (
        <button
          className="btn position-absolute end-0 top-50 translate-middle-y me-2"
          onClick={clearInput}
        ></button>
      )}
    </div>
  );
};

export default SearchInput;
