import React from 'react';
import './SearchBar.css'; 

// Search bar definition
const SearchBar = ({ query, setQuery, handleSearch }) => {
  return (
    <div className="search-container">
      <form onSubmit={handleSearch}>
        <input
          type="text"
          id="search-input"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search..." // Placeholder in search box
          className="search-input"
        />  
        <button type="submit" className="search-button">Search</button>
      </form>
    </div>
  );
};

export default SearchBar;


