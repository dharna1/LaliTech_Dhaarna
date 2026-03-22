import Product from "../models/product.js";

export const getProductById = async (req, res) => {
  try {
    const product = await Product.findOne({ _id: req.params.id, user: req.user.id });
    if (!product) return res.status(404).json({ message: 'Product not found or unauthorized' });

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getProducts = async (req, res) => {
  try {
    const { page = 1, limit = 4, category, search } = req.query;

    const pageNum = parseInt(page);
    const limitNum = parseInt(limit);

    const filter = { user: req.user.id };

    if (category) {
      filter.category = { $regex: category, $options: "i" };
    }

    if (search) {
      const regexSearch = { $regex: search, $options: "i" };
      const numberSearch = Number(search);

      filter.$or = [
        { name: regexSearch },
        ...(isNaN(numberSearch) ? [] : [{ price: numberSearch }])
      ];
    }

    const skip = (pageNum - 1) * limitNum;

    const products = await Product.find(filter)
      .skip(skip)
      .limit(limitNum);

    const total = await Product.countDocuments(filter);

    res.json({
      total,
      page: pageNum,
      totalPages: Math.ceil(total / limitNum),
      products,
    });

  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createProduct = async (req, res) => {
  try {
    const { name, price, category, description } = req.body;

    const exists = await Product.findOne({ 
      name, 
      price, 
      category, 
      user: req.user.id 
    });

    if (exists) return res.status(400).json({ message: 'You already created this product' });

    const product = new Product({
      name,
      price,
      category,
      description,
      user: req.user.id 
    });

    const savedProduct = await product.save();
    res.status(201).json(savedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// UPDATE product (only for the owner)
export const updateProduct = async (req, res) => {
  try {
    const updatedProduct = await Product.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id }, // ✅ Only update if user owns it
      req.body,
      { new: true }
    );

    if (!updatedProduct) return res.status(404).json({ message: 'Product not found or unauthorized' });
    res.json(updatedProduct);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};


// DELETE product (only for the owner)
export const deleteProduct = async (req, res) => {
  try {
    const deletedProduct = await Product.findOneAndDelete({ _id: req.params.id, user: req.user.id }); // ✅ Only delete if user owns it

    if (!deletedProduct) return res.status(404).json({ message: 'Product not found or unauthorized' });
    res.json({ message: 'Product deleted successfully' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
