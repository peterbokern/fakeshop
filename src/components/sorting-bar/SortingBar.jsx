
import "./SortingBar.css";
import Button from "@/components/button/Button.jsx";

const SortingBar = ({ isAscending, sortBy, sortingOptions, onChangeSortBy, onToggleSortOrder }) => {
    return (
        <div className="sorting-bar">
            <label htmlFor="sort-by" className="sorting-bar__label">Sort by</label>

            {/* Dropdown to select sorting option */}
            <select
                id="sort-by"
                className="sorting-bar__select"
                value={sortBy}
                onChange={onChangeSortBy}
            >
                {sortingOptions.map((option) => (
                    <option key={option} value={option.toLowerCase()} className="sorting-bar__option">
                        {option}
                    </option>
                ))}
            </select>

            {/* Toggle button for ascending/descending order */}
            <Button onClick={onToggleSortOrder} className="sorting-bar__button">
                {isAscending ? '▲' : '▼'}
            </Button>
        </div>
    );
};

export default SortingBar;
