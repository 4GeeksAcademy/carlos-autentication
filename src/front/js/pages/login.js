import React, {useState} from "react";
import { Link, useNavigate } from "react-router-dom";



const Login = () => {

    const [user, setUser] = useState({});
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div className="mx-auto my-auto flex flex-col w-50">
            <h1 className="text-center">Login</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" onChange={(event) => setUser({
                    ...user,
                    email: event.target.value
                })} />
                <div className="form-text">We'll never share your email with anyone else.</div>
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <div className="d-flex ">
                    <input type="showPassword" className="form-control" onChange={(event) => setUser({
                        ...user,
                        password: event.target.value
                    })}/>
                    <button className="btn btn-success mx-1" 
                        onClick={() => setShowPassword(!showPassword)}
                    >{showPassword ? "🔒" : "👀"}</button>
                </div>
                <div className="my-2">
                    <button className="btn btn-link">Forgot your password?</button>
                    <button type="submit" className="btn btn-success w-100" onClick={() => console.log(user)}>Login</button>
                    <Link to="/register">
                        <button type="submit" className="btn btn-primary w-100 my-2">Register</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default Login;