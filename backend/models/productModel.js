import mongoose from "mongoose";

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please insert The Product Name!"]
    },
    unitPrice: {
        type: Number,
        required: [true, "Please insert The Product Unit Price!"]
    },
    quantity: {
        type: Number,
        default: 0
    },
    lowStockAlert: {
        type: Number,
        default: 5
    }
}, {
    timestamps: true
})

const Product = mongoose.model("Product", productSchema);

export default Product