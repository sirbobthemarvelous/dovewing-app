

import { FaTimes } from 'react-icons/fa'

const Poll = ({poll}) => {
    return (
        <dive className='poll'>
            <h3> 
                {poll.text} <FaTimes style={{ color:
                'red', cursor: 'pointer'}}/></h3>
            <p>{poll.votes}</p>

        </dive>
    )
}

export default Poll