import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title, onAdd, showAdd}) => {
    
    return (
        <header className ='header'>
            <h1 style={{ color: 'green'}}> {title} </h1>
            <Button color ={showAdd ? 'red' : 'green'} 
            text={showAdd ? 'Close': 'Add'} 
            onClick={onAdd} />
            <Button color='green' text= 'Vote Dovewing' />
            <Button color='black' text= 'Vote Scourge'  />
            <Button color='blue' text= 'Vote Feathertail'  />
        </header>
    )
}

Header.defaultProps = {
    title: 'Justice for Dove Plush',
}
/* you can do styling as a variable
const heading style = {} */
// you can comment like this

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header