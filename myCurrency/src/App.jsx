import { useState, useEffect } from "react";
import "./App.css";
import useCurrencyInfo from "./hooks/useCurrencyInfo";

function App() {
  const [amount, setAmount] = useState(null);
  const [from, setFrom] = useState("usd");
  const [to, setTo] = useState("inr");
  const [convertedAmount, setConvertedAmount] = useState(null);

  const currencyData = useCurrencyInfo(from);
  const options = Object.keys(currencyData);

  const convert = () => {
    setConvertedAmount(amount * currencyData[to]);
  };

  const swap = () => {
    setFrom(to);
    setTo(from);
    setAmount(convertedAmount);
    setConvertedAmount(amount);
  };

  return (
    <>
      <div className="page">
        <div className="main">
          <div className="content">
            <form
              onSubmit={(e) => {
                e.preventDefault();
                convert();
              }}
            >
              <div className="upper">
                <div className="sec">
                  <label htmlFor="first">Amount</label>
                  <input
                    type="number"
                    id="first"
                    placeholder="amount"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                    value={amount}
                  />
                </div>
                <div className="sec">
                  <label htmlFor="second">From</label>
                  <select
                    name=""
                    id="second"
                    onChange={(e) => {
                      setFrom(e.target.value);
                    }}
                  >
                    {options.map((currency) => (
                      <option value={currency} key={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
                <button className="swap" onClick={swap}>
                  <i className="ri-arrow-left-right-line"></i>
                </button>
                <div className="sec">
                  <label htmlFor="third">To</label>
                  <select
                    name=""
                    id="third"
                    onChange={(e) => {
                      setTo(e.target.value);
                    }}
                  >
                    {options.map((currency) => (
                      <option value={currency} key={currency}>
                        {currency}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="lower">
                <p>
                  {amount} {from} is {convertedAmount} {to}
                </p>
                <button type="submit" > Convert </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
