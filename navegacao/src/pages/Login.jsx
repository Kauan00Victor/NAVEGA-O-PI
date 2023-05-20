import { useNavigate } from "react-router-dom";
import LoginForm from "./LoginForm";

export default function Login(props) {
    const navigate = useNavigate();

    function handleClick(event) {
        props.onLogin(event);
        navigate("/");
    }

    return (
        <>
            <h1>Login</h1>
            <LoginForm onSubmit={handleClick} />
        </>
    )
}