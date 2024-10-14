interface Message{
    isLoggedIn: boolean
    username: string
}
//using Message Interface to define datatypes
function UserGreeting({isLoggedIn,username}:Message){
    const welcomeMessaage= <h2 className="welcome-message">Welcome {username}</h2>
    const logInPrompt = <h2 className="login-prompt">Please Log In</h2>
   
   
    return(isLoggedIn ? welcomeMessaage : logInPrompt);

}
//for debugging purposes set the datatypes of each values

export default UserGreeting