import Product from "../models/productModel.js"

//@DESC get all products
//@ROUTE GET /product/
//@ACCESS Private
export const getAllProducts = async (req, res) => {
    try {
        const products = await Product.find();

        res.status(200).json({
            message: "Success!",
            count: products.length,
            data: products
        })
    }catch(err){
        console.log(err);
        res.status(500).json({message: "System Error!"})
    }
   
}

//@DESC create a product
//@ROUTE POST /product/
//@ACCESS Private
export const createProduct = async(req, res) => {

    try{
        const {name, unitPrice, quantity, lowStockAlert} = req.body;

        if(!name || !unitPrice){
            return res.status(400).json({message: "Plaese Fill in required Fields!!"})
        }

        const newProduct = {
            name,
            unitPrice,
            quantity,
            lowStockAlert
        }

        const product = await Product.create(newProduct);

        res.status(201).json({message: "Product created Successfull!", data: product})
    }catch(err){
        console.log(err);
        res.status(500).json({message: "System Error!"})
    }
}

//@DESC update a product
//@ROUTE PUT /product/:id
//@ACCESS Private
export const updateProduct = () => {

}

//@DESC  delete a product
//@ROUTE DELETE /product/:id
//@ACCESS Private
export const deleteProduct = () => {

}