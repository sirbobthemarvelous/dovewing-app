import Header from './Header.js';
import Polls from './Polls.js';
import {useState } from 'react'
import AddPoll from './AddPoll'

const App = () => {
  const [showAddPoll, setShowAddPoll] =useState (true)
  const [polls, setPolls] = useState ([
    {
        id:1,
        text: 'Dovewing',
        votes: 0,
        reminder: true,
    },
    {
        id:2,
        text: 'Scourge',
        votes: 0,
        reminder: true,
    },
    {
        id:3,
        text: 'Feathertail',
        votes: 0,
        reminder: true,
    }
]) 
// add poll
const addPoll = (poll) => {
  const id = Math.floor(Math.random()*10000)+1
  const newPoll = {id, ...poll}
  setPolls([...polls, newPoll])

}

// delete poll function
const deletePoll = (id) => {
  setPolls(polls.filter((poll) => poll.id !== id))

}
//toggle reminder
const toggleReminder = (id) => {
  setPolls(polls.map((poll)=>
  poll.id === id ? { ...poll, reminder: 
  !poll.reminder} : poll))
}
  return (
    <div className='container'>
      <Header onAdd={() => setShowAddPoll(!showAddPoll)}
      showAdd={showAddPoll}
      title={'We Want a Dovewing Plushie'} 
      />
      {showAddPoll && <AddPoll onAdd={addPoll}/>}
      {polls.length > 0 ?<Polls polls ={polls}
       onDelete={deletePoll} onToggle={toggleReminder}
       /> : 'No Polls to Show'}
    </div>
  )
}

export default App;
