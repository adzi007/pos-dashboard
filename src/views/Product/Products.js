import { Link } from "react-router-dom";
import AdminLayout from "../../components/Layouts/AdminLayout"
import Dt_table from "../../components/Dt_table";

function Products() {
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
                        <Link to="/category/add" className="btn btn-primary mt-4">Add Product</Link>
                        <button type="button" className="btn btn-primary mt-4 mx-1"><i className="icon-print"></i></button>
                        <button type="button" className="btn btn-primary mt-4"><i className="icon-refresh2"></i></button>
                    </div>
                </div>

                
                <div>
                    <div className="row">
                        <div className="col-12">

                            <div className="card">
                                
                                <div className="table-responsive">
                                    <table className="table">
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
                                            <tr>
                                                <th>1</th>
                                                <td>India</td>
                                                <td>Chrome OS</td>
                                                <td>MAC OS</td>
                                                <td>76</td>
                                                <td>76</td>
                                                 <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>2</th>
                                                <td>USA</td>
                                                <td>Internet Explorer</td>
                                                <td>Win 2010</td>
                                                <td>10</td>
                                                <td>10</td>
                                                <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>3</th>
                                                <td>UK</td>
                                                <td>Safari</td>
                                                <td>Mac OS</td>
                                                <td>16</td>
                                                <td>16</td>
                                                 <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>4</th>
                                                <td>UAE</td>
                                                <td>Google Chrome</td>
                                                <td>Win 2013</td>
                                                <td>76.12</td>
                                                <td>76.12</td>
                                                 <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>5</th>
                                                <td>Canada</td>
                                                <td>Internet Explorer</td>
                                                <td>Win 2010</td>
                                                <td>10</td>
                                                <td>10</td>
                                                 <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                            <tr>
                                                <th>6</th>
                                                <td>Turkey</td>
                                                <td>Internet Explorer 8</td>
                                                <td>Win 2010</td>
                                                <td>8</td>
                                                <td>8</td>
                                                 <td className="td-table-action">
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-pencil2"></i></button>
                                                    <button type="button" className="btn btn-light btn-tbl-action"><i className="icon-trash2"></i></button>
                                                </td>
                                            </tr>
                                        </tbody>
                                    </table>
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
