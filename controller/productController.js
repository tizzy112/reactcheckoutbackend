//import our product model 

const Product  = require("../model/produteModel")


//creating all product
exports.createProduct = async (req,res)=>{
    try{
        console.log("req.body", req.body)
        const product = new Product (req.body);
        await product.save();
        res.status(201).send({
            status:"success",
            message:"product created successfully",
        })
    }catch(error){
        res.status(400).json({message:error.message})
    }
};

//getting all product
exports.getAllProduct = async(req,res)=>{
    try{
        const product = await Product.find();
        res.status(200).send({
            status:"success",
            count: product.length,
            data: product,
        });
    }catch(error){
        res.status(500).json({message:error.message})
    }
}

// update a product
exports.updateProduct = async (req, res) => {
    try{
        const product = await Product.findByIdAndUpdate(req.params.id, 
            req.body,
            {new:true, runValidators:true}
        );
        //if there is no product in out data base
        if(!product){
            return res.status(404).json({message:"product not found"})

        }
        await product.save();
        res.status(200).send({
            status:"success",
            data: product,
        })
    }catch(error){
        res.status(500).json({message: error.message})
    }
};