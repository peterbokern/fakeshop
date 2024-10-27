
import { Slider } from "antd";
import "./SliderFilter.css";
import Button from "@/components/button/Button.jsx";

const SliderFilter = ({
                          label,
                          rangeValues,
                          dynamicMax,
                          minInput,
                          maxInput,
                          handleRangeChange,
                          setMinInput,
                          setMaxInput,
                      }) => {
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
                max={dynamicMax}
                onChange={handleRangeChange}
                className="slider-filter__slider" /* Custom wrapper class */
            />

            <div className="slider-filter__input-container">
                <input
                    type="number"
                    className="slider-filter__input"
                    placeholder={`Min ${label.toLowerCase()}`}
                    value={minInput}
                    onChange={(e) => setMinInput(e.target.value)}
                />
                <span className="slider-filter__separator">-</span>
                <input
                    type="number"
                    className="slider-filter__input"
                    placeholder={`Max ${label.toLowerCase()}`}
                    value={maxInput}
                    onChange={(e) => setMaxInput(e.target.value)}
                />

                <Button
                    className="slider-filter__button"
                    onClick={() => handleRangeChange([Number(minInput), Number(maxInput)])}
                >
                    Update
                </Button>
            </div>
        </div>
    );
};

export default SliderFilter;
