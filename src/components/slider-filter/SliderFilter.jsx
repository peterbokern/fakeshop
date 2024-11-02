import { Slider } from "antd";
import "./SliderFilter.css";
import { useState } from "react";
import Button from "@/components/button/Button.jsx";

const SliderFilter = ({
                          label,
                          rangeValues,
                          dynamicMax,
                          handleRangeChange,
                      }) => {
    const [minInput, setMinInput] = useState(rangeValues[0].toString());
    const [maxInput, setMaxInput] = useState(rangeValues[1].toString());

    // Determine maximum value based on label
    const maxLimit = label === "Rating Range" ? 5 : dynamicMax;

    // Function to handle changes to the minimum input
    const handleMinChange = (e) => {
        const value = e.target.value;
        setMinInput(value === "" ? "" : Math.max(0, value));
    };

    // Function to handle changes to the maximum input
    const handleMaxChange = (e) => {
        const value = e.target.value;
        setMaxInput(value === "" ? "" : Math.min(maxLimit, value));
    };

    const handleUpdateClick = () => {
        handleRangeChange([
            Number(minInput) || 0,
            Number(maxInput) || maxLimit,
        ]);
    };

    return (
        <div className="slider-filter">
            <label htmlFor="slider" className="slider-filter__label">
                {label}:
            </label>

            <Slider
                range
                draggableTrack
                value={rangeValues}
                min={0}
                max={maxLimit}
                onChange={handleRangeChange}
                className="slider-filter__slider"
            />

            <div className="slider-filter__input-container">
                <input
                    type="number"
                    className="slider-filter__input"
                    placeholder="Min"
                    value={minInput}
                    min={0}
                    onChange={handleMinChange}
                />
                <span className="slider-filter__separator">-</span>
                <input
                    type="number"
                    className="slider-filter__input"
                    placeholder="Max"
                    value={maxInput}
                    min={0}
                    max={maxLimit}
                    onChange={handleMaxChange}
                />

                <Button
                    className="slider-filter__button"
                    onClick={handleUpdateClick}
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

export default SliderFilter;
