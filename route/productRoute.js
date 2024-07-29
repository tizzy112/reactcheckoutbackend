//we require router from express
const {Router} = require("express");

//we import by destructuring our functions from product controller
const {createProduct, getAllProduct,updateProduct} = require("../controller/productController")

//here we declare router
const router = Router();

//we use router to define routes
router.post("/create", createProduct);
router.get("/all", getAllProduct);
router.put("/update/:id", updateProduct);


module.exports = router;