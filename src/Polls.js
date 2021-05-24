import Poll from './Poll'

const Polls = ({polls}) => {
    
    // lets create some lists with map()
    return (
        <div>
            {polls.map((poll) => (
                <Poll key={poll.id} poll={poll} />
            ))}
        </div>
    )

}



export default Polls