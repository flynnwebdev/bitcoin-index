import { useState } from 'react'

function ShowCount({ count }) {
  return <p>You have clicked {count} times!</p>
}

function App() {
  let [count, setCount] = useState(0)

  return (
    <>
      <h1>State</h1>
      <ShowCount count={count} />
      <button onClick={() => setCount(count + 1)}>Click Me!</button>
    </>
  );
}

export default App;
