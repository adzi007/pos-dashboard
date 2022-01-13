import { Link } from "react-router-dom";

import AdminLayout from "../../components/Layouts/AdminLayout"

function AddProduct() {
    return (
        <AdminLayout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Add Produck</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item ">Product</li>
                    <li className="breadcrumb-item active">Add Category</li>
                </ol>

                <div>
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="card p-3 mb-5">
                                
                                <form action="">
                                    <div className="row">
                                        <div className="col-6">
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Product Name</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="slug" class="form-label">Slug</label>
                                                <input type="text" class="form-control" id="slug" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">Barcode</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">SKU</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="slug" class="form-label">Product Type</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected disabled>--Select Parent--</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">Cost</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">Proce</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">Discount</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="name" class="form-label">Tax</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="slug" class="form-label">Parent Product </label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected disabled>--Select Parent--</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            

                                            
                                        </div>
                                        <div className="col-6">

                                            <div class="mb-3">
                                                <label for="image" class="form-label">Image Category</label>
                                                <input type="file" class="form-control" id="image" />
                                            </div>

                                        </div>

                                        <div class="col-12 mt-3">
                                            <button class="btn btn-primary" type="submit">Submit form</button>
                                        </div>

                                    </div>

                                    
                                </form>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AdminLayout>
    )
}

export default AddProduct
