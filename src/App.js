import React, {useState} from "react";
import ReactDOM from "react-dom"
import Paypal from './components/paypal'

function App() {
  const[checkout, setCheckout] = useState(false)
  function handleCheckout(){
    setCheckout(true)
  }
  return(
    <div>
      {checkout?<Paypal/>:<button onClick={handleCheckout}>checkout</button>}
      
    </div>
  )
}

export default App;
