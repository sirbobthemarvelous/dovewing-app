import Poll from './Poll'

const Polls = ({polls, onDelete, onToggle}) => {
    
    // lets create some lists with map()
    return (
        <div>
            {polls.map((poll) => (
                <Poll key={poll.id} poll={poll}
                onDelete={onDelete} onToggle ={onToggle}/>
            ))}
        </div>
    )

}



export default Polls