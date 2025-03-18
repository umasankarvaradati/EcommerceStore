import {React, useState} from 'react'
import './addproducts.css'
const AddProducts = () => {
    const [products, setProducts] = useState({
        name: '',
        price: '',
        category: '',
        image: '',
        description: '',
        stock: ''
    });

    const addData=async () =>{
        const formData = new FormData();
        formData.append("image", products.image);
        formData.append("name", products.name);
        formData.append("price", products.price);
        formData.append("category", products.category);
        formData.append("description", products.description);
        formData.append("stock", products.stock);
        try{
            const response=await fetch('http://127.0.0.1:8000/api/products/', {
                method: 'POST',
                body: formData, // Send the cart item data
            });
            if (!response.ok) throw new Error("Failed to add item");
            const data = await response.json();
        }catch(error){
        }
    } 

    const handleChange = (e) => {
        const { name, value } = e.target;
        if (name==='image'){
            setProducts({...products, image: e.target.files[0]});
        }
        else{
            setProducts({
            ...products,
            [name]: value,
            });
        }
      }

    const handleSubmit = (e) => {
        e.preventDefault();
        addData();
    }
  return (
    <div className='add-product-container'>
        <h1>Add Products</h1>
        <form action="" onSubmit={handleSubmit} className='add-product-form'>
            <label>Product Name:</label>
            <input type="text" name="name" onChange={handleChange}/>
            <br/>
            <label>Product Price:</label>
            <input type="number" name="price" onChange={handleChange} />
            <br/>
            <label>Category:</label>
            <input type="text" name="category" onChange={handleChange} />
            <br/>
            <label>Product Image:</label>
            <input type="file" name="image" onChange={handleChange} />
            <br/>
            <label>Product Description:</label>
            <input type="text" name="description" onChange={handleChange}  />
            <br/>
            <label>Product Stock:</label>
            <input type="number" name="stock" onChange={handleChange}/>
            <br/>
            <button type="submit">Add Product</button>
        </form>
    </div>
  )
}

export default AddProducts