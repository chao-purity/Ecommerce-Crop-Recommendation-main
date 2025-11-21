const port = 4000;
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const jwt = require("jsonwebtoken");
const multer = require("multer");
const path = require("path");
const cors = require("cors");

app.use(express.json());
app.use(cors());

//Database Connectio with MongoDB
mongoose.connect("mongodb+srv://chaopurity104:Discipline2024.@cluster0.bqx9uzi.mongodb.net/e-commerce")

//API creation

app.get("/",(req,res)=>{
    res.send("Express app is running")
})

// Image starage engine

const storage = multer.diskStorage({
    destination: './upload/images',
    filename:(req,file,cb)=>{
        return cb(null,`${file.filename}_${Date.now()}${path.extname(file.originalname)}`)
    }
})

const upload = multer({storage:storage})

// Change the endpoint path for serving images
app.use('/images', express.static('upload/images'));

// Modify the upload endpoint for images
app.post("/upload", upload.single('image'), (req, res) => {
    res.json({
        success: 1,
        image_url: `http://localhost:${port}/images/${req.file.filename}`
    });
});


// schema for creating products

const Product = mongoose.model("Product",{
    id:{
        type: Number,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    image:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    old_price:{
        type:Number,
        required:true,
    },
    new_price:{
        type:Number,
        required:true,
    },
    varieties:{
        type:[String],
        required:true,
    },
    tags:{
        type:String,
        required:true,
    },
    date:{
        type:Date,
        default:Date.now,
    },
    available:{
        type:Boolean,
        default: true,
    }
})

app.post('/addproduct', async (req, res) => {
    try {
        // Validate request body
        const { name, category, description, image, old_price, new_price, varieties, tags } = req.body;
        if (!name || !category || !description || !image || !old_price || !new_price || !varieties || !tags) {
            return res.status(400).json({ error: 'Missing required fields in the request body.' });
        }

        // Atomically increment and retrieve the ID value
        const productCount = await Product.countDocuments({});
        const id = productCount > 0 ? productCount + 1 : 1;

        // Create a new product instance
        const product = new Product({
            id,
            name,
            category,
            description,
            image,
            old_price,
            new_price,
            varieties,
            tags,
        });

        // Save the new product
        await product.save();
        
        console.log('Product saved:', product);
        
        // Respond with success
        res.json({
            success: true,
            name: req.body.name,
        });
    } catch (error) {
        console.error('Error adding product:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

app.post('/removeproduct', async (req, res) => {
    try {
        // Find and delete the product based on the provided ID
        const deletedProduct = await Product.findOneAndDelete({ id: req.body.id });

        if (!deletedProduct) {
            return res.status(404).json({ error: 'Product not found.' });
        }

        console.log('Product removed:', deletedProduct);
        
        // Respond with success
        res.json({
            success: true,
            name: deletedProduct.name
        });
    } catch (error) {
        console.error('Error removing product:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

// API for getting all products
app.get('/allproducts', async (req, res) => {
    try {
        // Retrieve all products from the database
        const products = await Product.find({});
        
        console.log("All products fetched");
        
        // Send the products as a response
        res.json(products);
    } catch (error) {
        console.error('Error fetching all products:', error);
        res.status(500).json({ error: 'Internal server error.' });
    }
});

//Schema for User Model
const Users = mongoose.model('Users',{
    name:{
        type:String,
    },
    email:{
        type:String,
        unique:true,
    },
    password:{
        type:String,
    },
    cartData:{
        type:Object,
    },
    date:{
        type:Date,
        default:Date.now,
    }
})

//Creating endpoint for registering the user
app.post('/signup', async (req, res) => {
    try {
        let check = await Users.findOne({ email: req.body.email });
        if (check) {
            return res.status(400).json({ success: false, error: "User with same email address found" });
        }
        
        let cart = {};
        for (let i = 0; i < 300; i++) {
            cart[i] = 0;
        }

        const user = new Users({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password,
            cartData: cart
        });

        await user.save();

        const data = {
            user: {
                id: user.id
            }
        };

        const token = jwt.sign(data, 'secret_ecom');
        res.json({ success: true, token });
    } catch (error) {
        console.error("Error in signup:", error);
        res.status(500).json({ success: false, error: "Internal server error" });
    }
});

//User login
app.post('/login',async (req,res)=>{
    let user = await Users.findOne({email:req.body.email});
    if (user) {
        const passCompare = req.body.password === user.password;
        if (passCompare) {
            const data = {
                user:{
                    id:user.id
                }
            }
            const token = jwt.sign(data,'secret_ecom')
            res.json({success:true,token})
        }
        else
        {
            res.json({success:false,errors:"Wrong Password"});
        }
    }
    else{
        res.json({success:false,errors:"Wrong Email"})
    }
})

//Add to cart API
app.post('/addtocart', async (req,res)=>{
    console.log(req.body);
    res.json({ message: 'Data received successfully' });
})


app.listen(port,(error)=>{
    if (!error) {
        console.log("Server Running on port "+port)
    }
    else
    {
        console.log("Error :"+error)
    }
})
