
import "./QuantitySelector.css"
import Button from "@/components/button/Button.jsx";

const QuantitySelector = ({quantity, handleIncrement, handleDecrement, handleValueChange}) => {

    return (
        <div className="quantity-selector">
            <div className="form-control quantity-selector__control">
                <label htmlFor="quantity" className="quantity-selector__label">Qty</label>
                <input className="quantity-selector__input"
                       type="number"
                       value={quantity}
                       onChange={handleValueChange}
                       min="1"
                       id="qty-box"
                       readOnly={true}
                />
            </div>

            <div className="quantity-selector__actions">
                <Button className="quantity-selector__button" onClick={handleIncrement}>+</Button>
                <Button className="quantity-selector__button" onClick={handleDecrement}>-</Button>
            </div>
        </div>
    )
}

export default QuantitySelector;