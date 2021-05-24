import Header from './Header.js';
import Polls from './Polls.js';
import {useState } from 'react'

const App = () => {
  const [polls, setPolls] = useState ([
    {
        id:1,
        text: 'Dovewing',
        votes: 0,
    },
    {
        id:2,
        text: 'Scourge',
        votes: 0,
    },
    {
        id:3,
        text: 'Feathertail',
        votes: 0,
    }
]) 
  return (
    <div className='container'>
      <Header title={'We Want a Dovewing Plushie'} />
      <Polls polls ={polls}/>
    </div>
  )
}

export default App;
