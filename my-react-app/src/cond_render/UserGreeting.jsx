import PropTypes from 'prop-types'
function UserGreeting(props){
    const welcomeMessaage= <h2 className="welcome-message">Welcome {props.username}</h2>
    const logInPrompt = <h2 className="login-prompt">Please Log In</h2>
   
   
    return(props.isLoggedIn ? welcomeMessaage : logInPrompt);

}
UserGreeting.propTypes = {
    isLoggedIn: PropTypes.bool,
    username: PropTypes.string
}
UserGreeting.defaultProps = {
    isLoggedIn: false,
    username: "Guest",
}
export default UserGreeting