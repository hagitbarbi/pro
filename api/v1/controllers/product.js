

// ייצוא אובייקט עם חמש פונקציות עבור כל אחת מהפעולות
// המטרה שכל הלוגיקה תשב בקובץ הנוכחי
module.exports={

GetAllProducts:(req,res)=>{
    const ProductModel=require('../models/product');
    ProductModel.find().then((products)=>{
        console.log(products);
        return res.status(200).json(products);
       }); 
    
},
GetProductById:(req,res)=>{
    const ProductModel=require('../models/product');
    ProductModel.find({Pid:req.params.id}).then((product)=>{
        console.log(product);
        return res.status(200).json(product);
       }); 
   
},
AddProduct:(req,res)=>{
    // let connection=global.db;
    // const pname=req.body.pname;
    // const pdesc=req.body.pdesc;
    // const picname=req.body.picname;

    const ProductModel=require('../models/product');
    ProductModel.insertMany(req.body).then((result)=>{
        console.log(result);
        return res.status(200).json(result);
       }); 
   
 //   
 //   return res.status(200).json(req.body);
},
DeleteProduct:()=>{},
UpdateProduct:()=>{}

};