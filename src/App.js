import { useState, useEffect } from "react";
function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [selected, setSelected] = useState(0);
  const [moneys, setMoneys] = useState(0);
  const [buys, setBuys] = useState(0);
  const handleSelect = (event) => {
    let coinPrice = event.target.value;

    setSelected(event.target.value);
    if (moneys !== 0) {
      setBuys(moneys / coinPrice);
    }
  };
  const onChange = (event) => {
    let money = event.target.value;

    setMoneys(money);
    if (selected !== 0) {
      setBuys(moneys / selected);
    }
  };
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers?limit=100")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? <strong>Loading...</strong> : null}
      <select onChange={handleSelect} value={selected}>
        <option value="">choice</option>
        {coins.map((coin) => (
          <option
            key={coin.name}
            coinname={coin.name}
            value={coin.quotes.USD.price}
          >
            {coin.name} ({coin.symbol}) : ${coin.quotes.USD.price} USD
          </option>
        ))}
      </select>
      <hr />
      <input onChange={onChange} value={moneys} type="number" />
      <hr />
      <label>buy Money : </label>
      <span>{buys}</span>
    </div>
  );
}

export default App;
