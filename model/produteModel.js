const mongoose = require('mongoose');

const { Schema } = mongoose;
const productSchema = new Schema({
    productName:{
        type:String,
        required:true
    },
    productDescription:{
        type:String,
        required:true
    },
    productPrice:{
        type:Number,
        required:true
    },
    productImage:{
        type:String,
        required:true
    },
    productQuantity:{
        type:Number,
        required:true
    }
},
 {
    timestamps: true, // Automatically add createdAt and updatedAt timestamps
})
const Product = mongoose.model('Product', productSchema);
module.exports= Product;
