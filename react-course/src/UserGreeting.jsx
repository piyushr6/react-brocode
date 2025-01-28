import PropTypes from 'prop-types';

function UserGreeting(props) {

   // if (props.isLoggedIn) {
   //    return <h2 className="welcome-message">Welcome {props.username} </h2>
   // } else {
   //    return <h2 className="login-prompt">Please login to continue</h2>
   // }

   const welcomeMessage = <h2 className="welcome-message">Welcome {props.username}</h2>
   const loginPrompt = <h2 className="login-prompt">Please login to continue</h2>

   return props.isLoggedIn ? welcomeMessage : loginPrompt;
}

UserGreeting.prototype = {
   isLoggedIn: PropTypes.bool,
   username: PropTypes.string,
}


UserGreeting.defaultProps = {
   isLoggedIn: false,
   username: "guest",
}
export default UserGreeting
