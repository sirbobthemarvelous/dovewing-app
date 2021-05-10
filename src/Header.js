import PropTypes from 'prop-types'

const Header = ({title}) => {
    return (
        <div>
            <h1 style={{ color: 'green'}}> {title} Hello from the other side</h1>
        </div>
    )
}

Header.defaultProps = {
    title: 'Justice for Dove Plush',
}
{/* you can do styling as a variable
const heading style = {} */}
// you can comment like this

Header.propTypes = {
    title: PropTypes.string.isRequired,
}
export default Header