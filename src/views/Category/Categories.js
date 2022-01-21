import React, { useState, useEffect, lazy  } from 'react'
import { Link } from "react-router-dom";
import AdminLayout from "../../components/Layouts/AdminLayout";
import Dt_table from "../../components/Dt_table";
import { useSelector, useDispatch } from "react-redux";
import { getCategory } from "../../store/actions/categoryAction";
import { getToken } from "../../store/actions/authActions";
import { deleteCategoryAction } from "../../functions/category.js";
import Swal from 'sweetalert2';


function Categories() {
    
    const dispatch = useDispatch();

    const perPage = 10;
    const category = useSelector( (state) => state.category );
    const offset = (category.page.offset !== undefined ? category.page.offset : 0) + 1;

    useEffect(() => {

        initData();
       
    },[]);

    const initData = async () => {

        await dispatch(getToken());
        dispatch(getCategory());
    }
   

    const refreshDataCategory = async () => {
        // let resCategory = await dataCategory();
        // console.log("resCategory", resCategory);
    }

    const deleteCategory = async (id, name) => {

        // console.log("delete", id);
        Swal.fire({
            title: 'Delete Confirmation',
            text: "Are you sure want to delete " + name + " from list ?",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
          }).then( async (result) => {

            if (result.isConfirmed) {

                let deleteResponse = await deleteCategoryAction(id);

                // console.log("deleteResponse", deleteResponse);

                if (deleteResponse.status == 200) {

                    dispatch(getCategory());

                    Swal.fire(
                        'Deleted!',
                        'Your file has been deleted.',
                        'success'
                    )
                }else{

                    alert("failed delete category");
                    console.log(deleteResponse);

                }
            }
          })

    }


    return (
        <AdminLayout>

            <div className="container-fluid px-4 mb-5">

                <div className="row mt-3 mb-2">
                    <div className="col-6">
                        <h2 className="mt-4">Daftar Kategori </h2>
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item ">Dashboard</li>
                            <li className="breadcrumb-item active">Category</li>
                        </ol>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <Link to="/category/add" className="btn btn-primary mt-4">Add Category</Link>
                        <button type="button" className="btn btn-primary mt-4 mx-1"><i className="icon-print"></i></button>
                        <button type="button" className="btn btn-primary mt-4" onClick={refreshDataCategory}><i className="icon-refresh2"></i></button>
                    </div>
                </div>
                
                    <div className="row">
                        <div className="col-12">
                                    
                            <Dt_table datasource="testdata" datastate={category} pageNavigation={getCategory}>
                                <thead className="thead-light">
                                    <tr>
                                        <th> &nbsp;&nbsp;#</th>
                                        <th scope="col">image</th>
                                        <th scope="col">Name</th>
                                        <th scope="col">Parent Category</th>
                                        <th scope="col">Slug</th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody className="customtable">

                                    { category.data.map( (row, index) => { 

                                        return(
                                            <tr key={index}>
                                                <th>{ offset + index }</th>
                                                <td>
                                                    <img src={ row.foto } className="img-thumbnail" alt="..." width="50px" />
                                                </td>
                                                <td>{ row.name }</td>
                                                <td>{ row.parent !== null ? row.parent.name : '' }</td>
                                                <td>{ row.slug }</td>
                                                <th>
                                                    {/* <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button> */}
                                                    <Link to={ '/category/edit/' + row.id } className="btn btn-light btn-tbl-action" ><i className="icon-pencil2"></i></Link>
                                                    <button type="button" className="btn btn-light btn-tbl-action" onClick={() => deleteCategory(row.id, row.name) }><i className="icon-trash2"></i></button>
                                                </th>
                                            </tr>
                                        )
                                                                                    
                                    })}
                                    
                                </tbody>
                            </Dt_table>
                        </div>
                    </div>
            </div>
        </AdminLayout>
    )
}

export default Categories
