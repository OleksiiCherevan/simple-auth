import { useState } from "react";

function LoginForm(props) {
    const { text, handleClick } = props;

    const [email, setEmail] = useState("");
    const [pass, setPass] = useState("");

    return (
        <div className="login-form">
            <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="email"
            />
            <input
                type="password"
                value={pass}
                onChange={(e) => setPass(e.target.value)}
                placeholder="password"
            />
            <button onClick={() => handleClick(email, pass)}>{text}</button>
        </div>
    );
}

export default LoginForm;
