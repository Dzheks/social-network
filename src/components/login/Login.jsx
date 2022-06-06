import "./login.css"

export default function Login() {
  return (
    <div className="login">
        <div className="loginWrapper">
            <div className="loginLeft">
                <h3 className="loginLogo">ScialNetwork</h3>
                <span className="loginDesc">
                Общайтесь с друзьями по всему миру в ScialNetwork.
                </span>
            </div>
            <div className="loginRight">
                <div className="loginBox">
                    <input placeholder="Email" className="loginInput" />
                    <input placeholder="Password" className="loginInput" />
                    <button className="loginButton">Log In</button>
                    <span className="loginForgot">Forgot Password?</span>
                    <button className="loginRegisterButton">
                        Greate a New Accaunt
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}
