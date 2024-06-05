import './App.css'
import {useState} from 'react';
import { Instructions } from './components/Instructions'

function App() { 
  const [price, setPrice] = useState(100)

  function handleClick(){
    setPrice(75);
    console.log(price);
  }

  return (
    <>
      <section id='instructions'>
        <Instructions/>
      </section>      

      <div>
            <p data-testid="price">{price}</p>
            <button onClick = {handleClick}>Apply Discount</button>
        </div>
    </>
  )
}

export default App
