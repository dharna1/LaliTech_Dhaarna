import { useState } from "react";
import { createProduct } from "../api/Api";

export const AddProduct = () => {
  const [product, setProduct] = useState({
    name: "",
    price: "",
    category: "",
    description: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct({ ...product, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!product.name || !product.price || !product.category) {
      alert("Please fill all required fields!");
      return;
    }

    try {
      await createProduct({
        ...product,
        price: Number(product.price),
      });

      alert("✅ Product added successfully!");
      setProduct({ name: "", price: "", category: "", description: "" });
    } catch (error) {
      console.error("Error adding product:", error.response?.data || error.message);
      alert(`❌ Failed to add product: ${error.response?.data?.message || "Unknown error"}`);
    }
  };

  return (
    <div className="add-container">
      <h2>Add New Product</h2>
      <form className="add-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Product Name"
          required
          name="name"
          value={product.name}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Category"
          required
          name="category"
          value={product.category}
          onChange={handleChange}
        />

        <input
          type="text"
          placeholder="Price"
          required
          name="price"
          value={product.price}
          onChange={handleChange}
        />

        <textarea
          name="description"
          placeholder="Description"
          required
          value={product.description}
          onChange={handleChange}
        ></textarea>

        <button type="submit" className="btn-submit">Add Product</button>
      </form>
    </div>
  );
};
