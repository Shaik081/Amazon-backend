const Product = require('../model/productModel')


    const getProducts = async (req,res) => {
        try{
        const product = await Product.find()

        if(!product){
            return res.status(500).json({error:'products are not found'})
        }

        return res.status(200).json(product)

        }catch(err){
            console.log(`error:${err}`)
            
        }
    }
    const singleProduct = async(req,res) =>{

        const id = req.params.id

        try{

            const getById = await Product.findById(id)

            if(!getById){
                return res.status(500).json({error:'there is no product matches this id'})
            }

            return res.status(200).json({message:'product found',getById})

        }catch(err){
            console.log(`error: ${err}`);
            
        }
    }
    const updateProduct = async(req,res) => {
        const id = req.params.id

        try{

            const updateItem = await Product.findByIdAndUpdate(id,req.body)

            if(!updateItem){
                return res.status(500).json({error:'there is no product matches this id'})
            }

            return res.status(200).json({message:'product has been updated',updateItem})
            

        }catch(err){
            console.log(`error: ${err}`);
            
        }
    }
    const deleteProduct = async(req,res) => {
        const id = req.params.id

        try{

            const deleteItem = await Product.findByIdAndDelete(id)

            if(!deleteItem){
                return res.status(500).json({error:'there is no product matches this id'})
            }

            return res.status(200).json({message:'product has beem deleted'})
            

        }catch(err){
            console.log(`error: ${err}`);
            
        }
    }

const searchProduct = async (req, res) => {
  try {
    const search = req.query.search?.trim() || '';

   
    const query = search ? { name: { $regex: search, $options: 'i' } } : {};

    const products = await Product.find(query);

    return res.json(products);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ error: err.message });
  }
};



module.exports = {getProducts,singleProduct,updateProduct,deleteProduct, searchProduct}