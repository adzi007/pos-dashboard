import React, {useState} from 'react';
import axios from 'axios';
import {useNavigate} from "react-router-dom";

function Login() {

    const [email, setEmail]       = useState("");
    const [password, setPassword] = useState("");
    const [msg, setMsg]           = useState('');
    const navigate                = useNavigate();

    const Login = async (e) =>{

        e.preventDefault();

        // console.log('username', userName);
        // console.log('password', password);

        try {
            const response = await axios.post("http://localhost:5000/login", {
                email: email,
                password: password
            });
            console.log("response login", response);
            navigate("/");
        } catch (error) {

            console.log("error", error);
            if (error.response) {
                setMsg(error.response.data.msg);
            }   
        }

    }
    
    return (
        <div id="layoutAuthentication" className='bg-primary'>
            <div id="layoutAuthentication_content">
                <main>
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-5">
                                <div className="card shadow-lg border-0 rounded-lg">
                                    <div className="card-header"><h3 className="text-center font-weight-light my-4">Login</h3></div>
                                    <div className="card-body">
                                        <form onSubmit={ Login }>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="username" type="text" value={email} onChange={(e) => setEmail(e.target.value) } autoComplete="none"/>
                                                <label>Username</label>
                                            </div>
                                            <div className="form-floating mb-3">
                                                <input className="form-control" id="password" type="password" value={password} onChange={(e) => setPassword(e.target.value) } autoComplete="none" />
                                                <label>Password</label>
                                            </div>
                                           
                                            <div className="d-flex align-items-center justify-content-end mt-4 mb-0">
                                                <button type='submit' className="btn btn-primary btn-lg w-100" href="index.html">Login</button>
                                            </div>
                                        </form>
                                    </div>
                                   
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
            <div id="layoutAuthentication_footer">
                <footer className="py-4 bg-light mt-auto">
                    <div className="container-fluid px-4">
                        <div className="d-flex align-items-center justify-content-between small">
                            <div className="text-muted">Copyright © Your Website 2021</div>
                            <div>
                                <a href="#">Privacy Policy</a>
                                <a href="#">Terms &amp; Conditions</a>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Login
