import { useState, useEffect } from "react";

function BitcoinIndex({ currency }) {
  const [price, setPrice] = useState();
  const [count, setCount] = useState(0);

  // Called on mount only
  useEffect(() => {
    fetch(`https://api.coindesk.com/v1/bpi/currentprice/${currency}.json`)
      .then((res) => res.json())
      .then((data) => setPrice(data.bpi[currency].rate));
  }, []);

  useEffect(() => {
    console.log("Called on any state or prop change");
  });

  useEffect(() => {
    console.log("Called when count changes only");
  }, [count]);

  return (
    <>
      <h1>Bitcoin Index</h1>
      {price ? (
        <p>
          Current Price: {currency} {price}
        </p>
      ) : (
        <p>Loading...</p>
      )}
      {/* <button onClick={() => setCount(count + 1)}>Click Me! {count}</button> */}
    </>
  );
}

export default BitcoinIndex;
