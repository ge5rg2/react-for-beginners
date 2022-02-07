import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [money, setMoney] = useState(0);
  const saveMoneyValue = (event) => {
    setMoney(event.target.value);
  };
  coins.splice(100, coins.length - 100);
  useEffect(() => {
    fetch("https://api.coinpaprika.com/v1/tickers")
      .then((response) => response.json())
      .then((json) => {
        setCoins(json);
        setLoading(false);
      });
  }, []);
  return (
    <div>
      <h1>The Coins! {loading ? "" : `(${coins.length})`}</h1>
      {loading ? (
        <strong>Loading...</strong>
      ) : (
        <div>
          <h3>How much do you have?</h3>
          <form>
            <input
              onChange={saveMoneyValue}
              value={money}
              type="number"
              min="0"
            />
            {" $"}
          </form>
          <hr />
          <h3>You can buy...</h3>
          <ul>
            {coins.map((coin) => (
              <li key={coin.id}>
                {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default App;
