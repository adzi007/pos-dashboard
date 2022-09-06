import React, { useState, useEffect } from 'react'
import axios from 'axios';
import {useNavigate} from "react-router-dom";
import { fetchUsers } from '../store/actions/userActions';
import { getToken } from '../store/actions/authActions';
import { getCategory } from '../store/actions/categoryAction';
import { useSelector, useDispatch } from "react-redux";
import AdminLayout from "../components/Layouts/AdminLayout";


function Dashboard() {

    const [name, setName] = useState('');
    const [token, setToken] = useState('');
    const [expire, setExpire] = useState('');
    // const [users, setUsers] = useState([]);

    const navigate = useNavigate();
    const dispatch = useDispatch();

    useEffect(() => {

        refreshToken();
        // dispatch(fetchUsers());       

    },[]);

    const refreshToken = async () => {

            await dispatch(getToken());
            dispatch(getCategory());

    }

    const auth =  useSelector((state) => state);
    const counter = useSelector((state) => state.counter.counter);
    const users = useSelector( (state) => state.user );

    const handleTambah = () => {
        dispatch({
            type: "TAMBAH_COUNTER"
        })
    }

    const handleKurang = () => {
        
        dispatch({
            type: "KURANG_COUNTER"
        })
    }

    const reGetCategory = () => {
        dispatch(getCategory());
    }

    return (
        <>
            <AdminLayout>
                <div className="container-fluid px-4">
                    <h1 className="mt-4">Dashboard</h1>
                    <ol className="breadcrumb mb-4">
                        <li className="breadcrumb-item active">Dashboard</li>
                    </ol>
                    <div className="row">
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-primary text-white mb-4">
                                <div className="card-body">Primary Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-warning text-white mb-4">
                                <div className="card-body">Warning Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-success text-white mb-4">
                                <div className="card-body">Success Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                        <div className="col-xl-3 col-md-6">
                            <div className="card bg-danger text-white mb-4">
                                <div className="card-body">Danger Card</div>
                                <div className="card-footer d-flex align-items-center justify-content-between">
                                    <a className="small text-white stretched-link" href="#">View Details</a>
                                    <div className="small text-white"><i className="fas fa-angle-right"></i></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* <p>
                        count:  { counter }
                    </p>
                    <button type="button" className="btn btn-primary" onClick={() => handleTambah() }>add</button>
                    <button type="button" className="btn btn-primary" onClick={() => handleKurang() }>min</button> */}


                    <br />
                    {/* <button type="button" className="btn btn-primary" onClick={() => getKategori() }>get cateogry</button> */}


                           
                </div>
            </AdminLayout>
        </>
    )
}

export default Dashboard
