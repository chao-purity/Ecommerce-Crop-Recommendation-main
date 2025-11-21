import React, { useState } from 'react';
import './Addproduct.css';
import upload_area from '../../assets/upload_area.svg';

const Addproduct = () => {
  const [productDetails, setProductDetails] = useState({
    name: "",
    description: "",
    image: null,
    category: "cereals",
    new_price: "",
    old_price: "",
    tags: "",
    varieties: []
  });

  const [varietyInput, setVarietyInput] = useState('');
  const [varieties, setVarieties] = useState([]);

  const imageHandler = (e) => {
    setProductDetails(prevDetails => ({
      ...prevDetails,
      image: e.target.files[0]
    }));
  };

  const changeHandler = (e) => {
    setProductDetails({
      ...productDetails,
      [e.target.name]: e.target.value
    });
  };

  const addVariety = () => {
    if (varietyInput.trim()) {
      setVarieties([...varieties, varietyInput.trim()]);
      setProductDetails(prevDetails => ({
        ...prevDetails,
        varieties: [...varieties, varietyInput.trim()]
      }));
      setVarietyInput('');
    }
  };

  const removeVariety = (index) => {
    const newVarieties = varieties.filter((_, i) => i !== index);
    setVarieties(newVarieties);
    setProductDetails(prevDetails => ({
      ...prevDetails,
      varieties: newVarieties
    }));
  };

  const handleSubmit = async () => {
    console.log("Submitting product details:", productDetails);
  
    let product = productDetails;
    let formData = new FormData();
    formData.append('image', product.image);
  
    try {
      const uploadResponse = await fetch('http://localhost:4000/upload', {
        method: 'POST',
        headers: {
          Accept: 'application/json',
        },
        body: formData,
      });
  
      const responseData = await uploadResponse.json();
      console.log("Upload response data:", responseData);
  
      if (responseData.success) {
        product.image = responseData.image_url;
        const addProductResponse = await fetch('http://localhost:4000/addproduct', {
          method: 'POST',
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(product),
        });
  
        const addProductData = await addProductResponse.json();
        console.log("Add product response data:", addProductData);
  
        if (addProductData.success) {
          alert("Product Added");
        } else {
          alert("Failed to add product");
        }
      } else {
        alert("Image upload failed");
      }
    } catch (error) {
      console.error("Error during product submission:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  return (
    <div className="add-product">
      <div className="addproduct-itemfield">
        <p>Product title</p>
        <input value={productDetails.name} onChange={changeHandler} type="text" name='name' placeholder='Type here' />
      </div>
      <div className="addproduct-itemfield">
        <p>Description</p>
        <input value={productDetails.description} onChange={changeHandler} type="text" name='description' placeholder='Type here' />
      </div>
      
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Price</p>
          <input value={productDetails.old_price} onChange={changeHandler} type="text" name='old_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-price">
        <div className="addproduct-itemfield">
          <p>Offer Price</p>
          <input value={productDetails.new_price} onChange={changeHandler} type="text" name='new_price' placeholder='Type here' />
        </div>
      </div>
      <div className="addproduct-itemfield">
        <p>Product Category</p>
        <select value={productDetails.category} onChange={changeHandler} name="category" className='addproduct-selector'>
          <option value="cereals">Cereals</option>
          <option value="legumes">Legumes</option>
          <option value="vegetables">Vegetables</option>
        </select>
      </div>
      <div className="addproduct-itemfield">
        <label htmlFor="file-input">
          <img src={productDetails.image ? URL.createObjectURL(productDetails.image) : upload_area} className='addproduct-thumbnail-img' alt="" />
        </label>
        <input onChange={imageHandler} type="file" name='image' id='file-input' hidden />
      </div>
      <div className="addproduct-itemfield">
        <p>Tags</p>
        <input value={productDetails.tags} onChange={changeHandler} type="text" name='tags' placeholder='Type here' />
      </div>

      <div className="addproduct-itemfield">
        <p>Varieties</p>
        <div className="addproduct-variety">
          <input 
            type="text" 
            value={varietyInput} 
            onChange={(e) => setVarietyInput(e.target.value)} 
            placeholder="Add crop varieties" 
          />
          <button type="button" className='addproduct-variety-btn' onClick={addVariety}>Add</button>
        </div>
        <div className="variety-list">
          {varieties.map((variety, index) => (
            <div key={index} className="variety-item">
              {variety}
              <button type="button" className='remove-variety-button' onClick={() => removeVariety(index)}>X</button>
            </div>
          ))}
        </div>
      </div>

      <button onClick={handleSubmit} className='addproduct-btn'>REGISTER PRODUCT</button>
    </div>
  );
}

export default Addproduct;
