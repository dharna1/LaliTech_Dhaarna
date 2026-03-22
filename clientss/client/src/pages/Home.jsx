import { useEffect, useState } from "react";
import { getProducts, deleteProduct } from "../api/Api"; 
import "../App.css";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("");
  const [loading, setLoading] = useState(false);

  const fetchProducts = async () => {
    try {
      setLoading(true);

      // Fetch without pagination
      const res = await getProducts({
        search: search || undefined,
        category: category || undefined,
      });

      setProducts(res.data?.products || []);
    } catch (error) {
      console.error("Error fetching products:", error);
      setProducts([]);
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id) => {
    try {
      await deleteProduct(id);
      fetchProducts(); 
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="container">
      <h2 className="text-area">Product List</h2>

      {/* Filters */}
      <div className="filters">
        <input
          type="text"
          placeholder="Search products..."
          className="product-search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <input
          type="text"
          placeholder="Filter by category..."
          className="product-search"
          value={category}
          onChange={(e) => setCategory(e.target.value)}
        />
        <button className="btn-add" onClick={fetchProducts}>
          Search
        </button>
      </div>

      {/* Product List */}
      <div className="product-list">
        {loading ? (
          <p style={{ textAlign: "center" }}>Loading products...</p>
        ) : products.length > 0 ? (
          products.map((p) => (
            <div className="product-card" key={p._id}>
              <h3>{p.name}</h3>
              <p>Price: ₹{p.price}</p>
              <p>Category: {p.category}</p>
              <p>{p.description}</p>
              <div className="btn-group">
                <button
                  className="btn-edit"
                  onClick={() => navigate(`/edit/${p._id}`)}
                >
                  Edit
                </button>
                <button
                  className="btn-delete"
                  onClick={() => handleDelete(p._id)}
                >
                  Delete
                </button>
              </div>
            </div>
          ))
        ) : (
          <p style={{ textAlign: "center" }}>No products found.</p>
        )}
      </div>
    </div>
  );
};
