
import './App.css';
import Display from './Display';
import StateClassCounter from './StateClassCounter';
import StatefuctionCounter from './StateFunctionCounter';

function App() {
  const name='Akondo'
  return (
   <>
    {/* <h1 className='cap'>Capello is a good boy</h1>
   <h3>My name is {name}</h3>
  <Display/>
  <hr/> */}
  <h1 className='stateclass'>Class state</h1>
  <StateClassCounter/>
  <hr/>
  <h1 className='stateclass'> Funtional State</h1>
  <StatefuctionCounter/>

  </>
 
  );
}

export default App;
