import { useState, useEffect } from 'react';

function App() {
  return <div>
    <br />
      <Counter></Counter>
    </div>
}

function Counter(){

  const [count, setcount] = useState(0);

  useEffect(function(){
    console.log("inside the useEffect");
    setInterval(function(){
      setcount(count => count + 1);
    }, 1000);
  }, []);


  function increaseCount(){
    setcount(count + 1);    
  }

  return <div>
      <h1 id="text">{count}</h1>
      {/* <button onClick={increaseCount}>Increase Count</button> */}
      </div>
  }
export default App
