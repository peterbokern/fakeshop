import { useState } from 'react';
import './SearchBar.css';
import SearchIcon from "../../assets/search.svg?react";
import CancelIcon from "../../assets/cancel.svg?react";

const SearchBar = ({ onSearch }) => {
    const [isExpanded, setIsExpanded] = useState(false); // Tracks whether the search bar is expanded
    const [query, setQuery] = useState(''); // Holds the current search query

    const toggleSearch = () => {
        setIsExpanded(!isExpanded); // Toggle the search bar's expanded state
        if (isExpanded) {
            setQuery(""); // Clear search query if search is being closed
            onSearch(""); // Send empty query to clear search results
        }
    };

    const handleInputChange = (event) => {
        const newQuery = event.target.value;
        setQuery(newQuery); // Update search query state
        onSearch(newQuery); // Pass updated query to the parent component for filtering
    };

    return (
        <div className={`search-bar ${isExpanded ? 'search-bar--expanded' : ''}`}>
            <button className="search-bar__icon" onClick={toggleSearch}
                    aria-label={isExpanded ? "Cancel Search" : "Open Search"}>
                {!isExpanded ? <SearchIcon /> : <CancelIcon />}
            </button>
            <input
                type="text"
                className="search-bar__input"
                value={query}
                onChange={handleInputChange}
                placeholder="Search..."
            />
        </div>
    );
};

export default SearchBar;
