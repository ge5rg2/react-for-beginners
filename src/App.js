import { useEffect, useState } from "react";

function App() {
  const [loading, setLoading] = useState(true);
  const [coins, setCoins] = useState([]);
  const [buy, setBuy] = useState(false);
  const handleBuyClick = (event) => {
    event.preventDefault();
    setBuy((current) => !current);
    setPrice(false);
  };
  const [price, setPrice] = useState(false);
  const handlePriceClick = (event) => {
    event.preventDefault();
    setPrice((current) => !current);
    setBuy(false);
  };
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
          <form>
            <button onClick={handleBuyClick}>Buy Coins</button>
            <button onClick={handlePriceClick}>Market price</button>
          </form>
          {buy ? (
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
              <select>
                {coins.map((coin) => (
                  <option key={coin.id}>
                    {money / coin.quotes.USD.price} / {coin.name} ({coin.symbol}
                    )
                  </option>
                ))}
              </select>
            </div>
          ) : null}
          {price ? (
            <div>
              <h3>Market Price</h3>
              <hr />
              <select>
                {coins.map((coin) => (
                  <option key={coin.id}>
                    {coin.name} ({coin.symbol}): ${coin.quotes.USD.price} USD
                  </option>
                ))}
              </select>
            </div>
          ) : null}
        </div>
      )}
    </div>
  );
}

export default App;
