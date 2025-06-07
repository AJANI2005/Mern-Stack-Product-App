import mongoose from 'mongoose';

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
},{
    timestamps: true, // created At , updatedAt
})

const Product = mongoose.model('Product', productSchema);
// mongoose will create a collection named 'products' in the database
export default Product;