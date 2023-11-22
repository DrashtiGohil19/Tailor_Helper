import axios from 'axios'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

export default function Login() {

    const [val, setVal] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()

    const handleLogin = () => {
        axios.post('/login', {
            email: val.email,
            password: val.password
        })
            .then(function (response) {
                if (response.data.status === "Success") {
                    localStorage.setItem("token", response.data.token)
                }
                navigate('/dashboard')
            })
            .catch(function (error) {
            })
    }

    const handleChange = (e) => {
        setVal({ ...val, [e.target.name]: e.target.value })
    }

    return (
        <div className='login-page'>
            <div className="login-box">
                <div className="card">
                    <div className="card-body login-card-body">
                        <p className="login-box-msg">Sign in to start your session</p>
                        <form method="post">
                            <label>Email</label>
                            <div className="input-group mb-3">
                                <input type="email" className="form-control" placeholder="Email" name='email' value={val.email} onChange={handleChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-envelope" />
                                    </div>
                                </div>
                            </div>
                            <label>Password</label>
                            <div className="input-group mb-3">
                                <input type="password" className="form-control" placeholder="Password" name='password' value={val.password} onChange={handleChange} />
                                <div className="input-group-append">
                                    <div className="input-group-text">
                                        <span className="fas fa-lock" />
                                    </div>
                                </div>
                            </div>
                        </form>

                        <div className="d-flex justify-content-center">
                            <button className='btn btn-primary' onClick={handleLogin}>LOGIN</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}
