import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { getSingleProduct, updateProduct } from "../api/Api";

export const EditProduct = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  useEffect(() => {
    if (id) {
      getSingleProduct(id).then((res) => {
        const data = res.data;
        setProduct({
          name: data.name || "",
          price: data.price || "",
          category: data.category || "",
          description: data.description || "",
        });
      });
    }
  }, [id]);

  // Handle form input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields!");
      return;
    }

    if (id) {
      await updateProduct(id, { ...product, price: Number(product.price) });
      alert("Product updated successfully!");
      navigate("/"); // Redirect to home page
    } else {
      alert("No product selected to edit!");
    }
  };

  return (
    <div className="add-container">
      <h2>Edit Product</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          name="name"
          value={product.name}
          onChange={handleChange}
        />
        <input
          type="number"
          placeholder="Price"
          name="price"
          value={product.price}
          onChange={handleChange}
        />
        <input
          type="text"
          placeholder="Category"
          name="category"
          value={product.category}
          onChange={handleChange}
        />
        <textarea
          placeholder="Description"
          name="description"
          value={product.description}
          onChange={handleChange}
        ></textarea>

        <div className="btn-group">
          <button type="submit" className="btn-submit">
            Update Product
          </button>
          <button type="button" className="btn-cancel" onClick={() => navigate("/")}>
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
};
