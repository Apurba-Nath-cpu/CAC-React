import PropTypes from "prop-types";
import { useId } from "react";

function InputBox({
  label,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,
  className = "",
}) {
 
  const amountInputId = useId();

  return (
      <div className={`bg-white p-3 rounded-lg text-sm flex ${className}`}>
          <div className="w-1/2">
              <label htmlFor={amountInputId} className="text-black/40 mb-2 inline-block">
                  {label}
              </label>
              <input
                  id={amountInputId}
                  className="outline-none w-full bg-transparent py-1.5"
                  type="number"
                  min={0}
                  placeholder="Amount"
                  disabled = {amountDisable}
                  value={amount}
                  onChange={(e) => onAmountChange && onAmountChange(Number(e.target.value))}
              />
          </div>
          <div className="w-1/2 flex flex-wrap justify-end text-right">
              <p className="text-black/40 mb-2 w-full">Currency Type</p>
              <select
                  className="rounded-lg px-1 py-1 bg-gray-100 cursor-pointer outline-none"
                  value={selectCurrency}
                  disabled={currencyDisable}
                  onChange={(e) => onCurrencyChange && onCurrencyChange(e.target.value)}
              >
                  
                      {currencyOptions.map((curr) => (
                        <option
                        key={curr}
                        value={curr}
                        >
                          {curr.toUpperCase()}
                        </option>
                      ))}
              
              </select>
          </div>
      </div>
  );
}

InputBox.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
  amount: PropTypes.number.isRequired,
  onAmountChange: PropTypes.func.isRequired,
  onCurrencyChange: PropTypes.func.isRequired,
  currencyOptions: PropTypes.arrayOf(PropTypes.string).isRequired,
  selectCurrency: PropTypes.string.isRequired,
  amountDisable: PropTypes.bool.isRequired,
  currencyDisable: PropTypes.bool.isRequired,
}

export default InputBox;
