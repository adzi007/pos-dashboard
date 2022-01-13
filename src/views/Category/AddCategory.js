
import AdminLayout from "../../components/Layouts/AdminLayout"

function AddCategory() {
    return (
        <AdminLayout>
            <div className="container-fluid px-4 mb-5">

                <div className="row mt-3 mb-2">
                    <div className="col-6">
                        <h2 className="mt-4">Add Kategori </h2>
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
                                
                                <form action="">
                                    {/* <div className="row"> */}
                                        {/* <div className="col-6"> */}
                                            <div class="mb-3">
                                                <label for="name" class="form-label">Category Name</label>
                                                <input type="text" class="form-control" id="name" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="slug" class="form-label">Slug</label>
                                                <input type="text" class="form-control" id="slug" />
                                            </div>

                                            <div class="mb-3">
                                                <label for="slug" class="form-label">Parent Category</label>
                                                <select class="form-select" aria-label="Default select example">
                                                    <option selected disabled>--Select Parent--</option>
                                                    <option value="1">One</option>
                                                    <option value="2">Two</option>
                                                    <option value="3">Three</option>
                                                </select>
                                            </div>

                                            <div class="mb-3">
                                                <label for="image" class="form-label">Image Category</label>
                                                <input type="file" class="form-control" id="image" />
                                            </div>

                                            
                                        {/* </div> */}
                                    {/* </div> */}

                                    
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
