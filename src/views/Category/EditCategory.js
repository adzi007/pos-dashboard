import axios from "axios";
import jwt_decode from "jwt-decode";
import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getToken } from "../../store/actions/authActions";
import { getCategoryAll } from "../../store/actions/categoryAction";
import AdminLayout from "../../components/Layouts/AdminLayout"

function AddCategory() {

    const [name, setName] = useState('');
    const [slug, setSlug] = useState('');
    const [parent_category, setParent_category] = useState('0');
    const [foto, setFoto] = useState([]);


    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        initData();
        
    }, [])

    const initData = async () => {

        await dispatch(getToken());
        dispatch(getCategoryAll());
    }

    const category = useSelector( (state) => state.category );

    const axiosJWT = axios.create();

    const authExpire = useSelector( (state) => state.auth.expire );

    axiosJWT.interceptors.request.use(async (config) => {

        const currentDate = new Date();
        if (authExpire * 1000 < currentDate.getTime()) {
            const response = await axios.get('http://localhost:5000/token');
            config.headers.Authorization = `Bearer ${response.data.accessToken}`;
            const decoded = jwt_decode(response.data.accessToken);
            
            dispatch({
                type: "SET_TOKEN",
                token: response.data.accessToken,
                expire: decoded.exp
            });
        }
    
        return config;
        
    }, (error) => {
        return Promise.reject(error);
    });


    const submitCategory = async (e) => {

        e.preventDefault();

        try {

            let data = new FormData();
            data.append("name", name);
            data.append("slug", slug);
            data.append("parent_category", parent_category);
            data.append('foto', foto);

            const config = {
                headers: { 'content-type': 'multipart/form-data' }
            }
            
            let inputCategory = await axiosJWT.post('http://localhost:5000/category', data, config);

            if(inputCategory.status == 200){

                navigate("/category");

            }else{
                alert("failed to add category");
                console.log(inputCategory);
            }
            
        } catch (error) {
            alert("failed to add category");
            console.log("error", error);
        }

    }

    return (
        <AdminLayout>
            <div className="container-fluid px-4 mb-5">

                <div className="row mt-3 mb-2">
                    <div className="col-6">
                        <h2 className="mt-4">Edit Kategori </h2>
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item ">Dashboard</li>
                            <li className="breadcrumb-item ">Category</li>
                            <li className="breadcrumb-item active">Add Category</li>
                        </ol>
                    </div>
                    
                </div>

                <div>
                    <div className="row">
                        <div className="col-6">
                            
                            <div className="card p-3">
                                
                                <form onSubmit={submitCategory}>
                                    <div className="mb-3">
                                        <label className="form-label">Category Name</label>
                                        <input type="text" className="form-control" id="name" value={name} onChange={(e) => setName(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Slug</label>
                                        <input type="text" className="form-control" id="slug" value={slug} onChange={(e) => setSlug(e.target.value)} />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Parent Category</label>
                                        <select className="form-select" name="parent_category" id="parent_category" onChange={ (e) => setParent_category(e.target.value) } value={parent_category} >
                                            <option value="0" disabled>--Select Parent--</option>

                                            { category.allData.map( (row) => { 

                                                return( 
                                                    <option value={row.id} key={row.id}>{ row.name }</option>
                                                )

                                            })}
                                        </select>
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Image Category</label>
                                        <input type="file" className="form-control" id="foto" onChange={e => setFoto(e.target.files[0])} />
                                    </div>   
                                    <button type="submit" className="btn btn-primary mt-4">Submit</button>
                                    <Link to="/category/" className="btn btn-light mt-4 ms-2">Cancel</Link>                                 
                                </form>
                                
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddCategory
