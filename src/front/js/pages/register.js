import React from "react";


const Register = () => {

    return (
        <div className="mx-auto my-auto flex flex-col w-50">
            <h1 className="text-center">Register</h1>
            <div className="mb-3">
                <label className="form-label">Email address</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Full Name</label>
                <input type="email" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Password</label>
                <input type="password" className="form-control" />
            </div>
            <div className="mb-3">
                <label className="form-label">Confirm your password</label>
                <input type="password" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success w-100">Register</button>
        </div>
    )
};

export default Register;