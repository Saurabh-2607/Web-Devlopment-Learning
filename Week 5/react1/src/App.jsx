import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [count, setcount] = useState(0);
  
  return (
 <div>
  <CustomButton count={count} setcount={setcount}/>

 </div>

  )
}

function CustomButton(props) {

  function onclickhanderler() {
    props.setcount(props.count + 1);
  }

  return (
    <button onClick={onclickhanderler}>
      counter {props.count}
    </button>
  )
}

export default App