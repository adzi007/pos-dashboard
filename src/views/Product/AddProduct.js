import { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import AdminLayout from "../../components/Layouts/AdminLayout"
import AutocompleteProduct from "../../components/AutocompleteProduct";
import SeletParentProduct from "../../components/SeletParentProduct";
import { getToken } from "../../store/actions/authActions";
import { getCategoryAll } from "../../store/actions/categoryAction";
import { postProduct } from "../../functions/product";

function AddProduct() {

    const [name, setName]                           = useState('');
    const [image, setImage]                         = useState([]);
    const [category_id, setCategory_id]             = useState('0');
    const [barcode, setBarcode]                     = useState('');
    const [sku, setSku]                             = useState('');
    const [product_type, setProduct_type]           = useState('');
    const [cost, setCost]                           = useState(0);
    const [price, setPrice]                         = useState(0);
    const [discount, setDiscount]                   = useState(0);
    const [stock, setStock]                         = useState(0);
    const [tax, setTax]                             = useState(0);
    const [parent_product_id, setParent_product_id] = useState('0');

    const [previewImage, setPreviewImage] = useState('/assets/images/default.png');

    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {

        initData();
       
    },[]);

    const initData = async () => {

        await dispatch(getToken());
        dispatch(getCategoryAll());
        
    }

    const category = useSelector( (state) => state.category );


    const setSelectedParent = (selectedValue) => {
        setParent_product_id(selectedValue)
    }

    const changeImage = (file) => {

        setImage(file)
        let imgSrc = URL.createObjectURL(file)
        setPreviewImage(imgSrc)
    }

    const submitProduct = async (e) => {
        
        e.preventDefault();

        let data = new FormData();

        data.append('name', name);
        data.append('image', image);
        data.append('category_id', category_id);
        data.append('barcode', barcode);
        data.append('sku', sku);
        data.append('product_type', product_type);
        data.append('cost', cost);
        data.append('price', price);
        data.append('discount', discount);
        data.append('stock', stock);
        data.append('tax', tax);
        data.append('parent_product_id', parent_product_id);

        let inputProduct = await postProduct(data);

        if(inputProduct.status == 200){
            navigate("/product");
        }else{
            alert("failed to add category");
            console.log(inputProduct);
        }


    }


    return (
        <AdminLayout>
            <div className="container-fluid px-4">
                <h1 className="mt-4">Add Produck</h1>
                <ol className="breadcrumb mb-4">
                    <li className="breadcrumb-item ">Dashboard</li>
                    <li className="breadcrumb-item ">Product</li>
                    <li className="breadcrumb-item active">Add Category</li>
                </ol>

                <div>
                    <div className="row">
                        <div className="col-12">
                            
                            <div className="card p-3 mb-5">
                                
                                <form  onSubmit={submitProduct}>
                                    <div className="row">
                                        <div className="col-6">

                                            <div className="mb-3">
                                                <label className="form-label">Product Name</label>
                                                <input type="text" className="form-control" id="name" value={name} onChange={ (e) => setName(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Category</label>
                                                <select className="form-select" name="parent_category" id="parent_category" onChange={ (e) => setCategory_id(e.target.value) } value={category_id} >
                                                    <option value="0" disabled>--Select Parent--</option>

                                                    { category.allData.map( (row) => { 

                                                        return( 
                                                            <option value={row.id} key={row.id}>{ row.name }</option>
                                                        )

                                                    })}
                                                </select>
                                            </div>


                                            <div className="mb-3">
                                                <label className="form-label">Barcode</label>
                                                <input type="text" className="form-control" id="barcode" value={barcode} onChange={ (e) => setBarcode(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">SKU</label>
                                                <input type="text" className="form-control" id="sku" value={sku} onChange={ (e) => setSku(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Product Type</label>
                                                <select className="form-select" aria-label="Default select example" id="product_type" value={product_type} onChange={ (e) => setProduct_type(e.target.value)}>
                                                    <option value="" disabled>--Select Parent--</option>
                                                    <option value="consumable">consumable</option>
                                                    <option value="service">service</option>
                                                    <option value="storable product">storable product</option>
                                                </select>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Cost</label>
                                                <input type="text" className="form-control" id="cost" value={cost} onChange={ (e) => setCost(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Price</label>
                                                <input type="text" className="form-control" id="price" value={price} onChange={ (e) => setPrice(e.target.value)}/>
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Discount</label>
                                                <input type="text" className="form-control" id="discount" value={discount} onChange={ (e) => setDiscount(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Stock</label>
                                                <input type="number" className="form-control" id="stock" value={stock} onChange={ (e) => setStock(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Tax</label>
                                                <input type="text" className="form-control" id="tax" value={tax} onChange={ (e) => setTax(e.target.value)} />
                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Prent Product</label>
                                                <SeletParentProduct onChangeSelect={setSelectedParent} />
                                            </div>
                                            
                                        </div>
                                        <div className="col-6">

                                            <div className="my-3">

                                                <img src={previewImage} className="img-thumbnail" width="140px" alt="..." />

                                            </div>

                                            <div className="mb-3">
                                                <label className="form-label">Image Category</label>
                                                <input type="file" className="form-control" id="image" onChange={e => changeImage(e.target.files[0])} />
                                            </div>

                                        </div>

                                        <div className="col-12 mt-3">
                                            <button className="btn btn-primary" type="submit">Submit form</button>
                                            <Link to="/product/" className="btn btn-light ms-2">Cancel</Link>   
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
