import Product from "../models/product.model.js";

export const getProducts = async (req, res) => {
    try {
        const products = await Product.find();
        res.status(200).json({success: true, data: products });
    } catch (error) {
        console.error("Error fetching products:", error);
        res.status(500).json({success: false, message: "Error fetching products", error: error.message });
    }
}

export const createProduct = async (req, res) => {
    const product = req.body;
    if (!product.name || !product.price || !product.image) {
        return res.status(400).json({ success: true, message: "All fields are required" });
    }

    const newProduct = new Product(product);
    try{
        await newProduct.save();
        res.status(200).json({success:true, data:newProduct});

    }catch (error) {
        console.error("Error creating product:", error);
        res.status(500).json({ success: false, message: "Error creating product", error: error.message });
    }

}

export const updateProduct =  async (req, res) => {
    const {id} = req.params;
    const product = req.body;

    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Invalid product ID" });
    }

    try {
        const updatedProduct = await Product.findByIdAndUpdate(id, product, { new: true });
        res.status(200).json({ success: true, data: updatedProduct });
    } catch (error) {
        console.error("Error updating product:", error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
}

export const deleteProduct = async (req, res) => {
    const {id} = req.params;
    if(mongoose.Types.ObjectId.isValid(id) === false) {
        return res.status(404).json({ success: false, message: "Invalid product ID" });
    }
    try{
        await Product.findByIdAndDelete(id);
        res.status(200).json({ success: true, message: "Product deleted successfully" });
    }catch (error) {
        console.error("Error deleting product:", error);
        res.status(500).json({ success: false, message: "Server Error", error: error.message });
    }
    console.log("Deleting product with ID:", id);
}