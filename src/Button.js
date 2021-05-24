import PropTypes from 'prop-types'

const Button = ({color, text}) => {
    const onClick = (e) =>{
        console.log(e)
    }

    return <button onclick={onClick} 
    style={{ backgroundColor: color}} 
    className='btn'> {text} </button>
}

Button.defaultProps = {
    color: 'green'
}

Button.propTypes = {
    text: PropTypes.string,
    color: PropTypes.string,
    onCLick: PropTypes.func,
}
export default Button