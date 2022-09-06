import React, { useState, useEffect  } from 'react'
import { Link } from "react-router-dom";
import AdminLayout from "../../components/Layouts/AdminLayout"
import Dt_table from "../../components/Dt_table";
import { useSelector, useDispatch } from "react-redux";
import { getToken } from "../../store/actions/authActions";
import { getProduct } from "../../store/actions/productAction";
import { deleteProductAction } from '../../functions/product';
import Swal from 'sweetalert2';

function Products() {

    const dispatch = useDispatch();

    useEffect(() => {

        initData();
       
    },[]);

    const initData = async () => {

        await dispatch(getToken());
        dispatch(getProduct());
    }

    const product = useSelector( (state) => state.product );
    const offset = (product.page.offset !== undefined ? product.page.offset : 0) + 1;

    console.log("product", product);

    const deleteProduct = async (id, name) => {

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

                let deleteResponse = await deleteProductAction(id);

                // console.log("deleteResponse", deleteResponse);

                if (deleteResponse.status == 200) {

                    dispatch(getProduct());

                    Swal.fire(
                        'Deleted!',
                        'Your product has been deleted.',
                        'success'
                    )
                }else{

                    alert("failed delete product");
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
                        <h2 className="mt-4">Daftar Product </h2>
                        <ol className="breadcrumb mb-2">
                            <li className="breadcrumb-item ">Dashboard</li>
                            <li className="breadcrumb-item active">product</li>
                        </ol>
                    </div>
                    <div className="col-6 d-flex align-items-center justify-content-end">
                        <Link to="/product/add" className="btn btn-primary mt-4">Add Product</Link>
                        <button type="button" className="btn btn-primary mt-4 mx-1"><i className="icon-print"></i></button>
                        <button type="button" className="btn btn-primary mt-4"><i className="icon-refresh2"></i></button>
                    </div>
                </div>

                
                <div>
                    <div className="row">
                        <div className="col-12">

                            <div className="card">
                                
                                <div className="table-responsive">
                                    <Dt_table datasource="testdata" datastate={product} pageNavigation={getProduct} setSearch="SET_SEARCH_PRODUCT">
                                        <thead className="thead-light">
                                            <tr>
                                                <th>&nbsp;&nbsp;#</th>
                                                <th scope="col">Image</th>
                                                <th scope="col">Produck Name</th>
                                                <th scope="col">Category</th>
                                                <th scope="col">Price</th>
                                                <th scope="col">Stok</th>
                                                <th></th>
                                            </tr>
                                        </thead>
                                        <tbody className="customtable">

                                            { product.data.map( (row, index) => { 

                                                return(
                                                    <tr key={index}>
                                                        <th>{ offset + index }</th>
                                                        <td>
                                                            <img src={ row.image } className="img-thumbnail" alt="..." width="50px" />
                                                        </td>
                                                        <td>{ row.name }</td>
                                                        <td>{ row.category.name }</td>
                                                        <td>{ 'Rp. ' + row.price }</td>
                                                        <td>{ row.stock }</td>
                                                        <th>
                                                            <Link to={ '/product/edit/' + row.id } className="btn btn-light btn-tbl-action" ><i className="icon-pencil2"></i></Link>
                                                            <button type="button" className="btn btn-light btn-tbl-action" onClick={() => deleteProduct(row.id, row.name) }><i className="icon-trash2"></i></button>
                                                        </th>
                                                    </tr>
                                                )
                                                                                            
                                            })}
                                            
                                        </tbody>
                                    </Dt_table>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

        </AdminLayout>
    )
}

export default Products
