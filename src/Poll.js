

import { FaTimes } from 'react-icons/fa'

const Poll = ({poll, onDelete, onToggle}) => {
    return (
        <dive className={`poll ${poll.reminder ? 
        'reminder' : ''}`} 
        onDoubleClick={() =>onToggle(poll.id)}>
            <h3> 
                {poll.text} <FaTimes style={{ color:
                'red', cursor: 'pointer'}} 
                onClick={() =>onDelete(poll.id)}/></h3>
            <p>{poll.votes}</p>

        </dive>
    )
}

export default Poll