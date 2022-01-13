import React, {useEffect, useState} from 'react'
import jwt_decode from "jwt-decode";
import AdminSideMenu from '../AdminSideMenu';
import { Link } from "react-router-dom";
import "./AdminLayout.css";

import axios from 'axios';
import {useNavigate} from "react-router-dom";

function AdminLayout({children}) {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    const [users, setUsers] = useState([]);
    const [infoLayout, setInfoLayout] = useState('ini info');

    const navigate = useNavigate();
    useEffect(() => {
        // getAreaChart();
        // refreshToken();
        sideBarToogle();
    },[]);

    const sideBarToogle = () => {
        const sidebarToggle = document.body.querySelector('#sidebarToggle');
        if (sidebarToggle) {
            sidebarToggle.addEventListener('click', event => {
                event.preventDefault();
                document.body.classList.toggle('sb-sidenav-toggled');
                localStorage.setItem('sb|sidebar-toggle', document.body.classList.contains('sb-sidenav-toggled'));
            });
        }
    }

    const Logout = async () => {
        try {
            await axios.delete('http://localhost:5000/logout');
            navigate("/login");
        } catch (error) {
            console.log(error);
        }
    }

    // const refreshToken = async () => {

    //     try {
            
    //         const respons = await axios.get("http://localhost:5000/token");
    //         setToken(respons.data.accessToken);
    //         const decoded = jwt_decode(respons.data.accessToken);
    //         setName(decoded.name);
    //         setExpire(decoded.exp);

    //         console.log("decoded", decoded);

    //     } catch (error) {

    //         if (error.response) {
    //             navigate("/login");
    //         }
    //     }

    // }

    // console.log(name)

   

    return (
        <div>
            <nav className="sb-topnav navbar navbar-expand navbar-dark bg-blue">
                
                <Link to="/" className="navbar-brand ps-3">POIN OF SALE</Link>
                
                <button className="btn btn-link btn-sm order-1 order-lg-0 me-4 me-lg-0" id="sidebarToggle" href="#!">
                    <img src="/assets/images/burger.png" className='burger-toggle-sidebar' alt="" />
                </button>
                
                <form className="d-none d-md-inline-block form-inline ms-auto me-0 me-md-3 my-2 my-md-0">
                    <div className="input-group d-none">
                        <input className="form-control" type="text" placeholder="Search for..." aria-label="Search for..." aria-describedby="btnNavbarSearch" />
                        <button className="btn btn-primary" id="btnNavbarSearch" type="button"><i className="fas fa-search"></i></button>
                    </div>
                </form>
                
                <ul className="navbar-nav ms-auto ms-md-0 me-3 me-lg-4">
                    <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" id="navbarDropdown" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            {/* <i className="fas fa-user fa-fw"></i> */}
                            <img className='user-login' src="/assets/images/user-lg.jpg" alt="" />
                            <i></i>
                            <span className="user-name mx-1">John Doe</span>
                        </a>
                        <ul className="dropdown-menu dropdown-menu-end" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#!">Settings</a></li>
                            <li><a className="dropdown-item" href="#!">Activity Log</a></li>
                            <li><hr className="dropdown-divider" /></li>
                            <li><a className="dropdown-item" href="#!" onClick={Logout} >Logout</a></li>
                        </ul>
                    </li>
                </ul>
            </nav>

            <div id="layoutSidenav" className='mt-5'>
                <div id="layoutSidenav_nav">
                    {/* side menu */}
                    <AdminSideMenu />
                </div>
                <div id="layoutSidenav_content">
                    <main>
                        {children}
                    </main>
                    {/* <footer className="py-4 bg-light mt-auto">
                        <div className="container-fluid px-4">
                            <div className="d-flex align-items-center justify-content-between small">
                                <div className="text-muted">Copyright &copy; Your Website 2021</div>
                                <div>
                                    <a href="#">Privacy Policy</a>
                                    &middot;
                                    <a href="#">Terms &amp; Conditions</a>
                                </div>
                            </div>
                        </div>
                    </footer> */}
                </div>
            </div>
        </div>
    )
}

export default AdminLayout
