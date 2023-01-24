// נגדיר אובייקט מסוג ראוטר
const router=require('express').Router();
// קישור לקובץ קוד של המוצרים
const ProductController=require('../controllers/product');

// הגדרנו ניתוב - נקודת קצה שביטת גט לנתיב של מצר
router.get("/",ProductController.GetAllProducts);

/// שליפת מוצר לפי קוד מוצר
router.get("/:id",ProductController.GetProductById);

// עדכון מוצר לפי קוד מוצר
router.put("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Update Product By Id"  + req.params.id});
});

// הוספת מוצר חדש
router.post("/",ProductController.AddProduct);

// מחיקת מוצר לי קוד מוצר
router.delete("/:id",(req,res)=>{
    return res.status(200).json({Msg:"Delete Product By Id"  + req.params.id});
});
/// נוסיף שכבות מתאימות


module.exports=router;